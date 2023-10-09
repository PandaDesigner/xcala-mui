import {Stack, Typography, styled} from '@mui/material'
import iconPorfolio from '../../../../assets/images/perfiles/ProfilePorfolio/picture_as_pdf.svg'

const ContentCardsItem = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px 16px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  flex: '1',
  margin: '0px',
  height: '88px',
  width: '100%',
})
const ItemCardsDescription = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  height: '24px',
  width: '100%',
})

const IconsItem = styled('img')({
  height: 'auto',
  width: '24px',
  margin: '0px',
})
const TitelItem = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  flex: '1',
  margin: '0px 0px 0px 10px',
})

export const CardsItemDescription = ({titelText}) => {
  return (
    <ContentCardsItem>
      <ItemCardsDescription>
        <IconsItem src={iconPorfolio} alt='icon' />
        <TitelItem>{titelText}</TitelItem>
      </ItemCardsDescription>
    </ContentCardsItem>
  )
}
