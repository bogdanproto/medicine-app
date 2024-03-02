import { routePage } from 'const';
import { HeaderContainer } from './Header.styled';
import { LinkStyled } from 'components/common';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { logOutUser } from 'services/redux/authSlice/operations';

export const Header = () => {
  const dispatch = useTypeDispatch();
  return (
    <HeaderContainer>
      <nav>
        <LinkStyled to={routePage.BASE}>Shop</LinkStyled>
        <LinkStyled to={routePage.CART}>Shopping Cart</LinkStyled>
        <button
          onClick={() => {
            dispatch(logOutUser(null));
          }}
        >
          logout
        </button>
      </nav>
    </HeaderContainer>
  );
};
