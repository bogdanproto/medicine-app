interface RoutesAuthAPI {
  HOME: string;
  SIGNUP: string;
  LOGIN: string;
  LOGOUT: string;
  CURRENT: string;
}

export const routeAuthAPI: RoutesAuthAPI = {
  HOME: '/',
  SIGNUP: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  CURRENT: '/auth/current',
};
