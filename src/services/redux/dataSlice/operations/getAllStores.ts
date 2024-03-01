import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllStoreAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllStores = createAsyncThunk(
  'data/getAllStores',
  asyncThunkDecoratorData(async () => {
    return await getAllStoreAPI();
  })
);
