import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled
} from '@mui/material';
import { EditIcons } from './EditIcons';
import { useState } from 'react';

const ComponentsSection = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  flexDirection: 'column',
  borderRadius: '8px',
  flex: '2 1 560px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '18px',
  boxSizing: 'border-box',
  width: { xs: '100%', md: '70%' },
  maxWidth: { md: '600px' },
  margin: '0px',
  boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.081)',
  boxSizing: 'border-box'
  //height: '571.47px'
});
const SectionFromTitle = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});
const TitleSectionFrom = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '20px',
  letterSpacing: '0.1px',
  textDecoration: 'none',
  lineHeight: '22px',
  textTransform: 'none',
  margin: '0px'
});

const BtnEdit = styled(Button)({
  textTransform: 'none',
  width: '50px'
});

export const DivisionSectionFrom = ({ textTitle, ...resProps }) => {
  return (
    <SectionFromTitle>
      <TitleSectionFrom>{textTitle}</TitleSectionFrom>
      <BtnEdit {...resProps} startIcon={<EditIcons />}>
        Edit
      </BtnEdit>
    </SectionFromTitle>
  );
};

const InputSelectFiled = ({ nameFiled, selet, funtion }) => {
  return (
    <FormControl
      variant="filled"
      sx={{
        width: { sm: '48%' },
        flex: { sm: '1 1 308px', xs: '1 1 100%' },
        boxSizing: 'border-box',
        bgcolor: 'rgba(255, 255, 255, 1)',
        'label[data-shrink=false]+.MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input':
          {
            background: '#fff'
          }
      }}
    >
      <InputLabel id="demo-simple-select-filled-label">{nameFiled}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={selet}
        onChange={funtion}
      >
        <MenuItem value="">
          <em>Selecionar</em>
        </MenuItem>
        <MenuItem value={'masculino'}>Masculino</MenuItem>
        <MenuItem value={'femenino'}>Femenino</MenuItem>
      </Select>
    </FormControl>
  );
};

const ImputFiled = ({ nameFiled = 'text', ...resProps }) => {
  return (
    <TextField
      label={nameFiled}
      variant="filled"
      sx={{
        width: { sm: '48%' },
        flex: { sm: '1 1 308px', xs: '1 1 100%' },
        boxSizing: 'border-box',
        bgcolor: 'rgba(255, 255, 255, 1)',
        'label[data-shrink=false]+.MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input':
          {
            background: '#fff'
          }
      }}
      {...resProps}
    />
  );
};

export const FormDatas = () => {
  const [genero, setGenero] = useState(null);

  const handleChange = (event) => {
    setGenero(event.target.value);
  };

  return (
    <ComponentsSection>
      <Stack
        sx={{ width: '100%', flexDirection: 'column', boxSizing: 'border-box' }}
      >
        <DivisionSectionFrom textTitle="Datos Personales" />
        <Stack
          flexDirection="row"
          gap={4}
          flexWrap={'wrap'}
          sx={{ paddingBottom: '32px' }}
        >
          <InputSelectFiled
            nameFiled="Género"
            selet={genero}
            funtion={handleChange}
          />
          <ImputFiled nameFiled="Nacionalidad" />
          <ImputFiled
            nameFiled="Ingresos mensuales"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
          <ImputFiled nameFiled="Origen de fondos" />
          <ImputFiled nameFiled="Estado Civil" />
          <ImputFiled nameFiled="Profesión" />
        </Stack>
        <DivisionSectionFrom textTitle="Datos de Contacto" />
        <Stack
          flexDirection="row"
          gap={4}
          flexWrap={'wrap'}
          sx={{ paddingBottom: '32px' }}
        >
          <ImputFiled nameFiled="email" />
          <ImputFiled nameFiled="Telefono" />
          <ImputFiled nameFiled="Calle y número" />
          <ImputFiled nameFiled="Casa/Depto" />
          <ImputFiled nameFiled="Comuna" />
          <ImputFiled nameFiled="Región" />
        </Stack>
      </Stack>
    </ComponentsSection>
  );
};
