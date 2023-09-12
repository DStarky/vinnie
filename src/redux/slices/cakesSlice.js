import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const fetchAllCakes = createAsyncThunk(
  'cakes/fetchByIdStatus',
  async (params) => {
    const { categoryRequest,  searchRequest } = params;
    const response = axios.get(`https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${categoryRequest}`);
    return response.date;
  }
)

// Создаем начальное значение (по аналогии с useState)
const initialState = {
  cakes: [],
  status: 'loading' // loading | error | success
}

// Создаем slice (отдельное хранилище с данными и методами)
const cakesSlice = createSlice({
  name: 'cakes',
  initialState,
  reducers: {

  },

})

export const { } = cakesSlice.actions;
export default cakesSlice.reducer;