import {
  IDrug,
  ISortCreatedAt,
  ISortFavorite,
  ISortPrice,
} from 'interfaces/data/IData';
import { transformSortProps } from './transformSortProps';

export const toSortArray = (
  sortProps: [ISortFavorite, ISortPrice, ISortCreatedAt],
  array: IDrug[]
) => {
  const props = transformSortProps(sortProps);

  if (!props.length || !array.length) {
    return array;
  }
  return [...array].sort((a, b) => {
    for (const prop of props) {
      if (prop !== null) {
        const key = prop[0] as keyof IDrug;
        const value = prop[1] as number;

        if (a[key] !== b[key]) {
          return a[key] < b[key] ? value * -1 : value;
        }
      }
    }
    return 0;
  });
};
