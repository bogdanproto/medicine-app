import { IDrug } from 'interfaces/data/IData';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';

import { CardContainer, TitleCard } from './Card.styled';
import { Button, IconBtn } from 'components/common';
import { formatWordFirstUpper } from 'services/helpers';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import {
  addToCart,
  toggelFavorite,
} from 'services/redux/dataSlice/slice/dataSlice';
import { selectFavoriteDrug } from 'services/redux/dataSlice/selectors';

interface CardProps {
  drug: IDrug;
}

export const Card: React.FC<CardProps> = ({ drug }) => {
  const dispatch = useTypeDispatch();

  const isFavorite = useTypeSelector(state =>
    selectFavoriteDrug(state).includes(drug._id)
  );

  const handleClickFavorite = (id: string) => {
    dispatch(toggelFavorite(id));
  };

  const handleClickToCart = (drug: IDrug) => {
    dispatch(addToCart(drug));
  };

  return (
    <CardContainer>
      <IconBtn
        onClick={() => {
          handleClickFavorite(drug._id);
        }}
        type="button"
      >
        {isFavorite ? (
          <IoMdHeart color="#2750ae" />
        ) : (
          <IoMdHeartEmpty color="#484545" />
        )}
      </IconBtn>

      <img src={drug.imgCloud} alt={drug.title} />

      <TitleCard>
        <p>{formatWordFirstUpper(drug.title)}</p>
        <p>{`${drug.price}$`}</p>
      </TitleCard>

      <Button type="button" onClick={() => handleClickToCart(drug)}>
        Add to Cart
      </Button>
    </CardContainer>
  );
};
