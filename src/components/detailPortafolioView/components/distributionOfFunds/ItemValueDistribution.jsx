import {Box, Stack, Typography, styled} from '@mui/material'
import {handelBgColorFund} from '../../handler'

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
})

const FondoNameItem = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  textDecoration: 'none',
  lineHeight: '105%',
  textTransform: 'none',
  flex: '1',
  margin: '0px 0px 0px 10px',
  // width: '100%',
})

const IndicatorSection = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 8px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  width: '100%',
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

export const ItemValueDistribution = ({
  fundName = 'Nombre del fondo',
  porcentualValueFund = '13.0',
  bgColorFund = 'rgb(0, 96, 250, 1)',
  lineColroFund = `1px solid  ${handelBgColorFund(bgColorFund)}`,
}) => {
  console.log(handelBgColorFund(bgColorFund))
  console.log(lineColroFund)
  return (
    <ItemValueDistributio>
      <IndicatorSection>
        <SelectorIndicator>
          <InvertedChartsIndica
            sx={{
              backgroundColor: bgColorFund,
              border: lineColroFund,
            }}
          />
          <FondoNameItem sx={{fontSize: {sm: '0.9rem !important', md: '1rem'}}}>
            {fundName}
          </FondoNameItem>
        </SelectorIndicator>
        <ValueFondo>
          <ValuePymen>{`${porcentualValueFund}%`}</ValuePymen>
          <DescriptionValue>del valor invertido</DescriptionValue>
        </ValueFondo>
      </IndicatorSection>
    </ItemValueDistributio>
  )
}
