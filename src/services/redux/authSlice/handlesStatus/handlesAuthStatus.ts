import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceAuthUser, IUserLogInSuccess } from 'interfaces';

//--------------LogIn User-----------------

export const handleFulfilledLogIn = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserLogInSuccess>
) => {
  const { user, token } = action.payload;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.errorAuth = null;
  state.token = token;
  state.user = { ...state.user, ...user };
};

//--------------LogOut User-----------------

export const handleFulfilledLogOut = (state: ISliceAuthUser) => {
  const { user } = state;

  user._id = null;
  user.name = null;
  user.email = null;

  state.token = null;
  state.isLoggedIn = false;
  state.errorAuth = null;
  state.isLoading = false;
};

// --------------Refresh User-----------------

export const handleFulfilledRefresh = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserLogInSuccess>
) => {
  const { user, token } = action.payload;
  state.isLoading = false;
  state.errorAuth = null;
  state.isLoggedIn = true;
  state.isAppLoaded = true;
  state.token = token;
  state.user = { ...state.user, ...user };
};

//---------------Pending and Rejected-------------------
export const handlePendingAuth = (state: ISliceAuthUser) => {
  state.isLoading = true;
  state.errorAuth = null;
};

export const handleRejectedAuth = (
  state: ISliceAuthUser,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.isAppLoaded = true;
  state.errorAuth = action.payload;
};
