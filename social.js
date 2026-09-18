import { NUCLEO_CONFIG } from "./config.js";

let clientPromise;
export const isSocialConfigured = () => Boolean(NUCLEO_CONFIG.supabaseUrl && NUCLEO_CONFIG.supabaseAnonKey);

export async function getSocialClient() {
  if (!isSocialConfigured()) return null;
  if (!clientPromise) clientPromise = import("https://esm.sh/@supabase/supabase-js@2").then(({ createClient }) =>
    createClient(NUCLEO_CONFIG.supabaseUrl, NUCLEO_CONFIG.supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    })
  );
  return clientPromise;
}

export async function signInWithEmail(email) {
  const client = await getSocialClient();
  if (!client) throw new Error("El modo social todavía no está configurado.");
  return client.auth.signInWithOtp({ email, options: { emailRedirectTo: location.origin + location.pathname } });
}

export async function joinGroup(code) {
  const client = await getSocialClient();
  if (!client) throw new Error("El modo social todavía no está configurado.");
  const { data, error } = await client.rpc("join_group_by_code", { requested_code: code.trim().toUpperCase() });
  if (error) throw error;
  return data;
}

export async function enterStudyRoom(groupId, profile) {
  const client = await getSocialClient();
  if (!client) return null;
  const channel = client.channel(`group:${groupId}`, { config: { private: true, presence: { key: profile.id } } });
  await channel.subscribe(async status => { if (status === "SUBSCRIBED") await channel.track({ name: profile.name, studying: profile.subject, online_at: new Date().toISOString() }); });
  return channel;
}

export async function listGroupPosts(groupId) {
  const client = await getSocialClient();
  if (!client) return [];
  const { data, error } = await client.from("group_posts").select("id,kind,title,body,created_at,author_id").eq("group_id", groupId).order("created_at", { ascending: false }).limit(50);
  if (error) throw error;
  return data;
}

export async function publishGroupPost({ groupId, kind, title, body, parentId = null }) {
  const client = await getSocialClient();
  if (!client) throw new Error("El modo social todavía no está configurado.");
  const { data: { user } } = await client.auth.getUser();
  if (!user) throw new Error("Debes iniciar sesión.");
  const { data, error } = await client.from("group_posts").insert({ group_id: groupId, author_id: user.id, parent_id: parentId, kind, title, body }).select().single();
  if (error) throw error;
  return data;
}

export async function markPostHelpful(postId) {
  const client = await getSocialClient();
  if (!client) throw new Error("El modo social todavía no está configurado.");
  const { data: { user } } = await client.auth.getUser();
  if (!user) throw new Error("Debes iniciar sesión.");
  const { error } = await client.from("post_votes").insert({ post_id: postId, user_id: user.id });
  if (error) throw error;
}

export async function challengeMember({ groupId, opponentId }) {
  const client = await getSocialClient();
  if (!client) throw new Error("El modo social todavía no está configurado.");
  const { data: { user } } = await client.auth.getUser();
  if (!user) throw new Error("Debes iniciar sesión.");
  const { data, error } = await client.from("duels").insert({ group_id: groupId, challenger_id: user.id, opponent_id: opponentId }).select().single();
  if (error) throw error;
  return data;
}
