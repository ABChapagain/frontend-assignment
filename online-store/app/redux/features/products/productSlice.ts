'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getProducts } = productSlice.actions

export default productSlice.reducer
