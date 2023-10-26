import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
}

export const reducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsSlice.reducer),
  filters: filterSlice.reducer,
});