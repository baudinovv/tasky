import { supabase } from '../supabase/supabase'

export async function getAllProjects(id: string) {
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('user_id', id)

  if (error) {
    throw error
  }

  return data;
}
