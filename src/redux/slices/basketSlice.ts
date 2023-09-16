import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type Product = {
  name: string;
  image: string;
  price: number;
  id: number;
  link: string;
  count: number;
};

interface basketSliceState {
  totalAmount: number;
  totalCount: number;
  products: Product[];
}

// Создаем начальное значение (по аналогии с useState)
const initialState: basketSliceState = {
  totalAmount: 0,
  totalCount: 0,
  products: [],
};

// Создаем slice (отдельное хранилище с данными и методами)
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<Product>) {
      const product = {
        ...action.payload,
        count: 1,
      };
      const alreadyAdded = state.products.find((el) => el.id === product.id);
      if (alreadyAdded) {
        alreadyAdded.count += 1;
      } else {
        state.products = [...state.products, product];
      }
      state.totalCount += 1;
      state.totalAmount += product.price;
    },

    changeCount(state, action: PayloadAction<{ sign: string; id: number }>) {
      const product = state.products.find((el) => el.id === action.payload.id);

      if (product) {
        if (action.payload.sign === 'plus') {
          product.count += 1;
          state.totalCount += 1;
          state.totalAmount += product.price;
        } else {
          product.count -= 1;
          state.totalCount -= 1;
          state.totalAmount -= product.price;
        }

        if (product.count < 1) {
          state.products = state.products.filter(
            (el) => el.id !== action.payload.id,
          );
        }
      }
    },

    clearProducts(state) {
      state.products = [];
      state.totalCount = 0;
      state.totalAmount = 0;
    },
  },
});

export const selectBasket = (state: RootState) => state.basket;
export const { addToBasket, changeCount, clearProducts } = basketSlice.actions;
export default basketSlice.reducer;
