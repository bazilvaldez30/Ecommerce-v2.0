import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products';
import userReducer from './user';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
  },
})