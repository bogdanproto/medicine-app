import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllDrugByStoreAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllDrugByStore = createAsyncThunk(
  'data/getAllDrugByStore',
  asyncThunkDecoratorData(async (id: string) => {
    const {
      data: { drugs },
    } = await getAllDrugByStoreAPI(id);

    return { drugs, id };
  })
);
