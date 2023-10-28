import {
  ComponentRescateCont,
  ContentAvatarRescue,
  IconosPerfiles,
  RescueAvatarChips,
  RescueAvatarDescript,
  RescueAvatarIcon,
  RescueAvatarPorfilio,
  RescueAvatarTitle,
  RescueIconsPorfolio,
  RescueMunt,
  RescueQuotas,
  RescueQuotasSpan,
} from '../../RescateSection/components/Rescue.component'
import iconAgresivePorfolio from '../../../assets/images/iconPorfoliRescue/Iconos-Perfiles-agresivo.svg'
import iconAvatarPreferen from '../../../assets/images/iconPorfoliRescue/RescueAvatarPorfilio.svg'
import {handelProfileIcon} from '../../../helper/FuntionesHelpers'
import startIcons from '../../../assets/images/start-icons.svg'
import {BottonsIconosPerfile} from '../../newDasborad/CardsProduct/CardsProductComponents'
import {Stack, Typography, styled} from '@mui/material'

import iconsUSD from '../../../assets/images/USD-symbol.svg'
import iconsCPL from '../../../assets/images/icons-cpl.svg'

const HeadChips = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  height: '22.9px',
  //width: '100%', //"84.46px",
})

const MotivacionesGenerarl = styled(Stack)({
  backgroundColor: 'rgba(231, 243, 255, 1)',
  borderRadius: '14px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2.5px 8px',
  boxSizing: 'border-box',
  height: '22px',
  margin: '0px',
  width: '42px',
})
const HmcText = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '10px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

const Start = styled(Stack)({
  backgroundColor: 'rgba(90, 196, 177, 1)',
  borderRadius: '17px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 7px',
  boxSizing: 'border-box',
  margin: '0px 0px 0px 8px',
  height: '22px',
  width: '36px',
})

const StartIcons = styled('img')({
  height: '16px',
  width: '16px',
  margin: '0px',
})

/** USD an CLP */

const CurrencyInvestment = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '2px 0px',
  boxSizing: 'border-box',
})
const CurrencyInvestmentContent = styled(Stack)({
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '2px 4px',
  boxSizing: 'border-box',
  margin: '0px',
  gap: '4px',
})
const IconInvesment = styled('img')({
  height: '18px',
  width: '18px',
  margin: '0px',
})
const InversionesEnPesos = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(231, 243, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '119.49999332427979%',
  textTransform: 'none',
  margin: '0px 0px 0px 3px',
})

export const AvatarInvertedPortfolio = ({
  ProfileCards = 'Moderado',
  intereses = 'Retorno Absoluto',
  motivation = 'Hacer crecer mi plata',
  typeCurrency = 'USD',
}) => {
  return (
    <>
      <ComponentRescateCont>
        <ContentAvatarRescue flexDirection={{md: 'row', xs: 'column'}}>
          <RescueAvatarIcon>
            <RescueIconsPorfolio>
              <IconosPerfiles src={handelProfileIcon(ProfileCards)} />
              <RescueAvatarPorfilio src={iconAvatarPreferen} />
            </RescueIconsPorfolio>
          </RescueAvatarIcon>
          <RescueAvatarDescript
            alignItems={{md: 'flex-start', xs: 'center'}}
            gap={1}
          >
            <RescueAvatarTitle
              textAlign={{md: 'left', xs: 'center'}}
              mt={{md: '0px', xs: '16px'}}
            >
              Titulo portafolio actual
            </RescueAvatarTitle>
            <RescueAvatarChips
              gap={1}
              flexWrap={'wrap'}
              alignItems={{md: 'flex-start', ms: 'center'}}
              justifyContent={{md: 'flex-start', xs: 'center'}}
            >
              <MotivacionesGenerarl>
                <HmcText>HMC</HmcText>
              </MotivacionesGenerarl>
            </RescueAvatarChips>
            <RescueMunt>
              <RescueQuotas>
                <CurrencyInvestment>
                  <CurrencyInvestmentContent>
                    <IconInvesment
                      src={typeCurrency === 'USD' ? iconsUSD : iconsCPL}
                    />
                    <InversionesEnPesos>{`Inversión en ${typeCurrency}`}</InversionesEnPesos>
                  </CurrencyInvestmentContent>
                </CurrencyInvestment>
              </RescueQuotas>
            </RescueMunt>
          </RescueAvatarDescript>
        </ContentAvatarRescue>
      </ComponentRescateCont>
    </>
  )
}
