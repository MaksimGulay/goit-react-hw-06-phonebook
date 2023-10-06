// ================ Redux ===================
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// ================ ReduxToolkit=============
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers, filterReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
  },
});
