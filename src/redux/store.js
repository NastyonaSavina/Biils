import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { filtersReducer } from './filter/filter.reducer';
import { billssReducer } from './bills/bills.slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];



export const store = configureStore({
  reducer: {
    bills: billssReducer,
    filter: filtersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

