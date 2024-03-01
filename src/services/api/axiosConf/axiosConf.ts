import axios from 'axios';
import { routeAPI } from 'const/routeAPI/baseRoute';

export const medicineAPI = axios.create({
  baseURL: routeAPI.BACKEND,
});
