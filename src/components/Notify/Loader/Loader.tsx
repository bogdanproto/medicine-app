import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Stack sx={{ width: '100%', color: 'blue' }}>
        <LinearProgress color="inherit" />
      </Stack>
    </LoaderContainer>
  );
};
