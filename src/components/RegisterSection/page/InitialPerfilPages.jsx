import { Stack } from '@mui/material';
import { SectionInternalLayout } from '../layout/SectionInternalLayout';
import { ContainerRiskDefault, DefiningRiskProfile } from '../views';
import { SectionNotification } from '../views/SectionNotification';
import { SelectorImput } from '../components/SelectorImput';

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
        <ContainerRiskDefault>
          {['Menos de 1 año', 'De 1 a 2 años', 'Más de 2 años'].map(
            (item, index) => (
              <SelectorImput key={index} text={item} />
            )
          )}
        </ContainerRiskDefault>
        {/*   <DefiningRiskProfile /> */}
      </SectionInternalLayout>
    </Stack>
  );
};
