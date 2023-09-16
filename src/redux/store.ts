import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import basketReducer from './slices/basketSlice';
import cakesReducer from './slices/cakesSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    basket: basketReducer,
    cakes: cakesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
