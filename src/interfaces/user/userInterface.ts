export interface IUser {
  _id: string | null;
  name: string | null;
  email: string | null;
}

export interface ISliceAuthUser {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  errorAuth: string | null;
  successMsg: string | null;
  isLoading: boolean;
  isAppLoaded: boolean;
}

export interface IUserLogInSuccess {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
