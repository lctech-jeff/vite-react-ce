import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { useCallback } from 'react';
import type { User } from '@/domain/user'
import type { Cart } from '@/domain/cart'
import type { Order } from '@/domain/order'
import type { Product } from '@/domain/product'

const userEmpty: User = {
  id: '',
  name: '',
  email: '',
  preferences: [],
  allergies: [],
}

export const useUserStore = () => {
  const user = useAppSelector((state) => state.user.user)
  const dispatch = useAppDispatch()
  const updateUser = useCallback(
    (user?: User) => dispatch({ type: 'user/updateUser', payload: user }),
    [dispatch]
  )

  return {
    user,
    updateUser,
    clearUser: () => updateUser({ ...userEmpty }),
  }
}

export const useCartStore = () => {
  const cart = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch()
  const updateCart = useCallback(
    (cart?: Cart) => dispatch({ type: 'cart/updateCart', payload: cart }),
    [dispatch]
  )

  return {
    cart,
    updateCart,
    emptyCart: () => updateCart({ products: [] }),
  }
}

export const useOrderStore = () => {
  const orders = useAppSelector((state) => state.order.orders)
  const dispatch = useAppDispatch()
  const updateOrders = useCallback(
    (orders?: Order[]) => dispatch({ type: 'order/updateOrders', payload: orders }),
    [dispatch]
  )

  return {
    orders,
    updateOrders,
  }
}

export const useProductStore = () => {
  const cookies = useAppSelector((state) => state.product.cookies)
  const dispatch = useAppDispatch()
  const updateCookies = useCallback(
    (cookies?: Product[]) => dispatch({ type: 'product/updateCookies', payload: cookies }),
    [dispatch]
  )

  return {
    cookies,
    updateCookies,
  }
}