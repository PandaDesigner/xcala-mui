import { Box, Button, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import iNotificationGif from '../../../assets/images/gif/IconNotification.gif';

const IconNotification = styled('img')({
  margin: '0px'
});
const TitleNotification = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});

const ParagraphNotification = styled(Typography)({
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});
const EmailNotification = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});
const TextNotification = ({ email = 'prfmaestre@hotmail.com' }) => {
  return (
    <>
      <ParagraphNotification
        fontSize={'clamp(0.875rem, -0.1667rem + 4.4444vw, 1.5rem);'}
        component="p"
      >
        Haz click en el link que acabamos de enviar a{' '}
        <EmailNotification
          fontSize={'clamp(0.875rem, -0.1667rem + 4.4444vw, 1.5rem);'}
          component="span"
        >
          {' '}
          {email}{' '}
        </EmailNotification>{' '}
        para que puedas confirmar tu cuenta.
      </ParagraphNotification>
    </>
  );
};

export const SectionNotification = () => {
  return (
    <>
      <Stack
        sx={{
          width: '100%',
          boxSizing: 'border-box',
          flexDirection: 'column',
          padding: 'clamp(1rem, -1.8571rem + 12.1905vw, 2rem);',
          bgcolor: '#fff',
          borderRadius: '1rem',
          boxShadow: '0px 0px 1rem 0px rgba(0, 0, 0, 0.1)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        gap={1}
      >
        <IconNotification
          style={{
            width: 'clamp(12.5rem, 8.3036rem + 17.9048vw, 18.375rem);',
            height: 'clamp(12.5rem, 8.3036rem + 17.9048vw, 18.375rem);',
            margin: '0px',
            marginTop: { xs: '-1.5rem', md: '-3.5rem' }
          }}
          src={iNotificationGif}
          alt="Icon Notification"
        />
        <TitleNotification
          fontSize={'clamp(1.3rem, -0.6667rem + 7.1111vw, 2rem);'}
        >
          Revisa tu correo
        </TitleNotification>
        <TextNotification email="pfernandez@xcala.com" />
        <Button
          fullWidth
          variant="contained"
          sx={{
            marginY: '0.8rem',
            borderRadius: '8px',
            p: '8px 32px',
            fontSize: 'clamp(0.875rem, -0.1667rem + 4.4444vw, 1.5rem)',
            textTransform: 'none',
            maxWidth: '375px'
          }}
        >
          Ingresa
        </Button>
      </Stack>
    </>
  );
};
