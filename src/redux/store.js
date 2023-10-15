import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';

import advertReducer from './advertSlice';

const advertPersistConfig = {
  key: 'advertRoot',
  storage,
  whitelist: ['items'],
};

const persistedAdvertReducer = persistReducer(
  advertPersistConfig,
  advertReducer
);

export const store = configureStore({
  reducer: {
    advert: persistedAdvertReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});


export const persistor = persistStore(store);
