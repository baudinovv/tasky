import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useUserStore } from './useUsersStore'
import { supabase } from '../supabase/supabase'
import router from '../router'

// 1. Mock External Dependencies
vi.mock('../supabase/supabase', () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
    },
  },
}))

vi.mock('../router', () => ({
  default: {
    push: vi.fn(),
  },
}))

describe('User Store', () => {
  beforeEach(() => {
    // 2. Setup Pinia for each test
    setActivePinia(createPinia())
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('should initialize with user from localStorage if exists', () => {
    const mockUser = { id: '123', email: 'test@test.com' }
    localStorage.setItem('session', JSON.stringify({ user: mockUser }))
    
    const store = useUserStore()
    expect(store.user).toEqual(mockUser)
  })

  it('login successfully sets user and redirects', async () => {
    const store = useUserStore()
    const mockData = { user: { id: '123', email: 'test@test.com' }, session: {} }
    
    // Setup mock response
    vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
      data: mockData,
      error: null,
    })

    await store.login('test@test.com', 'password123')

    expect(store.user).toEqual(mockData.user)
    expect(localStorage.getItem('session')).toContain('test@test.com')
    expect(router.push).toHaveBeenCalledWith('/')
  })

  it('login throws error on failure', async () => {
    const store = useUserStore()
    const mockError = { message: 'Invalid credentials' }
    
    vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
      data: { user: null, session: null },
      error: mockError as any,
    })

    await expect(store.login('wrong@test.com', 'wrong')).rejects.toEqual(mockError)
    expect(router.push).not.toHaveBeenCalled()
  })

  it('logout cleans up state and redirects', async () => {
    const store = useUserStore()
    localStorage.setItem('session', 'some-data')
    
    await store.logout()

    expect(supabase.auth.signOut).toHaveBeenCalled()
    expect(localStorage.getItem('session')).toBeNull()
    expect(router.push).toHaveBeenCalledWith('/login')
  })
})