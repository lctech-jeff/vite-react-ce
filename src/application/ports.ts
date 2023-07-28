import { Cart } from '@/domain/cart'
import { Order } from '@/domain/order'
import { User } from '@/domain/user'
import { Product } from '@/domain/product'

export interface UserStorageService {
  user: User
  updateUser(user: User): void
  clearUser(): void
}

export interface CartStorageService {
  cart: Cart
  updateCart(cart: Cart): void
  emptyCart(): void
}

export interface OrdersStorageService {
  orders: Order[]
  updateOrders(orders: Order[]): void
}

export interface ProductStorageService {
  cookies: Product[]
  updateCookies(cookies: Product[]): void
}

export interface NotificationService {
  notify(message: string): void
}

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>
}
