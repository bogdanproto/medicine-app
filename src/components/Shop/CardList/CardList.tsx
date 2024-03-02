import { Card } from '../Card/Card';
import { ListStyled } from './CardList.styled';
import { IDrug } from 'interfaces/data/IData';

interface ListProps {
  drugs: IDrug[];
}

export const CardList: React.FC<ListProps> = ({ drugs }) => {
  return (
    <ListStyled>
      {drugs.length > 0 &&
        drugs.map((drug: IDrug) => <Card key={drug._id} drug={drug} />)}
    </ListStyled>
  );
};
