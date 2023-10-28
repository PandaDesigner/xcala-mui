import {Divider, Stack, Typography, styled} from '@mui/material'
import iconsFundColors from '../../../assets/images/iconsChipsRed.svg'
import {ChipIconsComponents} from './ChipIconsComponents'

const ItemDistributionContent = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '4px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '14px 12px',
  boxSizing: 'border-box',
  //height: '35px',
})
const ItemContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  width: '100%',
})
const ItemNameChips = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  flex: '1 1 1 auto',
  margin: '0px',
  width: '100%',
})
const IconsChips = styled('img')({
  height: 'clamp(0.5rem, 0.0313rem + 1.5vw, 0.875rem)',
  width: 'clamp(0.5rem, 0.0313rem + 1.5vw, 0.875rem)',
  margin: '0px',
})
const NameFundItem = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: 'clamp(0.75rem, 0.2813rem + 1.5vw, 1.125rem)',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '105%',
  textTransform: 'none',
  margin: '0px 0px 0px 10px',
})
const DetailPortfolioContent = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  flex: '1 1 1 auto',
  width: '100%',
})
const DescriptionDetailPortfolio = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  width: '100%',
})
const ContentDescription = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  width: '100%',
})
const MountInvesmentFund = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  width: '100%',
})
const MontoInvertido = styled(Typography)({
  textAlign: {md: 'center', xs: 'left'},
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '8px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
  width: '100%',
})
const ValueMountInvesment = styled(Typography)({
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '500',
  fontSize: '12px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  width: '100%',
  //margin: '5px 0px 0px 0px',
})
const DivaiderItem = styled(Divider)({
  border: '1px solid rgba(255, 255, 255, 1)',
})
const NumOfInstallments = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px 0px 0px 11px',
  //height: '19px',
  width: '53px',
})
const NDeCuotas = styled(Stack)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '8px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})
const ValueCuote = styled(Stack)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '500',
  fontSize: '12px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '5px 0px 0px 0px',
})

const InvesmentDescription = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px 0px 0px 11px',
  height: '21px',
  width: '56px',
})
const Invertido = styled(Stack)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Inter',
  fontWeight: '400',
  fontSize: '8px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})
const ValueInvertido = styled(Stack)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '4px 0px 0px 0px',
})

export const ItemDescription = () => {
  return (
    <ItemDistributionContent>
      <ItemContainer flexDirection={{md: 'row', xs: 'column'}}>
        <ItemNameChips>
          <ChipIconsComponents colorsItem={'F57E7E'} />
          <NameFundItem>Deuda Privada Global</NameFundItem>
        </ItemNameChips>
        <DetailPortfolioContent>
          <DescriptionDetailPortfolio>
            <ContentDescription
              maxWidth={{md: '350px', xs: '100%'}}
              flexDirection={{md: 'row', xs: 'column'}}
            >
              <MountInvesmentFund
                flexDirection={{xs: 'row', md: 'column'}}
                justifyContent={{xs: 'space-between', md: 'flex-start'}}
                alignItems={{xs: 'center', md: 'flex-end'}}
              >
                <MontoInvertido textAlign={{md: 'center', xs: 'left'}}>
                  Monto invertido
                </MontoInvertido>
                <ValueMountInvesment textAlign={{md: 'center', xs: 'right'}}>
                  $ 26.000
                </ValueMountInvesment>
              </MountInvesmentFund>
              <Divider
                orientation={{md: 'vertical', xs: 'horizontal'}}
                sx={{
                  border: '0.5px solid rgba(255,255,255,0.5)',
                  height: '100%',
                  width: {xs: '100%', md: ''},
                }}
                variant='fullWidth'
              />
              <MountInvesmentFund
                flexDirection={{xs: 'row', md: 'column'}}
                justifyContent={{xs: 'space-between', md: 'flex-start'}}
                alignItems={{xs: 'center', md: 'flex-end'}}
              >
                <MontoInvertido textAlign={{md: 'center', xs: 'left'}}>
                  Monto invertido
                </MontoInvertido>
                <ValueMountInvesment textAlign={{md: 'center', xs: 'right'}}>
                  $ 26.000
                </ValueMountInvesment>
              </MountInvesmentFund>
              <Divider
                orientation={{md: 'vertical', xs: 'horizontal'}}
                sx={{
                  border: '0.5px solid rgba(255,255,255,0.5)',
                  height: '100%',
                  width: {xs: '100%', md: ''},
                }}
                variant='fullWidth'
              />
              <MountInvesmentFund
                flexDirection={{xs: 'row', md: 'column'}}
                justifyContent={{xs: 'space-between', md: 'flex-start'}}
                alignItems={{xs: 'center', md: 'flex-end'}}
              >
                <MontoInvertido textAlign={{md: 'center', xs: 'left'}}>
                  Monto invertido
                </MontoInvertido>
                <ValueMountInvesment textAlign={{md: 'center', xs: 'right'}}>
                  $ 26.000
                </ValueMountInvesment>
              </MountInvesmentFund>
              <Divider
                orientation={{md: 'vertical', xs: 'horizontal'}}
                sx={{
                  border: '0.5px solid rgba(255,255,255,0.5)',
                  height: '100%',
                  width: {xs: '100%', md: ''},
                }}
                variant='fullWidth'
              />
              <MountInvesmentFund
                flexDirection={{xs: 'row', md: 'column'}}
                justifyContent={{xs: 'space-between', md: 'flex-start'}}
                alignItems={{xs: 'center', md: 'flex-end'}}
              >
                <MontoInvertido textAlign={{md: 'center', xs: 'left'}}>
                  Monto invertido
                </MontoInvertido>
                <ValueMountInvesment textAlign={{md: 'center', xs: 'right'}}>
                  $ 26.000
                </ValueMountInvesment>
              </MountInvesmentFund>
            </ContentDescription>
          </DescriptionDetailPortfolio>
        </DetailPortfolioContent>
      </ItemContainer>
    </ItemDistributionContent>
  )
}
