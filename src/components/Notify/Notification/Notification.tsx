import { errorMessage } from 'const';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';

import { NotificationBox } from '../NotificationBox/NotificationBox';
import { Loader } from '../Loader/Loader';
import { selectNotify } from 'services/redux/authSlice/selectors';

export const Notification = () => {
  const { error, isLoading, successMsg } = useTypeSelector(selectNotify);

  return (
    <>
      {isLoading && <Loader />}
      {error && error !== errorMessage.user_unauthorized_token && (
        <NotificationBox type="error" message={error} />
      )}
      {successMsg && <NotificationBox type="success" message={successMsg} />}
    </>
  );
};
