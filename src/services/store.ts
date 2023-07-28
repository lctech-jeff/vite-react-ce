import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '@/services/reducers/user.ts';
import cartReducer from '@/services/reducers/cart.ts';
import orderReducer from '@/services/reducers/order.ts';
import productReducer from '@/services/reducers/product.ts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    product: productReducer,
  }, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>