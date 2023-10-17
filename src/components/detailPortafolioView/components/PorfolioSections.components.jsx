import {Box, Button, Stack, Typography, styled} from '@mui/material'

const $minHeigth = '407px'
export const BackgroundColor = styled(Stack)({
  backgroundColor: 'rgba(30, 34, 170, 1)',
  borderRadius: '0px 0px 16px 16px',
  position: 'relative',
  left: '0px',
  top: '0px',
  alignSelf: 'stretch',
  width: '100%',
  minWidth: '90%',
  minHeight: $minHeigth,
  padding: '0px',
  margin: '0px',
})

export const ContentApp = styled(Stack)({
  position: 'relative',
  flexDirection: 'row',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1380px',
  height: '100%',
  minHeight: $minHeigth,
  alignItems: 'center',
})

export const BottonsIconosPerfile = styled(Stack)({
  width: '54px',
  height: '54px',
  position: 'absolute',
  right: '22px',
  bottom: '25px',
})

export const IconInfo = styled('img')({
  height: 'auto',
  width: '24px',
  margin: '0px 0px 0px 14px',
})

export const RetornoEsperado = styled(Typography)({
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(231, 243, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

export const CreateDatePorfolio = styled(Typography)({
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(231, 243, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '4px 0px 0px 0px',
})

export const SectionButtons = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: {md: 'row', xs: 'column'},
  justifyContent: 'center',
  alignItems: {md: 'flex-end', xs: 'center'},
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '1380px',
  height: '100%',
  margin: '0 auto',
})

export const AreaButtons = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 8px rgba(61, 64, 75, 0.15)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '650px',
  minWidth: '550px',
  margin: '0px',
  bottom: '-40px',
  gap: 8,
})
export const ButtonsInvestment = styled(Button)({
  flex: '1',
  height: '50%',
  width: '100%',
  paddingY: '16px',
})

//*Body portafolio

export const SectionDataPorfolio = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
})

export const ChartsPorfolio = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',

  width: '100%',
})
export const DataCharts = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  width: '100%',
  margin: '0px',
})

export const InfoPorfolio = styled(Stack)({
  background:
    'linear-gradient(-0.4200000000000017deg, rgba(242, 245, 248, 1) -63.40646376215654%, rgba(241, 244, 249, 0) 189.4310001607694%)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 20px',
  boxSizing: 'border-box',

  //margin: '0px 0px 0px 48px',
})
export const TitelDataPorfolio = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})
export const DescriptionDataPorfo = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  //margin: '21px 0px 0px 0px',
  width: '100%',
})

//* Description data Charts

export const DescriptionComponents = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  //height: '27px',
})

export const KeyDescription = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '18px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  //width: '70px',
  margin: '0px',
})

export const KeyValue = styled(Typography)({
  textAlign: 'end',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '18px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

export const InvestmentRiskProfile = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(209, 45, 53, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  //width: '488px',
  margin: '0px 0px 0px 16px',
})

export const WarningAmber = styled('img')({
  width: '24px',
  height: '24px',
  margin: '0px',
})

export const PorfolioStack = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
})
export const ValuePorfolio = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
})
export const RentabilidadUltimo = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(208, 238, 233, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '48px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '99.99999403953552%',
  textTransform: 'none',
  margin: '0px',
})
export const DeteilValue = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
})
