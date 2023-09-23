import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/AuthSlice';

const rootReducer = combineReducers({
  authReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
