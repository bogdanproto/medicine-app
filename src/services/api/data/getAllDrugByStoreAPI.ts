import { routeDataAPI } from 'const';
import { medicineAPI } from '../axiosConf/axiosConf';

export const getAllDrugByStoreAPI = async (id: string) => {
  const { data } = await medicineAPI.get(`${routeDataAPI.DRAGBYSTORE}/${id}`);

  return data;
};
