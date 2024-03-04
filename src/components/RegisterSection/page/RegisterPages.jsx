import { Stack } from '@mui/material';
import { RegisterLayout } from '../layout/RegisterLayout';
import { FromRegisterComponents, LoginsSection } from '../views';

export const RegisterPages = () => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        //overscrollBehaviorX: 'contain',
      }}
    >
      <RegisterLayout>
        <FromRegisterComponents />
        {/*
        <LoginsSection />
      */}
      </RegisterLayout>
    </Stack>
  );
};
