import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder } from 'interfaces/data/IData';
import { createOrderAPI, getAllOrderAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const createOrder = createAsyncThunk(
  'data/createOrder',
  asyncThunkDecoratorData(async (obj: IOrder) => {
    await createOrderAPI(obj);

    const {
      data: { orders },
    } = await getAllOrderAPI();

    return orders;
  })
);
