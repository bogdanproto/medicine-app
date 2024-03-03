import { createSelector } from 'reselect';
import { selectActiveDrugsFav } from './selectDrug';
import { selectSortProp } from './selectSort';

import { toSortArray } from 'services/helpers';

export const selectSortedDrugs = createSelector(
  [selectSortProp, selectActiveDrugsFav],
  toSortArray
);
