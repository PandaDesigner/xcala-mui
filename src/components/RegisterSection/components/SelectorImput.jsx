import { Stack, Typography, styled } from '@mui/material';

const SelectorTimeInvertio = styled(Stack)({
  background:
    'linear-gradient(-101.95deg, rgba(255, 255, 255, 0.8) 0.27485124255511545%, rgba(255, 255, 255, 0) 38.15295076594133%, rgba(255, 255, 255, 0.8) 98.55316605257082%)',
  backdropFilter: 'blur(48px)',
  WebkitBackdropFilter: 'blur(48px)',
  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  //height: '99px',
  justifyContent: 'flex-start',
  alignItems: 'center',
  boxSizing: 'border-box',
  color: 'rgba(24, 40, 73, 1)',
  transition: 'ease-in-out',
  transitionDuration: '100ms',
  cursor: 'pointer',
  '&:hover': {
    background:
      'linear-gradient(-101.95deg, rgba(30, 34, 170, 0.8) 0.27485124255511545%, rgba(88, 123, 200, 0.8) 38.15295076594133%, rgba(30, 34, 170, 0.8) 98.55316605257082%)',
    backdropFilter: 'blur(48px)',
    WebkitBackdropFilter: 'blur(48px)',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    color: 'rgba(255, 255, 255, 1)',
    transition: 'ease-in-out',
    transitionDuration: '100ms'
  }
});
const TextTitle = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  flex: '1',
  margin: '0px',
  color: 'inherit'
});

export const SelectorImput = ({ text = ' Menos de 1 año' }) => {
  return (
    <>
      <SelectorTimeInvertio
        sx={{
          padding:
            'clamp(1.25rem, -0.8333rem + 8.8889vw, 2.5rem) clamp(1rem, -0.4167rem + 4.4444vw, 1.25rem)'
        }}
      >
        <TextTitle fontSize={'clamp(0.875rem, 0.3393rem + 2.2857vw, 1.625rem)'}>
          {text}
        </TextTitle>
      </SelectorTimeInvertio>
    </>
  );
};
