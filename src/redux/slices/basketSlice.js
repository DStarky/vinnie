import { createSlice } from "@reduxjs/toolkit"

// Создаем начальное значение (по аналогии с useState)
const initialState = {
  totalAmount: 0,
  totalCount: 0,
  products: []
}

// Создаем slice (отдельное хранилище с данными и методами)
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      const product = {
        ...action.payload,
        count: 1,
      }
      const alreadyAdded = state.products.find(el => el.id === product.id);
      if (alreadyAdded) {
        alreadyAdded.count += 1;
      } else {
        state.products = [...state.products, product]
      }
      state.totalCount += 1;
    },

    changeCount(state, action) {
      const product = state.products.find(el => el.id === action.payload.id);

      if (action.payload.sign === 'plus') { 
        product.count += 1 
        state.totalCount += 1;
      } else { 
        product.count -= 1 
        state.totalCount -= 1;
      };

      if (product.count < 1) {
        state.products = state.products.filter(el => el.id !== action.payload.id)
      }
    },

    clearProducts(state) {
      state.products = [];
      state.totalCount = 0;
      state.totalAmount = 0;
    },

  }
})

export const selectBasket = (state) => state.basket;
export const { addToBasket, changeCount, clearProducts } = basketSlice.actions;
export default basketSlice.reducer;