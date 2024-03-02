import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectIsAppLoaded = (state: RootState) =>
  state.authUser.isAppLoaded;

export const selectErrorData = (state: RootState) => state.data.errorData;

export const selectErrorAuth = (state: RootState) => state.authUser.errorAuth;

export const selectIsDataLoading = (state: RootState) => state.data.isLoading;

export const selectNotify = createSelector(
  [selectErrorData, selectErrorAuth],
  (errorData, errorAuth) => ({
    error: errorData || errorAuth,
  })
);
