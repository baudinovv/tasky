import type { User } from "@supabase/supabase-js";

export interface Profile {
  name: string;
  lastName: string;
  role: string;
  user: User;
}