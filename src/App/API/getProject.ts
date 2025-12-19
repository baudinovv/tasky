import { supabase } from '../supabase/supabase'

export async function getProject(name: string) {
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('name', name)
    .single()

  if (error) {
    throw error
  }

  return data;
}
