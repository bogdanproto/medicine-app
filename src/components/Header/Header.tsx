import { routePage } from 'const';
import { HeaderContainer } from './Header.styled';
import { Button, LinkStyled } from 'components/common';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { logOutUser } from 'services/redux/authSlice/operations';

export const Header = () => {
  const dispatch = useTypeDispatch();

  const handleClick = () => {
    dispatch(logOutUser(null));
  };
  return (
    <HeaderContainer>
      <nav>
        <LinkStyled to={routePage.BASE}>Shop</LinkStyled>
        <LinkStyled to={routePage.CART}>Shopping Cart</LinkStyled>
        <LinkStyled to={routePage.HISTORY}>History</LinkStyled>
      </nav>
      <Button onClick={handleClick}>Logout</Button>
    </HeaderContainer>
  );
};
