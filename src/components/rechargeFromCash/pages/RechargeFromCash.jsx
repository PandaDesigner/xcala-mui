import React, { useState } from 'react';
import {
  Box,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import { HeaderFromCash } from '../components/HeaderFromCash';

export const RechargeFromCash = () => {
  const [values, setValues] = useState({
    numberformat: '',
    banco: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <HeaderFromCash />
      <Stack gap={'64px'} marginX={'auto'}>
        <Box
          sx={{
            marginX: 'auto',
            width: '60%',
            maxWidth: '1280px',
            // minWidth: '320px',
            padding: '32px 32px',
            bgcolor: '#fff',
            borderRadius: '16px',
            marginTop: '-80px',
            zIndex: 9,
            //minHeight: '407px',
            boxShadow: '0px 0px 32px rgba(61, 64, 75, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <Typography
            sx={{
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              fontSynthesis: 'none',
              color: 'rgba(0, 0, 0, 0.87)',
              fontStyle: 'inherit',
              fontFamily: 'Museo',
              fontWeight: '500',
              fontSize: 'clamp(1.1rem, 0.375rem + 2vw, 1.5rem)'
            }}
          >
            ¿Cuantos deseas Recargar?
          </Typography>
          <TextField
            fullWidth
            id="deposited-value"
            label="Ingresa el monto"
            variant="standard"
            value={values.numberformat}
            onChange={handleChange}
            name="numberformat"
            //FormHelperTextProps={<FormHelperText>error</FormHelperText>}
          />

          <InputLabel
            sx={{ width: '100%', marginTop: { xs: '16px', md: '64px' } }}
            id="demo-select-small-label"
          >
            Bancos
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={values.banco}
            label="Bancos"
            onChange={handleChange}
            sx={{ width: '100%' }}
            variant="standard"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Banco 1</MenuItem>
            <MenuItem value={20}>Banco 2</MenuItem>
            <MenuItem value={30}>Banco 3</MenuItem>
          </Select>
        </Box>
        <Stack
          sx={{
            marginX: 'auto',
            maxWidth: '40%',
            width: '100%',
            minHeight: '150px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{ padding: '16px', textTransform: 'none' }}
          >
            Recargar caja
          </Button>

          <Button
            variant="text"
            disableElevation
            sx={{ padding: '4px 16px', textTransform: 'none' }}
          >
            volver
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
