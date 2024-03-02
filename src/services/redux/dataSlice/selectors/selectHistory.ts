import { RootState } from 'services/redux/store';

export const selectHistory = (state: RootState) => state.data.history;
