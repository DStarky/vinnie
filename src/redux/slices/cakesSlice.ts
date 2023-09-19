import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type fetchCakesArgs = Record<string, string>;

export const fetchCakesCount = createAsyncThunk<Cake[], Record<string, string>>(
  'cakes/fetchAllCakes',
  async (params) => {
    const { categoryRequest, searchRequest } = params;
    const { data } = await axios.get<Cake[]>(
      `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${categoryRequest}`,
    );
    return data;
  },
);

export const fetchCakesPage = createAsyncThunk<Cake[], Record<string, string>>(
  'cakes/fetchCakesPage',
  async (params) => {
    const { categoryRequest, searchRequest, paginationRequest } = params;
    const { data } = await axios.get<Cake[]>(
      `https://64e5c4a909e64530d17efcf9.mockapi.io/productions?${searchRequest}&${paginationRequest}&${categoryRequest}`,
    );
    return data;
  },
);

type Cake = {
  name: string;
  price: number;
  category: string;
  image: string;
  properties: string[];
  weight: string;
  description: string;
  slug: string;
  id: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface cakesSliceState {
  cakes: Cake[];
  cakesCount: number;
  status: Status;
}

// Создаем начальное значение (по аналогии с useState)
const initialState: cakesSliceState = {
  cakes: [],
  cakesCount: 4,
  status: Status.LOADING, // loading | error | success
};

// Создаем slice (отдельное хранилище с данными и методами)
const cakesSlice = createSlice({
  name: 'cakes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCakesCount.pending, (state) => {
        state.status = Status.LOADING;
        state.cakesCount = 4;
      })
      .addCase(
        fetchCakesCount.fulfilled,
        (state, action: PayloadAction<Cake[]>) => {
          state.status = Status.SUCCESS;
          state.cakesCount = action.payload.length;
        },
      )
      .addCase(fetchCakesCount.rejected, (state) => {
        state.status = Status.ERROR;
        state.cakesCount = 4;
      })
      .addCase(fetchCakesPage.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        fetchCakesPage.fulfilled,
        (state, action: PayloadAction<Cake[]>) => {
          state.status = Status.SUCCESS;
          state.cakes = action.payload;
        },
      )
      .addCase(fetchCakesPage.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const selectCakes = (state: RootState) => state.persistedReducer.cakes;
export const {} = cakesSlice.actions;
export default cakesSlice.reducer;
