import { Button, Stack, Typography, styled } from '@mui/material';
import { DivisionSectionFrom } from './FormDatas';

const SectionInteractive = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  flex: '1 1 30%',
  margin: '0px',
  //height: '386.35px',
  width: { xs: '100%', md: '30%' },
  maxWidth: { md: '100%' },
  gap: '24px'
});

const TextCuent = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  letterSpacing: '0.13932833075523376px',
  textDecoration: 'none',
  lineHeight: '22.29254150390625px',
  textTransform: 'none',
  alignSelf: 'stretch',
  margin: '20px 0px 0px 0px'
});

export const ButtonsAcount = styled(Button)({
  backgroundColor: 'rgba(244, 244, 251, 1)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  width: '100%',
  height: '55.74px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 0px',
  boxSizing: 'border-box',
  textDecoration: 'none'
});

export const TextButtons = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '16.72062873840332px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});

const CardContent = styled(Stack)({
  width: '100%',
  padding: 1.2,
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  borderRadius: '8px',
  padding: '16px 32px',
  boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.081)'
});

const TitleSection = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '20px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});

export const FormBankSection = () => {
  return (
    <SectionInteractive>
      <CardContent>
        <DivisionSectionFrom textTitle={'Datos bancarios'} />
        <Stack
          sx={{
            gap: '32px'
          }}
        >
          <TextCuent>Aun no registras tu cuenta</TextCuent>
          <ButtonsAcount>
            <TextButtons>Agregar mi cuenta</TextButtons>
          </ButtonsAcount>
        </Stack>
      </CardContent>
      <CardContent gap={'24px'}>
        <TitleSection>Referidos Xcala</TitleSection>
        <ButtonsAcount>
          <TextButtons>Copiar mi link para referir</TextButtons>
        </ButtonsAcount>
      </CardContent>
    </SectionInteractive>
  );
};
