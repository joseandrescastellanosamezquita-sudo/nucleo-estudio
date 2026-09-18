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

export async function signInWithGoogle() {
  const client = await getSocialClient();
  if (!client) throw new Error("La cuenta de Google todavía no está configurada.");
  const redirectTo = `${location.origin}${location.pathname}`;
  const { data, error } = await client.auth.signInWithOAuth({ provider: "google", options: { redirectTo } });
  if (error) throw error;
  return data;
}

export async function getCurrentUser() {
  const client = await getSocialClient();
  if (!client) return null;
  const { data, error } = await client.auth.getUser();
  if (error) return null;
  return data.user;
}

export async function signOut() {
  const client = await getSocialClient();
  if (!client) return;
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

export async function onAuthChange(callback) {
  const client = await getSocialClient();
  if (!client) return null;
  const { data } = client.auth.onAuthStateChange((_event, session) => callback(session?.user ?? null));
  return data.subscription;
}

export async function loadLearningState() {
  const client = await getSocialClient();
  if (!client) return null;
  const { data: { user } } = await client.auth.getUser();
  if (!user) return null;
  const { data, error } = await client.from("user_learning_state").select("state").eq("user_id", user.id).maybeSingle();
  if (error) throw error;
  return data?.state ?? null;
}

export async function saveLearningState(state) {
  const client = await getSocialClient();
  if (!client) return;
  const { data: { user } } = await client.auth.getUser();
  if (!user) return;
  const { error } = await client.from("user_learning_state").upsert({ user_id: user.id, state, updated_at: new Date().toISOString() });
  if (error) throw error;
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

export async function saveDiagnosticResults(subject, results) {
  const client = await getSocialClient();
  if (!client) return;
  const { data: { user } } = await client.auth.getUser();
  if (!user) return;
  const rows = Object.entries(results).map(([topic,r]) => ({ user_id:user.id, subject, topic, score:Math.round(r.correct/r.total*100), correct_count:r.correct, question_count:r.total }));
  const { error } = await client.from("diagnostic_results").insert(rows);
  if (error) throw error;
}
