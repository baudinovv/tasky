import type { User } from '@supabase/supabase-js'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../supabase/supabase'
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref<boolean>(false)
   const getStoredUser = () => {
    const session = localStorage.getItem('session')
    if (session) {
      try {
        return JSON.parse(session).user
      } catch {
        return null
      }
    }
    return null
  }
  
  const user = ref<User | null>(getStoredUser())

  function setUser(obj: User) {
    Object.assign(user, obj);
  }

  async function login(log: string, pass: string) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: log,
      password: pass,
    })


    if (error === null) {
      localStorage.setItem('session', JSON.stringify(data))
      setUser(data.user!)
      router.push('/')
    } else{
      throw error;
    }

  }

  async function logout() {
    await supabase.auth.signOut()
    localStorage.removeItem('session')
    router.push('/login')
  }

  return { isLoggedIn, user, login, logout, setUser }
})
