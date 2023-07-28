import type { Product } from '@/domain/product'
import { createSlice } from '@reduxjs/toolkit'
import { cookies } from '@/services/fakeData'

const productStore = createSlice({
  name: 'product',
  initialState: { cookies:<Product[]>cookies },
  reducers: {
    updateOrders(state, action) {
      state.cookies = [...action.payload]
    },
  },
})

export const { updateOrders } = productStore.actions

export default productStore.reducer
