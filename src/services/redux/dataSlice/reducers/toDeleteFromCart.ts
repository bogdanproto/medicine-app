import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';

export const toDeleteFromCart = (
  state: ISliceData,
  action: PayloadAction<string>
) => {
  const id = action.payload;

  state.cart = state.cart.filter(item => item._id !== id);
};
