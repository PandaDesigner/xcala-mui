import { Stack } from '@mui/material';
import { SectionInternalLayout } from '../layout/SectionInternalLayout';

export const InitialPerfilPages = () => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: 0
      }}
    >
      <SectionInternalLayout></SectionInternalLayout>
    </Stack>
  );
};
