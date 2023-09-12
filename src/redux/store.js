import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import basketReducer from './slices/basketSlice';
import cakesReducer from './slices/cakesSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    basket: basketReducer,
    cakes: cakesReducer,
  },
})