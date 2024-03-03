import dayjs from 'dayjs';
import { IOrderHistory } from 'interfaces/data/IData';
import {
  HistoryOrderCardContainer,
  MainInfo,
  Title,
} from './HistoryOrderCard.styled';
import { HistoryOrderItem } from '../HistoryOrderItem/HistoryOrderItem';

interface HistoryOrderCartProps {
  order: IOrderHistory;
}

export const HistoryOrderCard: React.FC<HistoryOrderCartProps> = ({
  order: { _id, createdAt, products, name, email, phone, address, totalPrice },
}) => {
  return (
    <HistoryOrderCardContainer>
      <div>
        <Title>{`Order #${_id} date ${dayjs(createdAt).format(
          'YYYY-MM-DD'
        )}`}</Title>
        <ul>
          {products.length > 0 &&
            products.map(item => (
              <HistoryOrderItem key={item._id} item={item} />
            ))}
        </ul>
      </div>
      <MainInfo>
        <Title>Shipping address</Title>
        <p>{`Name: ${name}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Address: ${address}`}</p>
        <Title>{`TotalPrice: ${totalPrice}$`}</Title>
      </MainInfo>
    </HistoryOrderCardContainer>
  );
};
