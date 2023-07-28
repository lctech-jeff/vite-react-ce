import type { Order } from '@/domain/order'
import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'my-order'
let initOrder: Order[] = [];
const ordersInStorage = localStorage.getItem(STORAGE_KEY)
if (ordersInStorage) initOrder = JSON.parse(ordersInStorage)


const orderStore = createSlice({
  name: 'order',
  initialState: { orders: <Order[]>initOrder },
  reducers: {
    updateOrders(state, action) {
      state.orders = [...action.payload]
    },
  },
})

export const { updateOrders } = orderStore.actions

export default orderStore.reducer
