import {Stack, Typography, styled} from '@mui/material'
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
} from './Rescue.component'
import iconAgresivePorfolio from '../../../assets/images/iconPorfoliRescue/Iconos-Perfiles-agresivo.svg'
import iconAvatarPreferen from '../../../assets/images/iconPorfoliRescue/RescueAvatarPorfilio.svg'
import {handelProfileIcon} from '../../../helper/FuntionesHelpers'

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

import startIcons from '../../../assets/images/start-icons.svg'
import {MotivationLabel} from '../../newDasborad/CardsProduct/MotivationLabel'
import {BottonsIconosPerfile} from '../../newDasborad/CardsProduct/CardsProductComponents'
import {InterestLabel} from '../../newDasborad/CardsProduct/InterestLabel'

export const AvatarRescue = ({
  ProfileCards = 'Moderado',
  intereses = 'Retorno Absoluto',
  motivation = 'Hacer crecer mi plata',
}) => {
  return (
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
            Xcala Portafolio one
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
            <InterestLabel intereses={intereses} />
            <MotivationLabel motivation={motivation} />
          </RescueAvatarChips>
          <RescueMunt>
            <RescueQuotas>
              TIENES{' '}
              <RescueQuotasSpan variant='span'>$ 7.500.000</RescueQuotasSpan>
            </RescueQuotas>
          </RescueMunt>
        </RescueAvatarDescript>
      </ContentAvatarRescue>
    </ComponentRescateCont>
  )
}
