import { CartList } from 'components/Cart/CartList/CartList';
import { OrderForm } from 'components/Cart/OrderForm/OrderForm';
import { CartConteiner } from './Cart.styled';
import { Empty } from 'components/common';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectCart } from 'services/redux/dataSlice/selectors';

const Cart = () => {
  const cart = useTypeSelector(selectCart);
  return (
    <>
      {cart.length > 0 ? (
        <CartConteiner>
          <CartList cart={cart} />
          <OrderForm />
        </CartConteiner>
      ) : (
        <Empty>
          <p>Shopping cart is empty</p>
        </Empty>
      )}
    </>
  );
};

export default Cart;
