import {Stack, Typography, styled} from '@mui/material'
import {NotificationsHeaders} from './Layout/NotificationsHeaders'
import {TextBodyNotification} from './Layout/textBodyNotification'
import {useState} from 'react'

const SizeSmButtonsOneStat = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  border: '1.2875816822052002px solid rgba(30, 34, 170, 1)',
  boxSizing: 'border-box',
  borderRadius: '12px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  width: '90%',
  maxWidth: '800px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  overflow: 'hidden',
  minHeight: '358.2px',
  margin: '0px 32px',
})

const ContentOverlay = styled(Stack)({
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '999',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
})

export const NotificationsXcala = ({
  activation = true,
  msg = {
    titleNotification: 'Notificaciones Tittle Success',
    iconsNotification: 'error',
    title: 'Text Title destacado evento',
    textContent:
      'Tenemos un rescate en proceso, por lo que por ahora no podremos procesar uno nuevo desde este mismo portafolio. En cuanto tu rescate esté procesado, podrás realizar uno nuevo',
    btn1: {url: '#', text: 'Texto para modificar Aceptar'},
    btn2: {url: '#', text: 'Cancelar'},
  },
}) => {
  const [close, setClose] = useState(activation)
  const handlerClickCloses = () => setClose(!close)
  const {titleNotification, iconsNotification, title, textContent, btn1, btn2} =
    msg

  return (
    <ContentOverlay sx={{display: close ? 'flex' : 'none'}}>
      <SizeSmButtonsOneStat>
        <NotificationsHeaders
          titleNotification={titleNotification}
          iconsNotification={iconsNotification}
          handlerClickCloses={handlerClickCloses}
        />
        <Stack height={'100%'} padding={'1.30rem 1.30rem'}>
          <TextBodyNotification
            title={title}
            textContent={textContent}
            handlerClickCloses={handlerClickCloses}
            btn1={btn1}
            btn2={btn2}
          />
        </Stack>
      </SizeSmButtonsOneStat>
    </ContentOverlay>
  )
}
