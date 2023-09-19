import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface filterSliceState {
  categoryIndex: number;
  activePage: number;
  searchValue: string;
  searchBeforeDebounce: string;
}
// Создаем начальное значение (по аналогии с useState)
const initialState: filterSliceState = {
  categoryIndex: 0,
  activePage: 1,
  searchValue: '',
  searchBeforeDebounce: '',
};

// Создаем slice (отдельное хранилище с данными и методами)
const filterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryIndex(state, action: PayloadAction<{ index: number }>) {
      state.categoryIndex = action.payload.index;
      state.activePage = 1;
      state.searchValue = '';
      state.searchBeforeDebounce = '';
    },

    setSearchValue(state, action: PayloadAction<{ text: string }>) {
      state.searchValue = action.payload.text;
      state.activePage = 1;
    },

    setSearchBeforeDebounce(state, action: PayloadAction<{ text: string }>) {
      state.searchBeforeDebounce = action.payload.text;
    },

    setActivePage(state, action: PayloadAction<{ page: number }>) {
      state.activePage = action.payload.page;
    },

    setFilters(state, action: PayloadAction<{ page: string, category: string }>) {
      state.categoryIndex = Number(action.payload.category);
      state.activePage = Number(action.payload.page);
    },

    resetFilters(state) {
      state.categoryIndex = 0;
      state.activePage = 1;
      state.searchValue = '';
      state.searchBeforeDebounce = '';
    },
  },
});
export const selectFilter = (state: RootState) => state.persistedReducer.filter;

export const {
  setCategoryIndex,
  setSearchValue,
  setActivePage,
  setFilters,
  setSearchBeforeDebounce,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
