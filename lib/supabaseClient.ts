import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True once the two env vars are filled in .env.local */
export const isSupabaseConfigured = Boolean(url && anonKey);

/**
 * A single shared browser client. If the keys aren't set yet, this is null —
 * the UI checks `isSupabaseConfigured` and shows a friendly setup message
 * instead of crashing.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;
