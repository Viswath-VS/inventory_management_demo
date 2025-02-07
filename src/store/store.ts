// src/store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './reducers/product';
import userReducer from './reducers/user';

export const store = configureStore({
  reducer: combineReducers({
    products: productsReducer,
    user: userReducer,
  }),
});

// Infer types for state and dispatch from the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
