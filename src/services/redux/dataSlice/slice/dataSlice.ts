import { createSlice } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';

import { toToggelFavorite } from '../reducers';

const initialState: ISliceData = {
  stores: [],
  favoriteDrugs: [],
  cart: [],
  history: [],

  errorData: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggelFavorite: toToggelFavorite,
  },
  extraReducers: builder => {},
});

export const dataSliceReducer = dataSlice.reducer;
export const { toggelFavorite } = dataSlice.actions;
