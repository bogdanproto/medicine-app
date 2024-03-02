import { createSelector } from '@reduxjs/toolkit';
import { IStore } from 'interfaces/data/IData';
import { selectActiveStore, selectStores } from './selectStores';
import { RootState } from 'services/redux/store';

export const selectActiveDrugs = createSelector(
  [selectStores, selectActiveStore],
  (stores, activeStoreId) => {
    const activeStore = stores.find(({ _id }: IStore) => activeStoreId === _id);

    return activeStore?.drugs || [];
  }
);

export const selectFavoriteDrug = (state: RootState) =>
  state.data.favoriteDrugs;
