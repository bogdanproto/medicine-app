import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';

export const toToggelFavorite = (
  state: ISliceData,
  action: PayloadAction<string>
) => {
  const drugId = action.payload;

  if (state.favoriteDrugs.includes(drugId)) {
    state.favoriteDrugs = state.favoriteDrugs.filter(drug => drug !== drugId);

    return;
  }

  state.favoriteDrugs = [...state.favoriteDrugs, action.payload];
};
