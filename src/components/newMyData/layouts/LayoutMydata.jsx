import { Button, Stack, Typography, styled } from '@mui/material';
import { ButtonsAcount, TextButtons } from '../components';

const HeaderComponent = styled(Stack)({
  width: '100%',
  backgroundColor: 'rgba(30, 34, 170, 1)',
  borderRadius: '0px 0px 32px 32px',
  height: '442px',
  //position: 'absolute',
  left: '0px',
  top: '0px',
  justifyContent: 'center',
  alignItems: 'start'
});

const TitleDatos = styled(Typography)({
  textAlign: 'start',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '48px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  width: '80%',
  maxWidth: '1380px',
  margin: '0 auto'
});

const ComponentPages = styled(Stack)({
  width: '80%',
  maxWidth: '1380px',
  flexDirection: 'row',
  margin: '0 auto',
  marginTop: '-94px',
  gap: '24px',
  flexWrap: 'wrap'
});

export const LayoutMydata = ({ children, title = 'Mis Datos' }) => {
  return (
    <Stack
      sx={{
        width: '100%',
        flexDirection: 'column',
        padding: '0',
        margin: 0,
        paddingBottom: '128px'
      }}
    >
      <HeaderComponent>
        <TitleDatos>{title}</TitleDatos>
      </HeaderComponent>
      <ComponentPages>{children}</ComponentPages>
      <Stack
        sx={{
          width: '100%',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          marginTop: '54px'
        }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: 'none'
          }}
        >
          Descartar
        </Button>

        <Button
          variant="contained"
          sx={{
            textTransform: 'none'
          }}
        >
          Guardar cambios
        </Button>
      </Stack>
    </Stack>
  );
};
