interface RoutesDataAPI {
  STORE: string;
  DRAGBYSTORE: string;
  ORDER: string;
}

export const routeDataAPI: RoutesDataAPI = Object.freeze({
  STORE: '/api/store',
  DRAGBYSTORE: '/api/drug/store',
  ORDER: '/api/order',
});
