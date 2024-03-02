import { routeAuthAPI } from 'const';
import { IUserLogInSuccess } from 'interfaces';
import { medicineAPI } from '../axiosConf/axiosConf';

export const signUpAPI = async (objSignUp: IUserLogInSuccess): Promise<any> => {
  const { data } = await medicineAPI.post(routeAuthAPI.SIGNUP, objSignUp);

  return data;
};

export const logInAPI = async (objSignUp: IUserLogInSuccess): Promise<any> => {
  const { data } = await medicineAPI.post(routeAuthAPI.LOGIN, objSignUp);

  return data;
};

export const logOutAPI = async (): Promise<any> => {
  await medicineAPI.post(routeAuthAPI.LOGOUT);
};

export const refreshUserAPI = async (): Promise<any> => {
  const { data } = await medicineAPI.get(routeAuthAPI.CURRENT);
  return data;
};

export const setAuthToken = (token: string): void => {
  medicineAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = (): void => {
  medicineAPI.defaults.headers.common.Authorization = null;
};
