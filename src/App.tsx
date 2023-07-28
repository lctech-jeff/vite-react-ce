import { useUserStorage } from '@/services/storageAdapter'
import Btn from '@/components/Btn'

import '@/App.css'
import { useMemo } from 'react'

function App() {
  const { user, updateUser, clearUser } = useUserStorage()
  const isLogin = useMemo(() => !!user.id, [user])

  const logout = () => {
    clearUser()
    setTimeout(() => {
      window.location.href = '/'
    }, 200)
  }
  const login = () => {
    updateUser({
      id: '100001',
      name: 'Jeff',
      email: 'jeff@lctech.com',
      preferences: ['cherry'],
      allergies: ['peanuts'],
    })
  }

  return (
    <>
      <Btn className="btn" onClick={() => isLogin ? logout() : login()}>
        {isLogin ? `嗨！${user.name}` : '登入'}
      </Btn>
    </>
  )
}

export default App
