import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IToken } from '../../../types/token.ts';
import { getErrorMessage } from '../../../utils/functions.ts';

const $token = axios.create({
  baseURL: import.meta.env.VITE_SHIKIMORI_OAUTH,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getShikimoryToken = createAsyncThunk(
  'auth/getShikimoryToken',
  async (authorizationCode: string, thunkAPI) => {
    try {
      const response = await $token.get<IToken>('/token', {
        data: {
          grant_type: 'authorization_code',
          client_id: import.meta.env.VITE_SHIKIMORI_CLIENT_ID,
          client_secret: import.meta.env.VITE_SHIKIMORI_CLIENT_SECRET,
          code: authorizationCode,
          redirect_uri: import.meta.env.VITE_SHIKIMORI_API,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  },
);

export const refreshShikimoryToken = createAsyncThunk(
  'auth/refreshShikimoryToken',
  async (refreshToken: string, thunkAPI) => {
    try {
      const response = await $token.get<IToken>('/token', {
        data: {
          grant_type: 'refresh_token',
          client_id: import.meta.env.VITE_SHIKIMORI_CLIENT_ID,
          client_secret: import.meta.env.VITE_SHIKIMORI_CLIENT_SECRET,
          refresh_token: refreshToken,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  },
);

export const getShikimoryTokenFromStorage = createAsyncThunk(
  'auth/getShikimoryTokenFromStorage',
  async (_, thunkAPI) => {
    try {
      const data = localStorage.getItem('shikimoryToken');
      return (data && JSON.parse(data)) || null;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  },
);

export const saveShikimoryTokenToStorage = createAsyncThunk(
  'auth/saveShikimoryTokenToStorage',
  async (token: IToken, thunkAPI) => {
    try {
      localStorage.setItem('shikimoryToken', JSON.stringify(token));
      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  },
);

export const getShikimoryAuthCodeFromStorage = createAsyncThunk(
  'auth/getShikimoryAuthCodeFromStorage',
  (_, thunkAPI) => {
    try {
      const data = localStorage.getItem('shikimoryAuthCode');
      return (data && JSON.parse(data)) || null;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  },
);

export const saveShikimoryAuthCodeToStorage = createAsyncThunk(
  'auth/saveShikimoryAuthCodeToStorage',
  (authCode: string, thunkAPI) => {
    try {
      localStorage.setItem('shikimoryAuthCode', JSON.stringify(authCode));
      return authCode;
    } catch (e) {
      return thunkAPI.rejectWithValue(getErrorMessage(e));
    }
  },
);
