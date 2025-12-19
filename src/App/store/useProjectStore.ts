import type { User } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { supabase } from '../supabase/supabase'
import router from '../router'
import type { Profile } from '../../utils/types/Profile'
import type { Project } from '../../utils/types/Project'

export const useProjectStore = defineStore('project', () => {
  const project = reactive<Project>({} as Project)

  async function setProject(obj: Project){
    Object.assign(project, obj);
  }
})
