import { Stack, Typography, styled } from '@mui/material';

export const ContentCash = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: { md: 'flex-end', sx: 'center' },
  padding: '0px',
  boxSizing: 'border-box'
});
export const CoinCash = styled(Typography)({
  fontSize: '40px',
  color: '#fff',
  fontFamily: 'Poppins',
  fontWeight: '500',

  //height: '25px',
  margin: '0px',
  lineHeight: '0.9'
});
export const TitleCash = styled(Typography)({
  fontSize: '12px',
  color: '#fff',

  fontFamily: 'Poppins',
  fontWeight: '300'
  //margin: '12px 0px 0px 0px'
});

export const TitlePagesRecharge = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 0.87)',
  fontStyle: 'inherit',
  fontFamily: 'Museo',
  fontWeight: '500'
});
