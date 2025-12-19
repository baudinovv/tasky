// composables/useProjects.ts
import { reactive, ref } from 'vue'
import { supabase } from '../App/supabase/supabase'
import type { Project } from '../utils/types/Project'

export function useProjects() {
  const projects = ref<Project[]>([])
  const mainProject = reactive<Project>({} as Project)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProjects(userId: string) {
    loading.value = true
    error.value = null
    
    try {
      const { data, error } = await supabase
        .from('Projects')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error
      
      projects.value = data || []
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  async function fetchMainProject(userId: string, name: string) {
    loading.value = true
    error.value = null
    
    try {
      const { data, error } = await supabase
        .from('Projects')
        .select('*')
        .eq('user_id', userId)
        .eq('name', name)

      if (error || data.length === 0) throw error
      
      Object.assign(mainProject, data[0])
      console.log(mainProject)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  async function createProject(name: string) {
    loading.value = true
    error.value = null

    try {
      const { data, error: createError } = await supabase
        .from('Projects')
        .insert({ name })
        .select()
        .single()

      if (createError) throw createError
      
      if (data) {
        projects.value.unshift(data)
      }
      
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return null
    } finally {
      loading.value = false
    }
  }

  async function updateProject(id: number, newTime: number ) {
    try {
      const { data, error: createError } = await supabase
        .from('Projects')
        .update({ time: newTime })
        .eq('id', id);
      if (createError) throw createError
      
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return null
    } finally {
      loading.value = false
    }
  }

  async function deleteProject(id: number) {
    loading.value = true
    error.value = null

    try {
      const { error: deleteError } = await supabase
        .from('Projects')
        .delete()
        .eq('id', id)

      if (deleteError) throw deleteError
      
      projects.value = projects.value.filter(p => p.id !== id)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    deleteProject,
    fetchMainProject,
    updateProject,
    mainProject
  }
}