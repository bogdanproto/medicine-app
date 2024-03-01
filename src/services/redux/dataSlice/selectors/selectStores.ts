import { RootState } from '../../store';

export const selectAStores = (state: RootState) => state.data.stores;
