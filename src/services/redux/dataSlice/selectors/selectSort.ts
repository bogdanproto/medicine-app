import { ISortObj, ISortProp } from 'interfaces/data/IData';
import { createSelector } from 'reselect';
import { RootState } from 'services/redux/store';

export const selectSortProp = (state: RootState) => state.data.sortProps;

export const selectSortObj = createSelector([selectSortProp], arr => {
  return arr.reduce((obj: ISortObj, prop: ISortProp) => {
    return (obj = { ...obj, ...prop });
  }, {});
});
