import { HistoryOrderCard } from 'components/History/HistoryOrderCart/HistoryOrderCard';
import { Empty } from 'components/common';
import { IOrderHistory } from 'interfaces/data/IData';
import { useEffect } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllOrder } from 'services/redux/dataSlice/operations';
import { selectHistory } from 'services/redux/dataSlice/selectors';
import { HistoryContainer } from './History.styled';

const History = () => {
  const dispatch = useTypeDispatch();
  const historyOrders = useTypeSelector(selectHistory);

  useEffect(() => {
    if (historyOrders.length) {
      return;
    }
    dispatch(getAllOrder(null));
  }, [dispatch, historyOrders.length]);

  return (
    <HistoryContainer>
      {historyOrders.length > 0 ? (
        historyOrders.map((item: IOrderHistory) => (
          <HistoryOrderCard key={item._id} order={item} />
        ))
      ) : (
        <Empty>
          <p>No orders placed</p>
        </Empty>
      )}
    </HistoryContainer>
  );
};

export default History;
