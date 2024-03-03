import { ICartItem } from 'interfaces/data/IData';
import { CartListBox, CartListContainer } from './CartList.styled';
import { CartItem } from '../CartItem/CartItem';

interface CartListProps {
  cart: ICartItem[];
}

export const CartList: React.FC<CartListProps> = ({ cart }) => {
  return (
    <CartListContainer>
      {cart.length > 0 && (
        <CartListBox>
          <ul>
            {cart.map((item: ICartItem) => (
              <CartItem key={item._id} item={item} />
            ))}
          </ul>
        </CartListBox>
      )}
    </CartListContainer>
  );
};
