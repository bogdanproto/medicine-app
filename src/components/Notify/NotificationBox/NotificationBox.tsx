import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { setSuccesMsgDefault } from 'services/redux/dataSlice/slice/dataSlice';

type AlertColor = 'error' | 'warning' | 'info' | 'success';

export interface IPropsNotification {
  type: AlertColor;
  message: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NotificationBox = ({ type, message }: IPropsNotification) => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useTypeDispatch();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpen(false);
    dispatch(setSuccesMsgDefault(null));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
