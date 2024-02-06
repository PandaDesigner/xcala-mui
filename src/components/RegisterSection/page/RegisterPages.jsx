import { Stack } from '@mui/material';
import { RegisterLayout } from '../layout/RegisterLayout';

export const RegisterPages = () => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        overscrollBehaviorX: 'contain',
        top: '0',
        left: '0'
      }}
    >
      <RegisterLayout></RegisterLayout>
    </Stack>
  );
};
