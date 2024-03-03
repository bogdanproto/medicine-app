import { routePage } from 'const';
import { HeaderContainer } from './Header.styled';
import { Badge, Button, LinkStyled } from 'components/common';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { logOutUser } from 'services/redux/authSlice/operations';
import { selectCart } from 'services/redux/dataSlice/selectors';

export const Header = () => {
  const dispatch = useTypeDispatch();
  const cart = useTypeSelector(selectCart);

  const handleClick = () => {
    dispatch(logOutUser(null));
  };
  return (
    <HeaderContainer>
      <nav>
        <LinkStyled to={routePage.BASE}>Shop</LinkStyled>
        <LinkStyled to={routePage.CART}>
          Shopping Cart {cart.length > 0 && <Badge count={cart.length} />}
        </LinkStyled>
        <LinkStyled to={routePage.HISTORY}>History</LinkStyled>
      </nav>
      <Button onClick={handleClick}>Logout</Button>
    </HeaderContainer>
  );
};
