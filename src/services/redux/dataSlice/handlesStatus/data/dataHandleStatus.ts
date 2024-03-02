import { PayloadAction } from '@reduxjs/toolkit';
import { successDataMsg } from 'const';
import { ISliceData } from 'interfaces';
import { IDrugByStore, IOrder, IStore } from 'interfaces/data/IData';

export const handleFulfilledGetAllStores = (
  state: ISliceData,
  action: PayloadAction<IStore[]>
) => {
  state.stores = action.payload.map(store => ({ ...store, drugs: [] }));

  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledGetAllDrugs = (
  state: ISliceData,
  action: PayloadAction<IDrugByStore>
) => {
  const { drugs, id } = action.payload;

  state.stores = state.stores.map(store =>
    store._id === id ? { ...store, drugs } : store
  );

  state.activeStore = id;

  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledGetAllOrder = (
  state: ISliceData,
  action: PayloadAction<IOrder[]>
) => {
  state.history = action.payload;

  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledCreateOrder = (
  state: ISliceData,
  action: PayloadAction<IOrder>
) => {
  state.history = [...state.history, action.payload];
  state.cart = [];

  state.successMsg = successDataMsg.ORDER_CREATED;
  state.isLoading = false;
  state.errorData = null;
};
