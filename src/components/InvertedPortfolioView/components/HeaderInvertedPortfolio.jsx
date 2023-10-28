import {Button, Stack, styled} from '@mui/material'
import {BackgroundColor, ContentApp} from '../../detailPortafolioView'
import {AvatarInvertedPortfolio} from './AvatarInvertedPortfolio'
import {ProfilValueInverted} from './ProfilValueInverted'

const BtnGroupContainer = styled(Stack)({
  position: 'absolute',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  width: '100%',
  //maxWidth: '1380px',
  justifyContent: 'center',
  alignItems: 'flex-end',
  //padding: '0px 94px',
  boxSizing: 'border-box',
  bottom: '30px',
  right: '0',
})
const BtnGroup = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 8px rgba(61, 64, 75, 0.15)',
  borderRadius: '8px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '16px',
  boxSizing: 'border-box',
  width: '100%',

  margin: '0px',
  height: '82px',
})
const BtnContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
})
const ButtonInvesment = styled(Button)({
  flex: '1',
  height: '50px',
  margin: '0px',
})
const ButtonIvesmentMore = styled(Button)({
  flex: '1',
  height: '50px',
})

export const HeaderInvertedPortfolio = ({rescueValue = '10,5'}) => {
  return (
    <>
      <BackgroundColor paddingBottom={{xs: '2rem', md: ''}}>
        <ContentApp
          justifyContent={
            rescueValue > 0 ? {md: 'space-between', xs: 'center'} : 'center'
          }
          padding={'40px 0'}
          sx={{flexDirection: {md: 'row', xs: 'column'}}}
        >
          <AvatarInvertedPortfolio />
          <ProfilValueInverted rescueValue={rescueValue} />
        </ContentApp>
      </BackgroundColor>
      <BtnGroupContainer zIndex={10}>
        <Stack
          width={{md: '90%', xs: '90%'}}
          maxWidth={{md: '1380px', xs: '100%'}}
          marginX={'auto'}
          justifyContent={'center'}
          alignItems={{md: 'flex-end', xs: 'center'}}
          flex={'1 1 auto'}
        >
          <BtnGroup maxWidth={{md: '650px', xs: '80%'}}>
            <BtnContainer flexDirection={{md: 'row', xs: 'column'}} gap={2}>
              <ButtonInvesment variant='outlined'>
                Rescatar Inversión
              </ButtonInvesment>
              <ButtonIvesmentMore variant='contained'>
                Invertir Más
              </ButtonIvesmentMore>
            </BtnContainer>
          </BtnGroup>
        </Stack>
      </BtnGroupContainer>
    </>
  )
}
