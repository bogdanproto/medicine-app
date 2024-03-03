import { CartList } from 'components/Cart/CartList/CartList';
import { OrderForm } from 'components/Cart/OrderForm/OrderForm';
import { CartConteiner } from './Cart.styled';

const Cart = () => {
  return (
    <CartConteiner>
      <CartList />
      <OrderForm />
    </CartConteiner>
  );
};

export default Cart;
