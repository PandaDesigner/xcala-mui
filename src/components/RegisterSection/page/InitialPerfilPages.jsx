import { Button, Link, Stack, styled } from '@mui/material';
import { SectionInternalLayout } from '../layout/SectionInternalLayout';
import { ContainerRiskDefault, DefiningRiskProfile } from '../views';
import { SectionNotification } from '../views/SectionNotification';
import { SelectorImput } from '../components/SelectorImput';

const SectionButton = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '456px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px auto',
  marginBottom: '1rem',
});

export const InitialPerfilPages = ({ headerSteep = true }) => {
  return (
    <Stack
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
      }}
    >
      <SectionInternalLayout headerSteep={headerSteep}>
        {headerSteep ? (
          <ContainerRiskDefault>
            {['Menos de 1 año', 'De 1 a 2 años', 'Más de 2 años'].map(
              (item, index) => (
                <SelectorImput key={index} text={item} />
              )
            )}
          </ContainerRiskDefault>
        ) : (
          <DefiningRiskProfile />
        )}
        <SectionButton>
          <Button
            variant='text'
            sx={{
              textDecoration: 'none',
              textTransform: 'none',
              padding: '8px 32px',
            }}
          >
            volver
          </Button>
        </SectionButton>
      </SectionInternalLayout>
    </Stack>
  );
};
