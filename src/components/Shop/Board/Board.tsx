import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { CardList } from '../CardList/CardList';
import { BoardContainer } from './Board.styled';
import { selectActiveDrugs } from 'services/redux/dataSlice/selectors';
import { Empty } from 'components/common';

export const Board = () => {
  const drugs = useTypeSelector(selectActiveDrugs);

  return (
    <BoardContainer>
      {drugs.length > 0 ? (
        <CardList drugs={drugs} />
      ) : (
        <Empty>
          <p>Please select a store </p>
        </Empty>
      )}
    </BoardContainer>
  );
};
