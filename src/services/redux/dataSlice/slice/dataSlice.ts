import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';

import {
  toAddToCart,
  toChangeQntCart,
  toDeleteFromCart,
  toSetSortProps,
  toToggelFavorite,
} from '../reducers';
import {
  createOrder,
  getAllDrugByStore,
  getAllOrder,
  getAllStores,
} from '../operations';
import {
  handleFulfilledCreateOrder,
  handleFulfilledGetAllDrugs,
  handleFulfilledGetAllOrder,
  handleFulfilledGetAllStores,
  handlePendingData,
  handleRejectedData,
} from '../handlesStatus';

const initialState: ISliceData = {
  stores: [],
  activeStore: null,

  favoriteDrugs: [],
  cart: [],
  history: [],

  sortProps: [{ favorite: 'ascending' }, { price: '' }, { createdAt: '' }],

  successMsg: null,
  errorData: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggelFavorite: toToggelFavorite,
    addToCart: toAddToCart,
    deleteFromCart: toDeleteFromCart,
    changeQntCart: toChangeQntCart,
    setSortProps: toSetSortProps,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllStores.fulfilled, handleFulfilledGetAllStores)
      .addCase(getAllDrugByStore.fulfilled, handleFulfilledGetAllDrugs)
      .addCase(getAllOrder.fulfilled, handleFulfilledGetAllOrder)
      .addCase(createOrder.fulfilled, handleFulfilledCreateOrder)
      .addMatcher(
        isAnyOf(
          getAllStores.pending,
          getAllDrugByStore.pending,
          getAllOrder.pending,
          createOrder.pending
        ),
        handlePendingData
      )
      .addMatcher(
        isAnyOf(
          getAllStores.rejected,
          getAllDrugByStore.rejected,
          getAllOrder.rejected,
          createOrder.rejected
        ),
        handleRejectedData
      );
  },
});

export const dataSliceReducer = dataSlice.reducer;
export const {
  toggelFavorite,
  addToCart,
  deleteFromCart,
  changeQntCart,
  setSortProps,
} = dataSlice.actions;
