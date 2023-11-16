import {Button, Stack, Typography, styled} from '@mui/material'
import {IconsSuecces} from '../Components/icons/IconsSuecces'
import {IconsCloses} from '../Components/icons/IconsCloses'
import {IconsWarning} from '../Components/icons/IconsWarning'
import {IconsError} from '../Components/icons/IconsError'

const HeaderNotification = styled(Stack)({
  backgroundColor: 'rgba(30, 34, 170, 1)',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  maxHeight: '79px',
  minHeight: '79px',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
})

const ContentHeader = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  flex: '1',
  margin: '0px',
  width: '100%',
  padding: '0 1.30rem',
})

const TextFieldNotification = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: 'clamp(1rem, 0.0344rem + 3.0534vw, 1.5rem);',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

const TitletNotificacion = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '1rem',
})

const CloseButton = styled(Button)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px',
  height: '27.04px',
  width: '27.04px',
})

const handlerIcons = (textIcons) => {
  return textIcons === 'success' ? (
    <IconsSuecces />
  ) : textIcons === 'warning' ? (
    <IconsWarning />
  ) : (
    textIcons === 'error' && <IconsError />
  )
}

export const NotificationsHeaders = ({
  iconsNotification = 'success',
  titleNotification = 'Notificaciones Tittle Success',
  handlerClickCloses,
}) => {
  return (
    <HeaderNotification>
      <ContentHeader>
        <TitletNotificacion flex={'1 1 auto'}>
          {handlerIcons(iconsNotification)}
          <TextFieldNotification>{titleNotification}</TextFieldNotification>
        </TitletNotificacion>
        <CloseButton
          sx={{display: {md: 'flex', sm: 'none'}}}
          onClick={handlerClickCloses}
        >
          <IconsCloses />
        </CloseButton>
      </ContentHeader>
    </HeaderNotification>
  )
}
