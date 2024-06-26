import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'services/api';
import { fetchQuests } from './action';
import { rootReducer } from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument:  api
    },
  })
}); 

store.dispatch(fetchQuests(api));