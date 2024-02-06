import { Box, Stack, styled } from '@mui/material';
import { ImgComponent } from '../components/ImgComponent';

const BackgroundImg = styled(Box)({
  boxSizing: 'border-box',
  height: '100%',
  width: '40%',
  background: '#1E22AA',
  position: 'absolute',
  top: '0',
  left: '0',
  borderRadius: '0px 24px 24px 0px'
});
const ImgYellow = styled(ImgComponent)({
  boxSizing: 'border-box'
});

export const RegisterLayout = ({ children }) => {
  return (
    <>
      <Stack
        sx={{
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
          position: 'absolute',
          overflow: 'hidden',
          top: '0',
          left: '0'
        }}
      >
        {children}
        <BackgroundImg />
        <ImgYellow />
      </Stack>
    </>
  );
};
