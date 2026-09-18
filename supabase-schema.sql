-- Núcleo: esquema mínimo para grupos privados. Ejecutar en un proyecto Supabase nuevo.
create extension if not exists pgcrypto;
create table public.profiles (id uuid primary key references auth.users(id) on delete cascade,display_name text not null check (char_length(display_name) between 2 and 40),level integer not null default 1 check (level > 0),xp integer not null default 0 check (xp >= 0),created_at timestamptz not null default now());
create table public.groups (id uuid primary key default gen_random_uuid(),name text not null check (char_length(name) between 3 and 50),owner_id uuid not null references public.profiles(id) on delete cascade,invite_code text not null unique default upper(substr(encode(gen_random_bytes(6),'hex'),1,8)),created_at timestamptz not null default now());
create table public.group_members (group_id uuid references public.groups(id) on delete cascade,user_id uuid references public.profiles(id) on delete cascade,role text not null default 'member' check (role in ('owner','member')),xp integer not null default 0 check (xp >= 0),joined_at timestamptz not null default now(),primary key (group_id,user_id));
create table public.study_sessions (id uuid primary key default gen_random_uuid(),user_id uuid not null references public.profiles(id) on delete cascade,group_id uuid references public.groups(id) on delete cascade,subject text not null check (subject in ('quimica','fisica','biologia')),minutes integer not null check (minutes between 1 and 240),xp_earned integer not null check (xp_earned between 0 and 1000),completed_at timestamptz not null default now());
alter table public.profiles enable row level security; alter table public.groups enable row level security; alter table public.group_members enable row level security; alter table public.study_sessions enable row level security;
create or replace function public.is_group_member(requested_group uuid) returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.group_members where group_id=requested_group and user_id=auth.uid()) $$;
revoke all on function public.is_group_member(uuid) from public; grant execute on function public.is_group_member(uuid) to authenticated;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$ begin insert into public.profiles(id,display_name) values(new.id,coalesce(new.raw_user_meta_data->>'display_name',split_part(new.email,'@',1))); return new; end $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
create or replace function public.add_group_owner() returns trigger language plpgsql security definer set search_path=public as $$ begin insert into public.group_members(group_id,user_id,role) values(new.id,new.owner_id,'owner'); return new; end $$;
create trigger on_group_created after insert on public.groups for each row execute procedure public.add_group_owner();
create policy "read own profile or fellow members" on public.profiles for select to authenticated using (id = auth.uid() or exists (select 1 from public.group_members mine join public.group_members theirs on mine.group_id = theirs.group_id where mine.user_id = auth.uid() and theirs.user_id = profiles.id));
create policy "update own profile" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
create policy "insert own profile" on public.profiles for insert to authenticated with check (id = auth.uid());
create policy "members read groups" on public.groups for select to authenticated using (public.is_group_member(id));
create policy "create group" on public.groups for insert to authenticated with check (owner_id = auth.uid());
create policy "members read membership" on public.group_members for select to authenticated using (public.is_group_member(group_id));
create policy "users read group sessions" on public.study_sessions for select to authenticated using (user_id = auth.uid() or public.is_group_member(group_id));
create policy "insert own sessions" on public.study_sessions for insert to authenticated with check (user_id = auth.uid());
create or replace function public.join_group_by_code(requested_code text) returns uuid language plpgsql security definer set search_path = public as $$ declare target uuid; begin select id into target from groups where invite_code = upper(requested_code); if target is null then raise exception 'Código no válido'; end if; insert into group_members(group_id,user_id) values(target,auth.uid()) on conflict do nothing; return target; end $$;
revoke all on function public.join_group_by_code(text) from public; grant execute on function public.join_group_by_code(text) to authenticated;
create policy "group realtime read" on realtime.messages for select to authenticated using (exists (select 1 from public.group_members where user_id=auth.uid() and ('group:'||group_id::text)=(select realtime.topic())) and realtime.messages.extension in ('presence','broadcast'));
create policy "group realtime write" on realtime.messages for insert to authenticated with check (exists (select 1 from public.group_members where user_id=auth.uid() and ('group:'||group_id::text)=(select realtime.topic())) and realtime.messages.extension in ('presence','broadcast'));

-- Preguntas, explicaciones y votos de utilidad dentro del grupo.
create table public.group_posts (id uuid primary key default gen_random_uuid(),group_id uuid not null references public.groups(id) on delete cascade,author_id uuid not null references public.profiles(id) on delete cascade,parent_id uuid references public.group_posts(id) on delete cascade,kind text not null check(kind in ('question','explanation')),title text not null check(char_length(title) between 8 and 120),body text not null check(char_length(body) between 15 and 1200),created_at timestamptz not null default now());
create table public.post_votes (post_id uuid references public.group_posts(id) on delete cascade,user_id uuid references public.profiles(id) on delete cascade,created_at timestamptz not null default now(),primary key(post_id,user_id));
alter table public.group_posts enable row level security; alter table public.post_votes enable row level security;
create policy "group reads posts" on public.group_posts for select to authenticated using(public.is_group_member(group_id));
create policy "members write posts" on public.group_posts for insert to authenticated with check(author_id=auth.uid() and public.is_group_member(group_id));
create policy "authors edit posts" on public.group_posts for update to authenticated using(author_id=auth.uid()) with check(author_id=auth.uid());
create policy "authors delete posts" on public.group_posts for delete to authenticated using(author_id=auth.uid());
create policy "group reads votes" on public.post_votes for select to authenticated using(exists(select 1 from public.group_posts p where p.id=post_id and public.is_group_member(p.group_id)));
create policy "members vote once" on public.post_votes for insert to authenticated with check(user_id=auth.uid() and exists(select 1 from public.group_posts p where p.id=post_id and public.is_group_member(p.group_id) and p.author_id<>auth.uid()));

-- Retos semanales cooperativos y progreso individual auditable.
create table public.weekly_challenges (id uuid primary key default gen_random_uuid(),group_id uuid not null references public.groups(id) on delete cascade,title text not null,target_minutes integer not null check(target_minutes between 30 and 10000),starts_at timestamptz not null,ends_at timestamptz not null check(ends_at>starts_at),created_at timestamptz not null default now());
alter table public.weekly_challenges enable row level security;
create policy "members read challenges" on public.weekly_challenges for select to authenticated using(public.is_group_member(group_id));
create policy "owners create challenges" on public.weekly_challenges for insert to authenticated with check(exists(select 1 from public.group_members where group_id=weekly_challenges.group_id and user_id=auth.uid() and role='owner'));

-- Duelos: el servidor conserva estado y respuestas, sin bonificación por velocidad.
create table public.duels (id uuid primary key default gen_random_uuid(),group_id uuid not null references public.groups(id) on delete cascade,challenger_id uuid not null references public.profiles(id),opponent_id uuid not null references public.profiles(id),status text not null default 'pending' check(status in ('pending','active','completed','declined')),challenger_score integer not null default 0,opponent_score integer not null default 0,winner_id uuid references public.profiles(id),created_at timestamptz not null default now(),completed_at timestamptz,check(challenger_id<>opponent_id));
create table public.duel_turns (id uuid primary key default gen_random_uuid(),duel_id uuid not null references public.duels(id) on delete cascade,user_id uuid not null references public.profiles(id),question_ref text not null,answer_hash text not null,is_correct boolean not null,explanation_seen boolean not null default false,created_at timestamptz not null default now(),unique(duel_id,user_id,question_ref));
alter table public.duels enable row level security; alter table public.duel_turns enable row level security;
create policy "participants read duels" on public.duels for select to authenticated using((challenger_id=auth.uid() or opponent_id=auth.uid()) and public.is_group_member(group_id));
create policy "members challenge peers" on public.duels for insert to authenticated with check(challenger_id=auth.uid() and public.is_group_member(group_id) and exists(select 1 from public.group_members where group_id=duels.group_id and user_id=opponent_id));
create policy "participants read turns" on public.duel_turns for select to authenticated using(exists(select 1 from public.duels d where d.id=duel_id and (d.challenger_id=auth.uid() or d.opponent_id=auth.uid())));
-- Las respuestas se escriben exclusivamente desde una Edge Function que valida la opción,
-- calcula el resultado y usa service_role. El cliente autenticado nunca declara is_correct.
revoke insert, update, delete on public.duel_turns from anon, authenticated;
create index group_posts_recent_idx on public.group_posts(group_id,created_at desc); create index study_sessions_group_idx on public.study_sessions(group_id,completed_at desc); create index duels_group_idx on public.duels(group_id,created_at desc);
