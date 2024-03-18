import { Stack } from '@mui/material';
import { RegisterLayout } from '../layout/RegisterLayout';
import { FromRegisterComponents, LoginsSection } from '../views';
import { ButtonsPrimary } from '../../NewComponentApp/Button/ButtonsXcala';

export const RegisterPages = () => {
  const handlerTest = () => {
    return console.log(2 + 2);
  };

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
      {/*
    <RegisterLayout>
      <FromRegisterComponents />
    </RegisterLayout>
      <LoginsSection />
    */}
      <Stack
        sx={{
          width: '100%',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ButtonsPrimary name='test btn primary' onClick={handlerTest} />
      </Stack>
    </Stack>
  );
};
