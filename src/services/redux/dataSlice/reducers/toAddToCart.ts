import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { IDrug } from 'interfaces/data/IData';

export const toAddToCart = (
  state: ISliceData,
  action: PayloadAction<IDrug>
) => {
  const newDrug = action.payload;

  const isDrugExist = state.cart.find(drug => drug._id === newDrug._id);

  if (!isDrugExist) {
    state.cart = [...state.cart, { ...newDrug, quantity: 1 }];
    return;
  }

  state.cart = state.cart.map(drug =>
    drug._id === newDrug._id ? { ...drug, quantity: drug.quantity + 1 } : drug
  );
};
