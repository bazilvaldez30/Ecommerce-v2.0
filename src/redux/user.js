import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload
    },
    LOGOUT_USER: (state) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_USER, LOGOUT_USER } = userSlice.actions

export default userSlice.reducer