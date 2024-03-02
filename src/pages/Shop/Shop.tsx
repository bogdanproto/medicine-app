import { SideBar } from 'components/Shop/SideBar/SideBar';
import { ShopContainer } from './Shop.styled';
import { Board } from 'components/Shop/Board/Board';

const Shop = () => {
  return (
    <ShopContainer>
      <SideBar />
      <Board />
    </ShopContainer>
  );
};

export default Shop;
