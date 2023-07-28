import { User } from '@/domain/user'
import { Cart } from '@/domain/cart'
import { createOrder } from '@/domain/order'

import { usePayment } from '@/services/paymentAdapter'
import { useNotifier } from '@/services/notificationAdapter'
import { useCartStorage, useOrdersStorage } from '@/services/storageAdapter'

export function useOrderProducts() {
  const notifier = useNotifier()
  const payment = usePayment()
  const orderStorage = useOrdersStorage()
  const cartStorage = useCartStorage()

  const orderProducts = async (user?: User, cart?: Cart): Promise<boolean> => {
    if (!user || !cart || !cart.products.length) return false
    const order = createOrder(user, cart)
    const paid = await payment.tryPay(order.total)
    if (!paid) {
      notifier.notify('付款失敗囉 🤷')
      return false
    }

    const { orders } = orderStorage
    orderStorage.updateOrders([...orders, order])
    cartStorage.emptyCart()
    return true
  }

  return { orderProducts }
}
