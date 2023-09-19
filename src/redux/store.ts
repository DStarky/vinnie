import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import filterReducer from './slices/filterSlice';
import basketReducer from './slices/basketSlice';
import cakesReducer from './slices/cakesSlice';

const rootReducer = combineReducers({
	filter: filterReducer,
	basket: basketReducer,
	cakes: cakesReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: {
		persistedReducer,
	},
});


export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
