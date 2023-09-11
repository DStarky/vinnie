import { createSlice } from "@reduxjs/toolkit"

// Создаем начальное значение (по аналогии с useState)
const initialState = {
  totalAmount: 0,
  products: []
}

// Создаем slice (отдельное хранилище с данными и методами)
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      const product = action.payload.product;

      if (state.products.includes(product)) {
        const indexOfProduct = state.products.findIndex( el => el === product);
        state.products[indexOfProduct].count += 1;
      } else {
        const addedProduct = {product: {...product}, count: 1};
        state.products = [...state.products, addedProduct];
      }

    },
  }
})

export const { } = basketSlice.actions;
export default basketSlice.reducer;