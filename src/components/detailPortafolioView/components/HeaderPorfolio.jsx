import {Box, Stack, Typography, styled} from '@mui/material'

import iconsPortafolioAgresovo from '../../../assets/images/perfiles/ProfilePorfolio/portafolio-perfil-agresivo.svg'
import iconsPortafolioConservador from '../../../assets/images/perfiles/ProfilePorfolio/portafolio-perfil-conservador.svg'
import iconsPortafolioModerado from '../../../assets/images/perfiles/ProfilePorfolio/portafolio-perfil-moderado.svg'
import {HeadContainerCardsPorfolio} from '../../newDasborad/CardsPorfolio/HeadContainerCardsPorfolio'
import iconInfo from '../../../assets/images/perfiles/ProfilePorfolio/icon/info.svg'
import {handelPerfil} from '../handler'

//*variables js
const perfilArray = [
  iconsPortafolioAgresovo,
  iconsPortafolioConservador,
  iconsPortafolioModerado,
]

//!css variables
const $minHeigth = '407px'

//? Component
const BackgroundColor = styled(Stack)({
  backgroundColor: 'rgba(30, 34, 170, 1)',
  borderRadius: '0px 0px 16px 16px',
  position: 'absolute',
  left: '0px',
  top: '0px',
  alignSelf: 'stretch',
  width: '100%',
  minWidth: '90%',
  minHeight: $minHeigth,
  padding: '0px',
  margin: '0px',
})

const ContentApp = styled(Stack)({
  position: 'relative',
  flexDirection: 'row',
  margin: '0 auto',
  width: '100%',
  maxWidth: '1380px',
  height: '100%',
  minHeight: $minHeigth,
  alignItems: 'center',
  justifyContent: 'space-around',
})

const BottonsIconosPerfile = styled(Stack)({
  width: '54px',
  height: '54px',
  position: 'absolute',
  left: '65px',
  bottom: '25px',
})

const IconInfo = styled('img')({
  height: 'auto',
  width: '24px',
  margin: '0px 0px 0px 14px',
})

const RentabilidadUltimo = styled(Typography)({
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(208, 238, 233, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '98%',
  textTransform: 'none',
  margin: '0px',
})
const RetornoEsperado = styled(Typography)({
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

const CreateDatePorfolio = styled(Typography)({
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

//? exportar Component
export const HeaderPorfolio = ({
  fundName,
  fundPerfile,
  typePeyment = 'usd',
  version,
  textAlination = {md: 'left', xs: 'center'},
}) => {
  return (
    <BackgroundColor>
      <ContentApp
        direction={{md: 'row', xs: 'column'}}
        //paddingX={{md: 4, xs: 2}}
      >
        <Stack
          direction={{md: 'row', xs: 'center'}}
          alignItems={{md: 'start', xs: 'center'}}
        >
          <Box height={'100%'} position={'relative'}>
            <img
              src={perfilArray[0]}
              alt='perfil-portafolio'
              style={{
                height: '143px',
                padding: `16px 0px 16px 0px `,
              }}
            />
            <BottonsIconosPerfile height={'100%'}>
              <img
                src={handelPerfil('agresivo')}
                style={{width: '80px', height: '80px', objectFit: 'cover'}}
              />
            </BottonsIconosPerfile>
          </Box>
          <HeadContainerCardsPorfolio
            fundName={fundName}
            fundPerfile={true}
            typePeyment={typePeyment}
            size={{md: '64px', xs: '48px'}}
            version={{md: 'start', xs: 'center'}}
            textAlination={textAlination}
          />
        </Stack>
        <Stack direction={'column'} paddingBottom={{md: 0, xs: 8}}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={{md: 'end', xs: 'center'}}
          >
            <RentabilidadUltimo
              fontSize={{md: '64px', xs: '40px'}}
            >{`+${'14,18'}%`}</RentabilidadUltimo>
            <IconInfo src={iconInfo} />
          </Stack>
          <RetornoEsperado textAlign={{md: 'end', xs: 'center'}}>
            Rentabilidad Esperada
          </RetornoEsperado>
          <CreateDatePorfolio
            textAlign={{md: 'end', xs: 'center'}}
          >{`Registro ${'24/05/2023'}`}</CreateDatePorfolio>
        </Stack>
      </ContentApp>
    </BackgroundColor>
  )
}
