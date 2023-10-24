import {Button, Stack, Typography, styled} from '@mui/material'

export const ComponentRescateCont = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  //height: '161.72px',
  //width: '682.38px',
})
export const ContentAvatarRescue = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  //height: '161.72px',
  //width: '682.38px',
})

export const RescueAvatarIcon = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  //width: '161px',
  //height: '161.72px',
  margin: '0px',
})

export const RescueAvatarDescript = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',

  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  //margin: '0px 0px 0px 8.375024795532227px',
  //height: '161.72px',
  //width: '513px',
})

export const RescueIconsPorfolio = styled('div')({
  boxShadow:
    '-3.8514773845672607px 3.8514773845672607px 17.331645965576172px rgba(61, 64, 75, 0.15)',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  left: '0px',
  top: '0px',
  height: '131px',
  width: '131px',
})
export const IconosPerfiles = styled('img')({
  height: 'auto',
  width: '131px',
  margin: '0px',
})
export const RescueAvatarPorfilio = styled('img')({
  height: 'auto',
  width: '40px',
  position: 'absolute',
  left: '80px',
  bottom: '-5px',
})

export const RescueAvatarTitle = styled(Typography)({
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(223, 224, 243, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '40px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '100%',
  textTransform: 'none',
  margin: '0px',
})
export const RescueAvatarChips = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '4px 0px 0px 0px',
  //height: '15px',
  //width: '513px',
})

export const RescueQuotas = styled(Typography)({
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '18px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  alignSelf: 'stretch',
  //margin: '4px 0px 0px 0px',
})

export const RescueQuotasSpan = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '18px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
})

export const RescueMunt = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  //margin: '4px 0px 0px 0px',
  //height: '27.15px',
  //width: '224.29px',
})
export const Tienes = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '18px',
  letterSpacing: '1.8px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  margin: '0px',
})
// const AtomoUserRate = styled()({
//   width: '159.29px',
//   height: '27.15px',
//   margin: '0px',
// })

export const TitlePortafolioValue = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(208, 238, 233, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '99.99999403953552%',
  textTransform: 'none',
  margin: '0px',
})

export const ExpectedReturnValue = styled(Typography)({
  textAlign: 'right',
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
  textAlign: 'right',
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

/***********Cards Content **********/

export const RescueContentContent = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 8px rgba(61, 64, 75, 0.15)',
  borderRadius: '16px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px',
  boxSizing: 'border-box',
  //margin: '0px auto',
  marginTop: '-45px',
})
export const SelectContent = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  //height: '110px',
  //width: '676px',
})
export const TitleSectionRescue = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 0.87)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '26px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  alignSelf: 'stretch',
  margin: '0px',
})
export const SectionSelectRescue = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '16px 0px 0px 0px',
  //height: '55px',
  //width: '676px',
})

export const ButtonContained = styled(Button)({
  backgroundColor: 'rgba(30, 34, 170, 1)',
  boxShadow:
    '0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  height: '60px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  padding: '8px 32px',
  //width: '456px',
  color: '#fff',
})
export const BaseBotton = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px 95px',
  boxSizing: 'border-box',
  margin: '0px',
  overflow: 'hidden',
  height: '86px',
  width: '456px',
})
