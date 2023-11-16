import {Button, Stack, Typography, styled} from '@mui/material'

const BodyNotification = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignContent: 'space-between',
  padding: '0px',
  boxSizing: 'border-box',
  // width: '100%',
  height: '100%',
})

const ContentTextBody = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignContent: 'space-between',
  boxSizing: 'border-box',
  height: '100%',
  //width: '100%',
  margin: '0px',
})

const TextTitleDestacado = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(16, 24, 32, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: 'clamp(1,8rem, 0.058rem + 4.0712vw, 2rem);',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '111.00000143051147%',
  textTransform: 'none',
  alignSelf: 'stretch',
  margin: '0px',
})
const DescriptionText = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(100, 116, 139, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  alignSelf: 'stretch',
  margin: '16px 0px 0px 0px',
})

const SetTowBotton = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '16px 0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  gap: '16px',
  flexWrap: 'wrap',
})

const ButtonNotification = styled(Button)({
  backgroundColor: 'rgba(68, 73, 216, 1)',
  boxShadow:
    '0px 1.2875816822052002px 2.5751633644104004px rgba(16, 24, 40, 0.05)',
  border: '1.2875816822052002px solid rgba(68, 73, 216, 1)',
  boxSizing: 'border-box',
  borderRadius: '10.300653457641602px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '18px 26px',
  overflow: 'hidden',
  width: {xs: '100%', sm: ''},
  height: '58px',
  '&:hover': {
    backgroundColor: '#1E22AA',
  },
})

const TextBtn = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: 'clamp(0.85rem, 0.0344rem + 3.0534vw, 1.1rem)',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '26px',
  textTransform: 'none',
  margin: '0px',
})

const ButtonSecundary = styled(Button)({
  backgroundColor: 'rgba(249, 245, 255, 1)',
  color: 'rgba(105, 65, 198, 1)',
  boxShadow:
    '0px 1.2875816822052002px 2.5751633644104004px rgba(16, 24, 40, 0.05)',
  border: '1.2875816822052002px solid rgba(249, 245, 255, 1)',
  boxSizing: 'border-box',
  borderRadius: '10.300653457641602px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '18px 26px',
  overflow: 'hidden',
  height: '58px',
  '&:hover': {
    backgroundColor: 'rgba(68, 73, 216, 0.6)',
    color: '#fff',
  },
})
const TextBtnSecundary = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: 'clamp(0.85rem, 0.0344rem + 3.0534vw, 1.1rem)',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '26px',
  textTransform: 'none',
  margin: '0px',
})

export const TextBodyNotification = ({
  handlerClickCloses,
  title,
  textContent,
  btn1,
  btn2,
}) => {
  return (
    <BodyNotification>
      <ContentTextBody>
        <TextTitleDestacado>{title}</TextTitleDestacado>
        <DescriptionText>{textContent}</DescriptionText>
      </ContentTextBody>
      <SetTowBotton>
        {btn2.url && (
          <ButtonSecundary
            onClick={() => handlerClickCloses()}
            sx={{width: {xs: '100%', md: 'auto'}}}
          >
            <TextBtnSecundary>{btn2.text}</TextBtnSecundary>
          </ButtonSecundary>
        )}
        <ButtonNotification sx={{width: {xs: '100%', md: 'auto'}}}>
          <TextBtn>{btn1.text}</TextBtn>
        </ButtonNotification>
      </SetTowBotton>
    </BodyNotification>
  )
}
