import { RootState } from 'services/redux/store';

export const selectCart = (state: RootState) => state.data.cart;
