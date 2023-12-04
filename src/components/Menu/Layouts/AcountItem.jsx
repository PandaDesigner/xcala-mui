import { Avatar, IconButton, Stack, Typography, styled } from '@mui/material';
import logoutIcons from '../../../assets/images/log-out.svg';
import avatarMen from '../../../assets/images/avatar-men-01.png';

const AccountContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 8px',
  boxSizing: 'border-box'
  //height: '40px'
});
/*const AvatarLabelGroup = styled(AvatarLabelGroup)({
  margin: '0px'
});*/
const Icon = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  width: '40px',
  height: '40px',
  margin: '0px'
});
const ButtonAcount = styled(IconButton)({
  width: '40px',
  height: '40px',
  margin: '0px',
  padding: '0px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const TextSection = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box'
});
const Text = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '20px',
  textTransform: 'none',
  margin: '0px'
});
const SupportingText = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(242, 244, 247, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '20px',
  textTransform: 'none',
  margin: '0px'
});

export const AcountItem = () => {
  return (
    <AccountContainer>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Avatar alt="Oliver Prada" src={avatarMen} />
        <TextSection>
          <Text>Oliver Prada</Text>
          <SupportingText>oliver@xcala.com</SupportingText>
        </TextSection>
      </Stack>
      <Icon>
        <ButtonAcount>
          <img src={logoutIcons} alt="icons" />
        </ButtonAcount>
      </Icon>
    </AccountContainer>
  );
};
