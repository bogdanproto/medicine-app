import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { CartList } from 'components/Cart/CartList/CartList';
import { CartConteiner } from './Cart.styled';
import { Empty } from 'components/common';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectCart } from 'services/redux/dataSlice/selectors';
import { OrderPlace } from 'components/Cart/OrderPlace/OrderPlace';
const API_KEY = process.env.REACT_APP_API_KEY;

const libraries: Libraries = ['places'];

const Cart = () => {
  const cart = useTypeSelector(selectCart);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY || '',
    libraries: libraries,
  });

  return (
    <CartConteiner>
      {cart.length > 0 ? (
        <>
          <CartList cart={cart} />
          <OrderPlace isLoaded={isLoaded} />
        </>
      ) : (
        <Empty>
          <p>Shopping cart is empty</p>
        </Empty>
      )}
    </CartConteiner>
  );
};

export default Cart;
