import type { Cart } from '@/domain/cart'
import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'my-cart'
let initCart: Cart = { products: [] };
const cartInStorage = localStorage.getItem(STORAGE_KEY)
if (cartInStorage) initCart = JSON.parse(cartInStorage)

const cartStore = createSlice({
  name: 'cart',
  initialState: { cart: <Cart>initCart },
  reducers: {
    updateCart(state, action) {
      state.cart.products = [...action.payload]
    },
    emptyCart(state) {
      state.cart.products = []
    }
  },
})

export const { updateCart, emptyCart } = cartStore.actions

export default cartStore.reducer
