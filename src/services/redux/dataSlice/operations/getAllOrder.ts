import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllOrderAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllOrder = createAsyncThunk(
  'data/getAllOrder',
  asyncThunkDecoratorData(async () => {
    const {
      data: { orders },
    } = await getAllOrderAPI();

    return orders;
  })
);
