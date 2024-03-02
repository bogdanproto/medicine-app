import { ICartItem } from 'interfaces/data/IData';
import { CartItemContainer, ItemBox } from './CartItem.styled';
import { formatWordFirstUpper } from 'services/helpers';
import { InputForm } from 'components/common';

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <CartItemContainer>
      <img src={item.imgCloud} alt={item.title} />

      <ItemBox>
        <p>{formatWordFirstUpper(item.title)}</p>
        <p>{`Price: ${item.price}$`}</p>
        <InputForm type="number" />
      </ItemBox>
    </CartItemContainer>
  );
};
