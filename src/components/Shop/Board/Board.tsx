import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { CardList } from '../CardList/CardList';
import { BoardContainer } from './Board.styled';
import { selectActiveDrugs } from 'services/redux/dataSlice/selectors';

export const Board = () => {
  const drugs = useTypeSelector(selectActiveDrugs);

  return (
    <BoardContainer>
      <CardList drugs={drugs} />
    </BoardContainer>
  );
};
