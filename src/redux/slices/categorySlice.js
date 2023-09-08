import { createSlice } from "@reduxjs/toolkit"

// Создаем начальное значение (по аналогии с useState)
const initialState = {
  categoryIndex: 0,
}

// Создаем slice (отдельное хранилище с данными и методами)
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload.index;
    }
  }
})

export const { setCategoryIndex } = categorySlice.actions;
export default categorySlice.reducer;