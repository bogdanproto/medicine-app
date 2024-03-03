import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { StoreBox, StoreCardContainer } from './StoreCard.styled';
import { selectActiveStore } from 'services/redux/dataSlice/selectors';
import { getAllDrugByStore } from 'services/redux/dataSlice/operations';

interface StoreCardProps {
  _id: string;
  title: string;
}

export const StoreCard: React.FC<StoreCardProps> = ({ _id, title }) => {
  const dispatch = useTypeDispatch();
  const activeStore = useTypeSelector(selectActiveStore);

  const handleClick = (_id: string) => {
    dispatch(getAllDrugByStore(_id));
  };

  return (
    <StoreCardContainer>
      <StoreBox
        onClick={() => handleClick(_id)}
        $isActive={activeStore === _id}
      >
        {title.toUpperCase()}
      </StoreBox>
    </StoreCardContainer>
  );
};
