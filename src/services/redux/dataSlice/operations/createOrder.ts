import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder } from 'interfaces/data/IData';
import { createOrderAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const createOrder = createAsyncThunk(
  'data/createOrder',
  asyncThunkDecoratorData(async (obj: IOrder) => {
    const {
      data: { order },
    } = await createOrderAPI(obj);

    return order;
  })
);
