import { ICartItem } from 'interfaces/data/IData';
import { CartListBox, CartListContainer } from './CartList.styled';
import { CartItem } from '../CartItem/CartItem';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectCart } from 'services/redux/dataSlice/selectors';
import { Empty } from 'components/common';

export const CartList = () => {
  const cart = useTypeSelector(selectCart);

  return (
    <CartListContainer>
      {cart.length > 0 ? (
        <CartListBox>
          <ul>
            {cart.map((item: ICartItem) => (
              <CartItem key={item._id} item={item} />
            ))}
          </ul>
        </CartListBox>
      ) : (
        <Empty>
          <p>Shopping cart is empty</p>
        </Empty>
      )}
    </CartListContainer>
  );
};
