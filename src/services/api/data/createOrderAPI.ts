import { routeDataAPI } from 'const';
import { medicineAPI } from '../axiosConf/axiosConf';
import { IOrder } from 'interfaces/data/IData';

export const createOrderAPI = async (obj: IOrder): Promise<any> => {
  const { data } = await medicineAPI.post(routeDataAPI.ORDER, obj);
  return data;
};
