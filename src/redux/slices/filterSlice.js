import { createSlice } from "@reduxjs/toolkit"

// Создаем начальное значение (по аналогии с useState)
const initialState = {
  categoryIndex: 0,
  activePage: 1,
  searchValue: ''
}

// Создаем slice (отдельное хранилище с данными и методами)
const filterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {
      state.categoryIndex = action.payload.index;
      state.activePage = 1;
      state.searchValue = '';
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload.text;
      state.activePage = 1;
    },

    setActivePage(state, action) {
      state.activePage = action.payload.page;
    },

  }
})

export const { setCategoryIndex, setSearchValue, setActivePage } = filterSlice.actions;
export default filterSlice.reducer;