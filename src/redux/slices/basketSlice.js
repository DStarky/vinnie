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
      const product = {
        ...action.payload,
        count: 1,
      }
      const alreadyAdded = state.products.find(el => el.name === product.name);
      if (alreadyAdded) {
        alreadyAdded.count += 1;
      } else {
        state.products = [...state.products, product]
      }
    },

    changeCount(state, action) {
      const product = state.products.find(el => el.name === action.payload.name);

      action.payload.sign === 'plus' ? product.count += 1 : product.count -= 1;
    }
  }
})

export const { addToBasket, changeCount } = basketSlice.actions;
export default basketSlice.reducer;