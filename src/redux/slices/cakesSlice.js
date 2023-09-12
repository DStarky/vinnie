import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllCakes = createAsyncThunk(
  'cakes/fetchAllCakes',
  async (params) => {
    const { categoryRequest, searchRequest } = params;
    const response = await axios.get(`https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${categoryRequest}`);
    return response.data;
  }
)

// Создаем начальное значение (по аналогии с useState)
const initialState = {
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
      .addCase(fetchAllCakes.pending, (state) => {
        state.status = 'loading';
        state.cakes = 4;
      })
      .addCase(fetchAllCakes.fulfilled, (state, action) => {
        state.status = 'success';
        state.cakesCount = action.payload.length;
      })
      .addCase(fetchAllCakes.rejected, (state, action) => {
        state.status = 'error';
        state.cakes = 4;
      });
  }
})

export const { } = cakesSlice.actions;
export default cakesSlice.reducer;