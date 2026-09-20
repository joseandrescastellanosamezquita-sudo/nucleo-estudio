-- Nexo Estudio UVG V8: listado privado de integrantes del grupo.
-- Puede ejecutarse aunque las tablas y funciones anteriores ya existan.

create or replace function public.get_group_members(requested_group uuid)
returns table (
  user_id uuid,
  display_name text,
  role text,
  xp integer,
  joined_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Debes iniciar sesión';
  end if;

  if not exists (
    select 1
    from public.group_members gm
    where gm.group_id = requested_group
      and gm.user_id = auth.uid()
  ) then
    raise exception 'No perteneces a este grupo';
  end if;

  return query
  select gm.user_id, p.display_name, gm.role, gm.xp, gm.joined_at
  from public.group_members gm
  join public.profiles p on p.id = gm.user_id
  where gm.group_id = requested_group
  order by case when gm.role = 'owner' then 0 else 1 end,
           gm.joined_at asc;
end;
$$;

revoke all on function public.get_group_members(uuid) from public;
grant execute on function public.get_group_members(uuid) to authenticated;
