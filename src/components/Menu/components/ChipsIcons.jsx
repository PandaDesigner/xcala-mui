import {Button, Stack, Typography, styled} from '@mui/material'
import IconDashboard from '../../../assets/images/IconMenuDashboard.svg'

const Child = styled(Button)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'ease-in-out',
  transitionDuration: '0.6s',
  '&:hover': {
    backgroundColor: '#1E22AA',
  },
  '&:active': {
    backgroundColor: '#1E22AA',
  },
})
const BodyItems = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px 20px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  height: '48px',
  width: '100%',
})
const IconsText = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  flex: '1',
  margin: '0px',
  height: '28px',
  width: '153px',
})
const IconMenu = styled('img')({
  height: '20px',
  width: '20px',
  margin: '0px',
})
const TaitelMenu = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '28px',
  textTransform: 'none',
  flex: '1',
  margin: '0px 0px 0px 8px',
})
const Notification = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0px 0px 0px 8px',
  height: '18px',
  width: '23px',
})
const Content = styled(Stack)({
  borderRadius: '4px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 8px',
  boxSizing: 'border-box',
  height: '18px',
  margin: '0px',
  width: '23px',
})
const Label = styled(Stack)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '12px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '16px',
  textTransform: 'none',
  margin: '0px',
})

export const ChipsIcons = ({
  colorLabel = 'rgba(90, 196, 177, 0.81)',
  Icons = IconDashboard,
  titleLabel = 'Dashboard',
  labelNotification = 5,
}) => {
  return (
    <Child>
      <BodyItems>
        <IconsText>
          <IconMenu src={Icons} />
          <TaitelMenu>{titleLabel}</TaitelMenu>
        </IconsText>
        <Notification>
          <Content backgroundColor={colorLabel}>
            <Label>{labelNotification}</Label>
          </Content>
        </Notification>
      </BodyItems>
    </Child>
  )
}
