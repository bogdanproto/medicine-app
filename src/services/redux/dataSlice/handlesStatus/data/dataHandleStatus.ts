import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { IStore } from 'interfaces/data/IData';

export const handleFulfilledGetAllStores = (
  state: ISliceData,
  action: PayloadAction<IStore[]>
) => {
  state.stores = action.payload;

  state.isLoading = false;
  state.errorData = null;
};
