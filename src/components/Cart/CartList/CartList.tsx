import { ICartItem } from 'interfaces/data/IData';
import { CartListContainer } from './CartList.styled';
import { CartItem } from '../CartItem/CartItem';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectCart } from 'services/redux/dataSlice/selectors';

export const CartList = () => {
  const cart = useTypeSelector(selectCart);

  return (
    <CartListContainer>
      <ul>
        {cart.length > 0 &&
          cart.map((item: ICartItem) => (
            <CartItem key={item._id} item={item} />
          ))}
      </ul>
    </CartListContainer>
  );
};
