import {Stack, Typography, styled} from '@mui/material'
import {CardsItemDescription} from './CardsItemDescription'
import {handelBgColorFund} from '../../handler'

const CardsContentDocumentacion = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 8px rgba(61, 64, 75, 0.15)',
  borderRadius: '16px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  minWidth: '310px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  height: '188px',
})

const HeaderComponent = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '8px 16px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  height: '80px',
  width: '100%',
  flexDirection: 'column',
})
const TitleCardsDocumentation = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '105%',
  textTransform: 'none',
})
const SubTitleCardsDocumentation = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '105%',
  textTransform: 'none',
})

const BodyComponent = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  //gap: '2px',
  //padding: '0px 0px 16px 0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  height: '104px',
  margin: '8px 0px 0px 0px',
  width: '100%',
})

const dataTest = [
  {url: '#', titelText: 'Folleto informativo'},
  {url: '#', titelText: 'Brochure'},
  {url: '#', titelText: 'Reglamento interno'},
]

export const CardsDocumentation = ({
  dataItemDescription = dataTest,
  colorFund = 'rgba(199, 227, 248, 0.5)',
}) => {
  return (
    <CardsContentDocumentacion
      width={{xs: '100%', sm: '100%', md: '48%', lg: '31.5%', xl: '32.5%'}}
    >
      <HeaderComponent
        flexDirection={'column'}
        gap={0}
        p={2}
        backgroundColor={handelBgColorFund(colorFund)}
      >
        <TitleCardsDocumentation>Rentabilidad Esperada</TitleCardsDocumentation>
        <SubTitleCardsDocumentation>
          Documentación de interés
        </SubTitleCardsDocumentation>
      </HeaderComponent>
      <BodyComponent>
        {dataItemDescription.map((item, index) => (
          <CardsItemDescription
            width={'100%'}
            key={index}
            url={item.url}
            titelText={item.titelText}
          />
        ))}
      </BodyComponent>
    </CardsContentDocumentacion>
  )
}
