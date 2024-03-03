import { ChangeEvent } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { ICartItem } from 'interfaces/data/IData';
import { CartItemContainer, ItemBox } from './CartItem.styled';
import { formatWordFirstUpper } from 'services/helpers';
import { IconBtn, InputForm } from 'components/common';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import {
  changeQntCart,
  deleteFromCart,
} from 'services/redux/dataSlice/slice/dataSlice';

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: React.FC<CartItemProps> = ({
  item: { _id, title, imgCloud, quantity, price },
}) => {
  const dispatch = useTypeDispatch();

  const handleChangeQnt = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQntCart({ _id, quantity: Number(evt.target.value) }));
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <CartItemContainer>
      <IconBtn
        type="button"
        onClick={() => {
          handleDeleteItem(_id);
        }}
      >
        <IoCloseSharp color="#484545" />
      </IconBtn>

      <img src={imgCloud} alt={title} />

      <ItemBox>
        <h4>{formatWordFirstUpper(title)}</h4>
        <p>{`Price: ${price}$`}</p>
        <InputForm
          type="number"
          id={_id}
          value={quantity}
          min={1}
          onChange={handleChangeQnt}
        />
      </ItemBox>
    </CartItemContainer>
  );
};
