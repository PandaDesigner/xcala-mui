import {Stack, Typography, styled} from '@mui/material'
import {ItemValueDistribution} from './distributionOfFunds/itemValueDistribution'
import {BtnGroup} from './distributionOfFunds/btnGroup'
import {handelHexToRgb} from '../handler'

const DistributionValues = styled(Stack)({
  backgroundColor: 'rgba(85, 118, 209, 1)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  boxSizing: 'border-box',
  //  minHeight: '430px',
})
const TitelDistributionInvText = styled(Typography)({
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontSize: '28px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '101.49999856948853%',
  textTransform: 'none',
})
const SectionDistribucion = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '13px 0px 0px 0px',
  height: '100%',
})

export const DistributionValue = () => {
  return (
    <DistributionValues>
      <TitelDistributionInvText fontWeight={'400'} component={'p'}>
        Distribución porcentual de tus{' '}
        <TitelDistributionInvText fontWeight={'700'} component={'span'}>
          inversiones
        </TitelDistributionInvText>
      </TitelDistributionInvText>
      <SectionDistribucion gap={'6px'}>
        <ItemValueDistribution
          fundName='Deuda Privada Pesos'
          bgColorFund={handelHexToRgb('#8612FF')}
        />
        <ItemValueDistribution
          fundName='Balanceado Globa'
          bgColorFund={handelHexToRgb('#160BE3')}
        />
        <ItemValueDistribution
          fundName='Renta Global Pesos'
          bgColorFund={handelHexToRgb('#0060FA')}
        />
        <ItemValueDistribution
          fundName='Global Real Estate Income'
          bgColorFund={handelHexToRgb('#0BBAE3')}
        />
        <ItemValueDistribution
          fundName='US Venture Opportunitie'
          bgColorFund={handelHexToRgb('#0DFBBD')}
        />
        <ItemValueDistribution
          fundName='Deuda Privada Global'
          bgColorFund={handelHexToRgb('#FFAF9C')}
        />
      </SectionDistribucion>
    </DistributionValues>
  )
}
