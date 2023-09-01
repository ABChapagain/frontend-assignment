'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItems = {
  id: number
  title: string
  description: string
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
  price: number
  quantity: number
  totalPrice: number
}

export type CartState = {
  cartItems: CartItems[]
  totalQuantity: number
  totalAmount: number
}

const items = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') as string)
  : []

const totalQuantity = localStorage.getItem('totalQuantity')
  ? JSON.parse(localStorage.getItem('totalQuantity') as string)
  : 0

const totalAmount = localStorage.getItem('totalAmount')
  ? JSON.parse(localStorage.getItem('totalAmount') as string)
  : 0

const initialState: CartState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
}

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItems>) => {
      const newItem = action.payload
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      )

      state.totalQuantity++

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          image: newItem.image,
          category: newItem.category,
          rating: newItem.rating,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price)
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const existingItem = state.cartItems.find((item) => item.id === id)

      state.totalQuantity--

      if (existingItem) {
        if (existingItem.quantity > 1) {
          // Check if quantity is greater than 1
          existingItem.quantity--
          existingItem.totalPrice -= Number(existingItem.price)
        } else {
          // If quantity is 1 or less, simply skip removing the item
        }
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    },

    deleteFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const existingItem = state.cartItems.find((item) => item.id === id)

      state.totalQuantity--

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id)
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
    },
  },
})

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer
