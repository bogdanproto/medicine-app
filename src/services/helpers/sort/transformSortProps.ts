import {
  ISortCreatedAt,
  ISortFavorite,
  ISortPrice,
} from 'interfaces/data/IData';

export const transformSortProps = (
  props: [ISortFavorite, ISortPrice, ISortCreatedAt]
) =>
  props
    .map(item => {
      const [key, value] = Object.entries(item)[0];
      if (value === '') {
        return null;
      }
      return [key, value === 'ascending' ? 1 : -1];
    })
    .filter(Boolean);
