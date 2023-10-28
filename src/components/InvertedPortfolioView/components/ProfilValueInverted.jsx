import {Stack, Typography, styled} from '@mui/material'
import iconNotification from '../../../assets/images/perfiles/ProfilePorfolio/icon/info.svg'

const ExpectedReturn = styled(Stack)({
  flex: '1 1 auto',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  //width: '50%',
  //maxWidth: '80%',
  justifyContent: {xs: 'center', md: 'flex-end'},
  alignItems: {md: 'flex-end', xs: 'center'},
  padding: '0px',
  boxSizing: 'border-box',
})
const PercentageReturn = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
})
const PercentageReturnText = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(208, 238, 233, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '64px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})
const IconInfoDisplay = styled('img')({
  width: '24px',
  height: '24px',
  margin: '0px 0px 0px 14px',
})
const ExpectedReturners = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  alignItems: 'flex-end',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '-5px 0px 0px 0px',
  //height: '33px',
})
const RentabilidadText = styled(Typography)({
  textAlign: {md: 'right', xs: 'center'},
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(231, 243, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '22px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

export const ProfilValueInverted = ({rescueValue = '14,5'}) => {
  return (
    <>
      <ExpectedReturn>
        <PercentageReturn justifyContent={{md: 'flex-end', xs: 'center'}}>
          <PercentageReturnText> {`${rescueValue}%`}</PercentageReturnText>
          <IconInfoDisplay src={iconNotification} />
        </PercentageReturn>
        <ExpectedReturners justifyContent={{md: 'flex-end', xs: 'center'}}>
          <RentabilidadText>Retorno Esperado</RentabilidadText>
        </ExpectedReturners>
      </ExpectedReturn>
    </>
  )
}
