import { ItemBox } from 'components/Cart/CartItem/CartItem.styled';
import { ICartItem } from 'interfaces/data/IData';
import { formatWordFirstUpper } from 'services/helpers';
import { HistoryOrderItemContainer } from './HistoryOrderItem.styled';

interface CartItemProps {
  item: ICartItem;
}

export const HistoryOrderItem: React.FC<CartItemProps> = ({
  item: { title, imgCloud, quantity, price },
}) => {
  return (
    <HistoryOrderItemContainer>
      <img src={imgCloud} alt={title} />

      <ItemBox>
        <h4>{formatWordFirstUpper(title)}</h4>
        <p>{`Price: ${price}$`}</p>
        <p>{`Quantity: ${quantity}`}</p>
      </ItemBox>
    </HistoryOrderItemContainer>
  );
};
