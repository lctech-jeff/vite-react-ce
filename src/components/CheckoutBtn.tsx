import Btn from '@/components/Btn'
import { useUserStorage, useCartStorage } from '@/services/storageAdapter'
import { useOrderProducts } from '@/application/orderProducts'
import type { User } from '@/domain/user'
import type { Cart } from '@/domain/cart'
function CheckoutBtn({
  text,
  onCheckoutSuccess,
  onCheckoutFailure,
  className,
}: {
  text: string
  onCheckoutSuccess: ({ status, user, cart }: { status: string; user: User; cart: Cart }) => void
  onCheckoutFailure: ({ status }: { status: string }) => void
  className: string
}) {
  const { user } = useUserStorage()
  const { cart } = useCartStorage()
  const { orderProducts } = useOrderProducts()

  const handleCheckout = async () => {
    if (!user?.id) return window.alert('請先登入！')
    try {
      const isSuccess = await orderProducts(user, cart)
      if (!isSuccess) throw new Error()
      onCheckoutSuccess({
        status: 'success',
        user: user,
        cart: cart,
      })
    } catch (e) {
      console.log(e)
      onCheckoutFailure({
        status: 'failure',
      })
    }
  }
  return (
    <div className={className}>
      <Btn onClick={handleCheckout}>
        {text}&nbsp;({cart?.products.length})
      </Btn>
    </div>
  )
}

export default CheckoutBtn
