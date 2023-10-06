import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers, filterReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
  },
});
