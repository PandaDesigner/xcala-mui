import {Box, Stack, Typography, styled} from '@mui/material'

const ItemValueDistributio = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '4px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  width: '100%',
  //minWidth: '338.75px',
  justifyContent: 'space-between',
  alignItems: 'start',
  padding: '16px',
  boxSizing: 'border-box',
  //minHeight: '47px',
})

const SelectorIndicator = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '0px',
  boxSizing: 'border-box',
  flex: '1',
  margin: '0px',
  width: '100%',
  //minWidth: '261.75px',
})
const InvertedChartsIndica = styled(Box)({
  height: '8px',
  width: '8px',
  margin: '0px',
  borderRadius: '100px',
  backgroundColor: 'rgba(245, 126, 126, 1)',
  border: '1px solid rgba(245, 126, 126, 0.5)',
})

const FondoNameItem = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: {sm: '12px', md: '16px'},
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '105%',
  textTransform: 'none',
  flex: '1',
  margin: '0px 0px 0px 10px',
  width: '100%',
})

const IndicatorSection = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 8px',
  //flexWrap: 'wrap',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  width: '100%',
  //height: '39px',
  //minWidth: '330.75px',
})

const ValueFondo = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  minWidth: '53px',
})
const ValuePymen = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: `none`,
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '26px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
  lineHeight: '105%',
})
const DescriptionValue = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '8px',
  letterSpacing: '-0.21px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px 0px 0px 0px',
  lineHeight: '101%',
})

export const ItemValueDistribution = () => {
  return (
    <ItemValueDistributio>
      <IndicatorSection>
        <SelectorIndicator>
          <InvertedChartsIndica />
          <FondoNameItem>Deuda Privada Global</FondoNameItem>
        </SelectorIndicator>
        <ValueFondo>
          <ValuePymen>{`${'13.0'}%`}</ValuePymen>
          <DescriptionValue>del valor invertido</DescriptionValue>
        </ValueFondo>
      </IndicatorSection>
    </ItemValueDistributio>
  )
}
