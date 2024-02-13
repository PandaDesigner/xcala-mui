import { Stack } from '@mui/material';
import { SectionInternalLayout } from '../layout/SectionInternalLayout';
import { DefiningRiskProfile } from '../views';
import { SectionNotification } from '../views/SectionNotification';

export const InitialPerfilPages = () => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        margin: 0
      }}
    >
      <SectionInternalLayout>
        <SectionNotification />
        {/*   <DefiningRiskProfile /> */}
      </SectionInternalLayout>
    </Stack>
  );
};
