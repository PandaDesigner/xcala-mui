import { Stack, styled, Button, Box, IconButton } from '@mui/material';

import spinerIcons from '../assets/images/spiner.svg';

const BtnContainer = styled(Stack)({
  marginTop: '400px',
  width: '100%',
  flexDirection: 'column',
  paddingTop: '90px',
  alignItems: 'center'
});

const BtnGroup = styled(Stack)({
  flexDirection: 'row',
  width: '100%',
  maxWidth: '100%',
  justifyContent: 'center'
});

const Spiner = styled('img')({
  height: '45px',
  width: '45px'
});

export const BtnGroupFix = () => {
  return (
    <Stack
      position={{ xs: 'Fixed', md: 'none' }}
      bottom={'31px'}
      left={'0'}
      right={'0'}
    >
      <BtnContainer display={{ xs: 'flex', md: 'none' }} maxHeight={'70px'}>
        <BtnGroup gap={0} backgroundColor={'#1E22AA'} maxHeight={'70px'}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: '100%',
              boxShadow: 'none',
              textTransform: 'none',
              paddingY: '16px'
            }}
            disableElevation
            disableRipple
          >
            Recargar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: '100%', boxShadow: 'none', textTransform: 'none' }}
            disableElevation
            disableRipple
          >
            {' '}
            Retirar
          </Button>
        </BtnGroup>

        <Box
          sx={{
            '& > button': { m: 0 },
            marginTop: '-95px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '100%',
            '& > button:hover': { backgroundColor: '#e2e2e2' }
          }}
          zIndex={2}
        >
          <IconButton
            color="primary"
            size="large"
            sx={{
              width: '100%',
              padding: '32px 32px',
              width: '32px',
              height: '32px',
              backgroundColor: '#fff',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Spiner src={spinerIcons} loading="lazy" alt="spiner" />
          </IconButton>
        </Box>
      </BtnContainer>
    </Stack>
  );
};
