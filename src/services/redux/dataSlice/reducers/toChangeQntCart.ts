import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { ICartItemQnt } from 'interfaces/data/IData';

export const toChangeQntCart = (
  state: ISliceData,
  action: PayloadAction<ICartItemQnt>
) => {
  const { quantity, _id } = action.payload;

  state.cart = state.cart.map(item =>
    item._id === _id ? { ...item, quantity } : item
  );
};
