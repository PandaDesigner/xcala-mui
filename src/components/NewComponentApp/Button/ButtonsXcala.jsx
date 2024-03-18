import { Button, Stack, Typography, styled } from '@mui/material';

const BtnPrimary = styled(Button)({
  borderRadius: '8px',
  padding: '8px 32px',
  backgroundColor: '#1E22AA',
  color: '#fff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#151774',
  },
});

const IconsDone = styled('img')({
  width: '24px',
  height: '24px',
  margin: '0px',
});

export const ButtonsPrimary = ({
  name,
  sx,
  onClick,
  src,
  fontSize = '16px',
  disabled = false,
  props,
}) => {
  return (
    <Button
      disableElevation
      variant='contained'
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...sx,
        borderRadius: '8px',
        padding: '8px 32px',
        //backgroundColor: '#1E22AA',
        //color: '#fff',
        textTransform: 'none',
        // '&:hover': {
        //   backgroundColor: '#151774',
        // },
      }}
      {...props}
    >
      <Stack
        flexDirection={'row'}
        gap={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {src && <IconsDone src={src} />}
        <Typography fontSize={fontSize}>{name}</Typography>
      </Stack>
    </Button>
  );
};
