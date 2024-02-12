import { Box, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { ImgComponent } from '../components/ImgComponent';
import { ImgGreenComponent } from '../components/ImgGreenComponent';

const BackgroundImg = styled(Box)({
  boxSizing: 'border-box',
  minHeight: '100%',
  background: '#1E22AA',
  position: 'absolute',
  padding: '12px',
  top: '0',
  left: '0'
});
const ImgYellow = styled(ImgComponent)({
  boxSizing: 'border-box'
});

const ImgGreen = styled(ImgGreenComponent)({
  boxSizing: 'border-box'
});

export const RegisterLayout = ({ children }) => {
  const backgroundMatches = useMediaQuery(
    '(min-width:900px) and (max-width:1400px)'
  );

  const backgroundQuery =
    'clamp(70vh, calc(70vh + 0.25 * (100vw - 900px)), 65vh)'; // backgroundMatches ? '70vh' : '65vh';

  return (
    <>
      <Stack
        sx={{
          boxSizing: 'border-box',
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: { sm: '#1E22AA', md: '#fff' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: '34px 12px'
        }}
      >
        <Stack
          sx={{
            position: 'absolute',
            isolation: 'isolate',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'start',
            padding: '0px',
            boxSizing: 'border-box',
            zIndex: 9
          }}
          top="clamp(3.75rem, 13.4821rem + -20.1905vw, 1.625rem)"
          left="clamp(4.375rem, 1.6964rem + 11.4286vw, 8.125rem)"
          maxWidth="clamp(16.25rem, 7.4384rem + 37.5963vw, 28.5rem)"
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              fontSynthesis: 'none',
              color: 'rgba(255, 255, 255, 1)',
              fontStyle: 'normal',
              fontFamily: 'Museo',
              fontWeight: '700',
              letterSpacing: '0px',
              textDecoration: 'none',
              textTransform: 'none',
              margin: '0px'
            }}
            fontSize="clamp(1.2rem, -0.0714rem + 4.5714vw, 2.5rem);"
          >
            ¡Bienvenido al mundo de las inversiones!
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              fontSynthesis: 'none',
              color: 'rgba(255, 255, 255, 1)',
              fontStyle: 'normal',
              fontFamily: 'Poppins',
              fontWeight: '400',
              letterSpacing: '0px',
              textDecoration: 'none',
              textTransform: 'none',
              margin: '4px 0px 0px 0px'
            }}
            fontSize="clamp(0.75rem, 0.2143rem + 2.2857vw, 0.89rem)"
          >
            Invierte seguro, invierte como los que saben...
          </Typography>
        </Stack>
        {children}
        <BackgroundImg
          width={{ xs: '100%', sm: '100%', md: backgroundQuery }}
          borderRadius={{ md: '0px 24px 24px 0px' }}
        />
        <ImgYellow />
        <ImgGreen />
      </Stack>
    </>
  );
};
