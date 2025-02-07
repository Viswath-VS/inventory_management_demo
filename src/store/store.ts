// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/product';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Infer types for state and dispatch from the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
