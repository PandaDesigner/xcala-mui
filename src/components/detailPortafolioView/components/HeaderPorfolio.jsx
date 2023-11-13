import {Box, Button, Stack, Typography, styled} from '@mui/material'
import iconsPortafolioAgresovo from '../../../assets/images/perfiles/ProfilePorfolio/portafolio-perfil-agresivo.svg'
import iconsPortafolioConservador from '../../../assets/images/perfiles/ProfilePorfolio/portafolio-perfil-conservador.svg'
import iconsPortafolioModerado from '../../../assets/images/perfiles/ProfilePorfolio/portafolio-perfil-moderado.svg'
import {HeadContainerCardsPorfolio} from '../../newDasborad/CardsPorfolio/HeadContainerCardsPorfolio'
import iconInfo from '../../../assets/images/perfiles/ProfilePorfolio/icon/info.svg'
import {handelPerfil} from '../handler'
import {
  AreaButtons,
  BackgroundColor,
  BottonsIconosPerfile,
  ButtonsInvestment,
  ContentApp,
  CreateDatePorfolio,
  IconInfo,
  RentabilidadUltimo,
  RetornoEsperado,
  SectionButtons,
} from '../../detailPortafolioView'

//*variables js
const perfilArray = [
  iconsPortafolioAgresovo,
  iconsPortafolioConservador,
  iconsPortafolioModerado,
]

//? Component

//? exportar Component
export const HeaderPorfolio = ({
  fundName,
  fundPerfile,
  typePeyment = 'usd',
  version = {md: 'start', xs: 'center'},
  textAlination = {md: 'left', xs: 'center'},
}) => {
  return (
    <>
      <BackgroundColor>
        <ContentApp
          direction={{md: 'row', xs: 'column'}}
          justifyContent='space-around'
          padding={'40px 0'}
          //paddingX={{md: 4, xs: 2}}
        >
          <Stack
            direction={{md: 'row', xs: 'center'}}
            alignItems={{md: 'center', xs: 'center'}}
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
              version={version}
              textAlination={textAlination}
            />
          </Stack>
          <Stack direction={'column'} paddingBottom={{md: 0, xs: 8}}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={{md: 'end', xs: 'center'}}
              marginTop={{md: '68px', xs: '8px'}}
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
        <SectionButtons>
          <Stack
            width='100%'
            maxWidth='1380px'
            justifyContent={'center'}
            margin={{md: '0px -100px 0px -100px', xs: '0px 0px 0px 0px'}}
            alignItems={{md: 'flex-end', xs: 'center'}}
          >
            <AreaButtons
              display={{md: 'flex', xs: 'none'}}
              direction={{md: 'row', xs: 'column'}}
            >
              <ButtonsInvestment
                variant='outlined'
                color='primary'
                fontWeight='bold'
              >
                Invertir
              </ButtonsInvestment>
              <ButtonsInvestment
                variant='contained'
                color='primary'
                disableElevation
              >
                Simular
              </ButtonsInvestment>
            </AreaButtons>
          </Stack>
        </SectionButtons>
      </BackgroundColor>
    </>
  )
}
