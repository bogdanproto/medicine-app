import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { ISortObj } from 'interfaces/data/IData';

export const toSetSortProps = (
  state: ISliceData,
  action: PayloadAction<ISortObj>
) => {
  const { price, createdAt } = action.payload;

  state.sortProps = [{ ...state.sortProps[0] }, { price }, { createdAt }];
};
