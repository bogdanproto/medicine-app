import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { CardList } from '../CardList/CardList';
import { BoardContainer, BoardListContainer } from './Board.styled';
import { selectSortedDrugs } from 'services/redux/dataSlice/selectors';
import { Empty, SortBar } from 'components/common';

export const Board = () => {
  const sortedDrugs = useTypeSelector(selectSortedDrugs);

  return (
    <BoardContainer>
      {sortedDrugs.length > 0 ? (
        <>
          <SortBar />
          <BoardListContainer>
            <CardList drugs={sortedDrugs} />
          </BoardListContainer>
        </>
      ) : (
        <Empty>
          <p>Please select a store </p>
        </Empty>
      )}
    </BoardContainer>
  );
};
