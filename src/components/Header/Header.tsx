import { routePage } from 'const';
import { HeaderContainer } from './Header.styled';
import { LinkStyled } from 'components/common';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <LinkStyled to={routePage.BASE}>Shop</LinkStyled>
        <LinkStyled to={routePage.CART}>Shopping Cart</LinkStyled>
      </nav>
    </HeaderContainer>
  );
};
