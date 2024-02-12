import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

export const LoginsSection = () => {
  return (
    <Stack
      sx={{
        background: '#fff',
        boxSizing: 'border-box',
        //width: '80%',
        borderRadius: '24px',
        padding: '32px',
        position: 'relative',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.15)',
        minHeight: '300px',
        zIndex: 4,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      width={{ xs: '90%', sm: '80%', md: '80%' }}
      marginTop="clamp(8.375rem, 14.3617rem + -21.2766vw, 1rem)"
      maxWidth={{ xs: '90%', md: '400px' }}
      minWidth={{ xs: '40%' }}
    >
      <Stack
        sx={{
          width: '100%',
          background: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',

          gap: 3
          //padding: '8px'
        }}
        minWidth={'80%'}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%'
          }}
        >
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label={
              <Typography fontSize="clamp(0.75rem, 0.5505rem + 0.8511vw, 1.125rem)">
                Email
              </Typography>
            }
            placeholder="correo@correo.com"
            variant="standard"
            fullWidth
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%'
          }}
        >
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="standard-textarea"
            label={
              <Typography fontSize="clamp(0.75rem, 0.5505rem + 0.8511vw, 1.125rem)">
                Password
              </Typography>
            }
            multiline
            variant="standard"
            fullWidth
          />
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={{
            padding: '12px 32px'
          }}
          fullWidth
        >
          Ingresar
        </Button>

        <Button
          variant="text"
          disableElevation
          sx={{
            marginTop: '16px',
            textTransform: 'none'
          }}
        >
          Olvidé mi contraseña
        </Button>
      </Stack>
    </Stack>
  );
};
