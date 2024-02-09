import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IToken } from '../../../types/token';
import {
  getShikimoryAuthCodeFromStorage,
  getShikimoryToken,
  getShikimoryTokenFromStorage,
  refreshShikimoryToken,
  saveShikimoryAuthCodeToStorage,
  saveShikimoryTokenToStorage,
} from './AuthActionCreator';

interface AuthState {
  shikimoryToken: IToken | null;
  shikimoryAuthCode: string;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  shikimoryToken: null,
  shikimoryAuthCode: '',
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [getShikimoryToken.fulfilled.type]: (
      state,
      action: PayloadAction<IToken>,
    ) => {
      state.shikimoryToken = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [getShikimoryToken.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getShikimoryToken.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [refreshShikimoryToken.fulfilled.type]: (
      state,
      action: PayloadAction<IToken>,
    ) => {
      state.shikimoryToken = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [refreshShikimoryToken.pending.type]: (state) => {
      state.isLoading = true;
    },
    [refreshShikimoryToken.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getShikimoryTokenFromStorage.fulfilled.type]: (
      state,
      action: PayloadAction<IToken>,
    ) => {
      state.shikimoryToken = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [getShikimoryTokenFromStorage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getShikimoryTokenFromStorage.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [saveShikimoryTokenToStorage.fulfilled.type]: (
      state,
      action: PayloadAction<IToken>,
    ) => {
      state.shikimoryToken = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [saveShikimoryTokenToStorage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [saveShikimoryTokenToStorage.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getShikimoryAuthCodeFromStorage.fulfilled.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.shikimoryAuthCode = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [getShikimoryAuthCodeFromStorage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getShikimoryAuthCodeFromStorage.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [saveShikimoryAuthCodeToStorage.fulfilled.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.shikimoryAuthCode = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [saveShikimoryAuthCodeToStorage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [saveShikimoryAuthCodeToStorage.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
