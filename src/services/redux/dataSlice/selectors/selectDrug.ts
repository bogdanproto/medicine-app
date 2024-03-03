import { createSelector } from '@reduxjs/toolkit';
import { IDrug, IStore } from 'interfaces/data/IData';
import { selectActiveStore, selectStores } from './selectStores';
import { RootState } from 'services/redux/store';

export const selectFavoriteDrug = (state: RootState) =>
  state.data.favoriteDrugs;

export const selectActiveDrugs = createSelector(
  [selectStores, selectActiveStore],
  (stores, activeStoreId) => {
    const activeStore = stores.find(({ _id }: IStore) => activeStoreId === _id);

    return activeStore?.drugs || [];
  }
);

export const selectActiveDrugsFav = createSelector(
  [selectActiveDrugs, selectFavoriteDrug],
  (drugs, favDrugs) =>
    drugs.map((drug: IDrug) =>
      favDrugs.includes(drug._id)
        ? { ...drug, favorite: 0 }
        : { ...drug, favorite: 1 }
    )
);
