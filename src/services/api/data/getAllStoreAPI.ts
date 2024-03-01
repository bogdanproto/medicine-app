import { routeDataAPI } from 'const';
import { medicineAPI } from '../axiosConf/axiosConf';

export const getAllStoreAPI = async () => {
  const { data } = await medicineAPI.get(routeDataAPI.STORE);

  return data;
};
