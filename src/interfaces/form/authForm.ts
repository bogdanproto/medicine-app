export interface IUserForm {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin extends Pick<IUserForm, 'email' | 'password'> {}

export interface IUserSignUp
  extends Pick<IUserForm, 'name' | 'email' | 'password'> {}

export enum FormType {
  Login = 'login',
  SignUp = 'signup',
}
