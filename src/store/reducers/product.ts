import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { baseUrl } from '@/config/base';
export type ApiResponse = {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
};
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
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
};

/**
 * Using Async thunk to fetch products from the API.
 */
export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await fetch(baseUrl + '/inventory');
  const data: ApiResponse[] = await response.json();

  return data.map((item, key) => ({
    id: key,
    name: item.name,
    category: item.category,
    value: parseFloat(item.value.replace('$', '')),
    quantity: item.quantity,
    price: parseFloat(item.price.replace('$', '')),
    disabled: false,
  }));
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.status = 'idle';
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

// Export actions for use in your components.
export const { editProduct, toggleDisable, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;

/* ===== Selectors ===== */

// Base selector for products.
export const selectProducts = (state: RootState) => state.products.products;

// Total number of products.
export const selectTotalProducts = createSelector(selectProducts, (products) => products.length);

// Total value of all products.
export const selectTotalValue = createSelector(selectProducts, (products) =>
  products.reduce((sum, product) => sum + product.value, 0)
);

// Out-of-stock count
export const selectOutOfStock = createSelector(
  selectProducts,
  (products) => products.filter((product) => product.quantity <= 0).length
);

// Total value per category.
export const selectTotalCategoryValue = createSelector(selectProducts, (products) => {
  return products.reduce<Record<string, number>>((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    acc[product.category] += product.value;
    return acc;
  }, {});
});
