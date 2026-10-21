import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function isSupabaseConfigured(): boolean {
  return (
    typeof supabaseUrl === "string" &&
    supabaseUrl.length > 0 &&
    !supabaseUrl.includes("placeholder-project") &&
    typeof supabaseKey === "string" &&
    supabaseKey.length > 0 &&
    !supabaseKey.includes("placeholder-key")
  );
}

/**
 * Browser-side Supabase client.
 * Returns null if environment variables are not configured,
 * preventing unhandled network exceptions and fake mock auth attempts.
 */
export function createClient() {
  if (!isSupabaseConfigured() || !supabaseUrl || !supabaseKey) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "[BarberFlow Supabase Client]: Running in prototype mode. Supabase environment credentials not configured in .env.local."
      );
    }
    return null;
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseKey);
}
