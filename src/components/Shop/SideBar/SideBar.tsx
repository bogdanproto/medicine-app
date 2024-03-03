import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { StoreList } from '../StoreList/StoreList';
import { SideBarContainer } from './SideBar.styled';
import { selectListStores } from 'services/redux/dataSlice/selectors';
import { useEffect } from 'react';
import { getAllStores } from 'services/redux/dataSlice/operations';

export const SideBar = () => {
  const dispatch = useTypeDispatch();
  const stores = useTypeSelector(selectListStores);

  useEffect(() => {
    if (stores.length > 0) {
      return;
    }

    dispatch(getAllStores(null));
  }, [dispatch, stores.length]);

  return (
    <SideBarContainer>
      <StoreList stores={stores} />
    </SideBarContainer>
  );
};
