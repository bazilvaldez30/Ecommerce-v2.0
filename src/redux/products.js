import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_PRODUCTS } = productsSlice.actions

export default productsSlice.reducer