import { createSlice } from "@reduxjs/toolkit"

// Создаем начальное значение (по аналогии с useState)
const initialState = {
  categoryIndex: 0,
  activePage: 1,
  searchValue: '',
  searchBeforeDebounce: '',
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
      state.searchBeforeDebounce = '';
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload.text;
      state.activePage = 1;
    },

    setSearchBeforeDebounce(state, action) {
      state.searchBeforeDebounce = action.payload.text;
    },

    setActivePage(state, action) {
      state.activePage = action.payload.page;
    },

    setFilters(state, action) {
      state.categoryIndex = Number(action.payload.category);
      state.activePage = Number(action.payload.page);
    }
  }
})
export const selectFilter = (state) => state.filter;
export const { setCategoryIndex, setSearchValue, setActivePage, setFilters, setSearchBeforeDebounce } = filterSlice.actions;
export default filterSlice.reducer;