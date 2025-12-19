import type { User } from "@supabase/supabase-js";

export interface Project {
  name: string;
  time: string;
  userId: User;
  id: number;
}