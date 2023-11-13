import {Button, Stack, Typography, styled} from '@mui/material'
import {TabletGridDesktop} from '../UI/TabletGridDesktop'

const BodyTransaction = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 8px rgba(61, 64, 75, 0.15)',
  borderRadius: '16px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '32px 24px',
  boxSizing: 'border-box',
  minHeight: '486px',
  width: '100%',
  maxWidth: '1100px',
})

const AssetsTitle = styled(Stack)({
  borderRadius: '4px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '4px 0px',
  boxSizing: 'border-box',
  width: '100%',
  margin: '0px',
})
const TitleAssets = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '126.49999856948853%',
  textTransform: 'none',
  margin: '0px',
})
const IteractionAssetsFilt = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
})

const FundSelectBtn = styled(Button)({
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(111, 111, 111, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '126.49999856948853%',
  textTransform: 'none',
  margin: '0px',
})
const Divaider = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '126.49999856948853%',
  textTransform: 'none',
})

export const BodyTransactions = () => {
  return (
    <BodyTransaction>
      <AssetsTitle gap={1} flexDirection={{md: 'row', xs: 'column'}}>
        <TitleAssets>Mis Transacciones</TitleAssets>
        <IteractionAssetsFilt gap={1}>
          <FundSelectBtn>Portfolios</FundSelectBtn>
          <Divaider>|</Divaider>
          <FundSelectBtn>Fondos</FundSelectBtn>
        </IteractionAssetsFilt>
      </AssetsTitle>
      <Stack width={'100%'}>
        <TabletGridDesktop />
      </Stack>
    </BodyTransaction>
  )
}
