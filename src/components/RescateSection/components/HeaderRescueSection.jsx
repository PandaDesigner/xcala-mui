import {Stack, Typography} from '@mui/material'
import {BackgroundColor, ContentApp} from '../../detailPortafolioView'
import AvatarSection from '../../AvatarSection'
import {AvatarRescue} from './AvatarRescue'
import {PorfolioValueSection} from './PorfolioValueSection'

export const HeaderRescueSection = () => {
  return (
    <>
      <BackgroundColor>
        <ContentApp
          BackgroundColor='red'
          justifyContent={{md: 'space-between', xs: 'center'}}
          padding={'40px 0'}
          sx={{flexDirection: {md: 'row', xs: 'column'}}}
        >
          <AvatarRescue />
          <PorfolioValueSection />
        </ContentApp>
      </BackgroundColor>
    </>
  )
}
