import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';

export const toSetSuccesMsgDefault = (
  state: ISliceData,
  action: PayloadAction<null>
) => {
  state.successMsg = action.payload;
};
