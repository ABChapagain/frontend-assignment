'use client'

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/carts/cartSlice'

export const store = configureStore({
  reducer: {
    carts: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
