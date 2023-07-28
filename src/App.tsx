import { useUserStorage } from '@/services/storageAdapter'
import Btn from '@/components/Btn'
import CheckoutBtn from '@/components/CheckoutBtn'
import CheckoutPanel from '@/components/CheckoutPanel'
import ProductList from '@/components/ProductList'
import type { User } from '@/domain/user'
import type { Cart } from '@/domain/cart'

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

  const handleCheckoutSuccess = ({ status, user, cart }: { status: string; user: User; cart: Cart }) => {
    console.log({ status, user, cart })
  }
  const handleCheckoutFailure = ({ status }: { status: string }) => {
    console.log({ status })
  }

  return (
    <>
      <div className="container">
        <CheckoutBtn
          text="結帳"
          className="my-6"
          onCheckoutSuccess={handleCheckoutSuccess}
          onCheckoutFailure={handleCheckoutFailure}
        />
        <CheckoutPanel title="訂單" className="my-6" />
        <ProductList className="my-6" />
      </div>
      <Btn className="btn" onClick={() => (isLogin ? logout() : login())}>
        {isLogin ? `嗨！${user.name}` : '登入'}
      </Btn>
    </>
  )
}

export default App
