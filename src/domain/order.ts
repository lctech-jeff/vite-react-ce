import { currentDatetime } from '@/lib/date-time'
import { totalPrice } from '@/domain/product'
import { Cart } from '@/domain/cart'
import { User } from '@/domain/user'

export type OrderStatus = 'new' | 'delivery' | 'completed'

export type Order = {
  user: UniqueId
  cart: Cart
  created: DateTimeString
  status: OrderStatus
  total: PriceCents
}

export function createOrder(user: User, cart: Cart): Order {
  return {
    cart,
    user: user.id,
    status: 'new',
    created: currentDatetime(),
    total: totalPrice(cart.products),
  }
}
