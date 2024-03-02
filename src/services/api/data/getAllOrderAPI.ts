import { routeDataAPI } from 'const';
import { medicineAPI } from '../axiosConf/axiosConf';

export const getAllOrderAPI = async () => {
  const { data } = await medicineAPI.get(routeDataAPI.ORDER);

  return data;
};
