import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
})