import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Product = {
  id: number;
  name: string;
  category: string;
  value: number;
  quantity: number;
  price: number;
  disabled?: boolean;
};

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    editProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    toggleDisable: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.disabled = !product.disabled;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

export const { editProduct, toggleDisable, deleteProduct, setProducts } = productsSlice.actions;

export default productsSlice.reducer;

/* ===== Selectors ===== */

// Base selector for products.
export const selectProducts = (state: RootState) => state.products.products;

// Total number of products.
export const selectTotalProducts = createSelector(
  selectProducts,
  (products) => products.filter((product) => !product.disabled).length
);

// Total value of all products.
export const selectTotalValue = createSelector(selectProducts, (products) =>
  products.filter((product) => !product.disabled).reduce((sum, product) => sum + product.value, 0)
);

// Out-of-stock count
export const selectOutOfStock = createSelector(
  selectProducts,
  (products) =>
    products.filter((product) => !product.disabled).filter((product) => product.quantity <= 0)
      .length
);

// Total categories
export const selectTotalCategories = createSelector(
  selectProducts,
  (products) =>
    new Set(products.filter((product) => !product.disabled).map((product) => product.category)).size
);
