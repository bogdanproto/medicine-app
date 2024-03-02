import { createSelector } from '@reduxjs/toolkit';
import { ICartItem } from 'interfaces/data/IData';
import { RootState } from 'services/redux/store';

export const selectCart = (state: RootState) => state.data.cart;

export const selectTotalCart = createSelector([selectCart], items => {
  return (
    items.length &&
    items.reduce(
      (sum: number, { quantity, price }: ICartItem) =>
        (sum = sum + quantity * price),
      0
    )
  );
});
