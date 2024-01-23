import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import { TitlePagesRecharge } from './ChangeBtn.components';

export const BodyFromCash = ({ handleChange, values, handleViewChange }) => {
  return (
    <Stack gap={'64px'} marginX={'auto'}>
      <Box
        sx={{
          marginX: 'auto',
          width: '60%',
          maxWidth: '1280px',
          padding: '32px 32px',
          bgcolor: '#fff',
          borderRadius: '16px',
          marginTop: '-80px',
          zIndex: 9,
          boxShadow: '0px 0px 32px rgba(61, 64, 75, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <TitlePagesRecharge
          sx={{
            fontSize: 'clamp(1.1rem, 0.375rem + 2vw, 1.5rem)'
          }}
        >
          ¿Cuantos deseas Recargar?
        </TitlePagesRecharge>
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
          sx={{ padding: '16px', textTransform: 'none' }}
          onClick={handleViewChange}
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
  );
};
