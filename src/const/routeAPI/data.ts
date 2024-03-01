interface RoutesDataAPI {
  STORE: string;
  DRAG: string;
  ORDER: string;
}

export const routeDataAPI: RoutesDataAPI = Object.freeze({
  STORE: '/api/store',
  DRAG: '/api/drug',
  ORDER: '/api/order',
});
