import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: null
  },
  reducers: {
    SET_CART: (state, action) => {
      state.cart = action.payload
    },
    RESET_CART: (state) => {
      state.cart = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_CART, RESET_CART } = cartSlice.actions

export default cartSlice.reducer