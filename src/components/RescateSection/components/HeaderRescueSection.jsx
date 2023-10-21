import {Stack, Typography} from '@mui/material'
import {BackgroundColor, ContentApp} from '../../detailPortafolioView'
import AvatarSection from '../../AvatarSection'
import {AvatarRescue} from './AvatarRescue'
import {PorfolioValueSection} from './PorfolioValueSection'

export const HeaderRescueSection = ({rescueValue = 0}) => {
  return (
    <>
      <BackgroundColor>
        <ContentApp
          BackgroundColor='red'
          justifyContent={
            rescueValue > 0 ? {md: 'space-between', xs: 'center'} : 'center'
          }
          padding={'40px 0'}
          sx={{flexDirection: {md: 'row', xs: 'column'}}}
        >
          <AvatarRescue />
          <PorfolioValueSection rescueValue={rescueValue} />
        </ContentApp>
      </BackgroundColor>
    </>
  )
}
