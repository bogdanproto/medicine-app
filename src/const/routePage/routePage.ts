interface IRoutes {
  BASE: string;
  CART: string;
  HISTORY: string;
  LOGIN: string;
}

export const routePage: IRoutes = Object.freeze({
  BASE: '/',
  CART: '/cart',
  HISTORY: '/history',
  LOGIN: '/login',
});
