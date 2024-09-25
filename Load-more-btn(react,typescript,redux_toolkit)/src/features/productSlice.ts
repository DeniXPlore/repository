import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
};

type ProductsState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.products = [...state.products, ...action.payload];
      state.loading = false;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } =
  productsSlice.actions;

export default productsSlice.reducer;