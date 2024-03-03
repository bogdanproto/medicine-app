import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IStore } from 'interfaces/data/IData';

export const selectStores = (state: RootState) => state.data.stores;

export const selectActiveStore = (state: RootState) => state.data.activeStore;

export const selectListStores = createSelector([selectStores], stores =>
  stores.map(({ _id, title }: IStore) => ({ _id, title }))
);
