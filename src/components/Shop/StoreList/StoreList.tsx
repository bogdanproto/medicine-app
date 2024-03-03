import { StoreListStyled } from './StoreList.styled';
import { IStore } from 'interfaces/data/IData';
import { StoreCard } from '../StoreCard/StoreCard';

interface StoreListProps {
  stores: IStore[];
}

export const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  return (
    <StoreListStyled>
      {stores.length > 0 &&
        stores.map(({ _id, title }: IStore) => (
          <StoreCard key={_id} _id={_id} title={title} />
        ))}
    </StoreListStyled>
  );
};
