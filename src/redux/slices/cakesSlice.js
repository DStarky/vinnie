import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchCakesCount = createAsyncThunk(
  'cakes/fetchAllCakes',
  async (params) => {
    const { categoryRequest, searchRequest } = params;
    const response = await axios.get(`https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${categoryRequest}`);
    return response.data;
  }
)

export const fetchCakesPage = createAsyncThunk(
  'cakes/fetchCakesPage',
  async (params) => {
    const { categoryRequest, searchRequest, paginationRequest } = params;
    const response = await axios.get(`https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${paginationRequest}&${categoryRequest}`);
    return response.data;
  }
)


// Создаем начальное значение (по аналогии с useState)
const initialState = {
  cakes: [],
  cakesCount: 4,
  status: 'loading' // loading | error | success
}

// Создаем slice (отдельное хранилище с данными и методами)
const cakesSlice = createSlice({
  name: 'cakes',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCakesCount.pending, (state) => {
        state.status = 'loading';
        state.cakesCount = 4;
      })
      .addCase(fetchCakesCount.fulfilled, (state, action) => {
        state.status = 'success';
        state.cakesCount = action.payload.length;
      })
      .addCase(fetchCakesCount.rejected, (state, action) => {
        state.status = 'error';
        state.cakesCount = 4;
      })
      .addCase(fetchCakesPage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCakesPage.fulfilled, (state, action) => {
        state.status = 'success';
        state.cakes = action.payload;
      })
      .addCase(fetchCakesPage.rejected, (state, action) => {
        state.status = 'error';
      })
  }
})

export const { } = cakesSlice.actions;
export default cakesSlice.reducer;