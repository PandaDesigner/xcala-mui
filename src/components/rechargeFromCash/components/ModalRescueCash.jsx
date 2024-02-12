import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
  FormControl,
  FormLabel,
  FormHelperText,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useState } from 'react';
import {
  IconsWarnning,
  MsnAlert,
  ParrafoAlert,
  TextImportante,
  TitleAlert,
  WarningAmber
} from './Section.Components';
import { Label } from '@mui/icons-material';

const ContainerModal = styled(Stack)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10.699999809265137px)',
  WebkitBackdropFilter: 'blur(10.699999809265137px)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9
});
const MuntRescueModal = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '16px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',

  justifyContent: 'center',
  alignItems: 'center',
  padding: '34px',
  boxSizing: 'border-box'
});

/*
!SECTION
Title
*/

const ModalContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  flex: '1',
  margin: '0px',
  width: '100%'
});
const TitleContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  width: '100%'
});
const NameFundContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  //height: '75px',
  width: '100%'
});
const FundText = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '18px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});
const FundTitle = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});
const MuntCashContiner = styled(Stack)({
  background:
    'linear-gradient(-125.87deg, rgba(68, 73, 216, 1) -4.395577123060462%, rgba(25, 28, 86, 1) 211.3228692253947%)',
  borderRadius: '8px',
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '16px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '4px 0px 0px 0px',
  width: '100%'
});
const MuntContainer = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  height: '17px',
  width: '100%'
});
const MuntContext = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(223, 224, 243, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});
const ValueMunt = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(223, 224, 243, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});
const TypeChange = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: '#D9D9D9',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '5px 0px 0px 0px'
});

/*
!SECTION 
Info Alert
*/

const SubtitleModal = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  alignSelf: 'stretch',
  margin: '8px 0px 0px 0px'
});
const BankCantainer = styled('div')({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '100%',
  margin: '8px 0px 16px 0px'
});

const BtnContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '8px 0px 0px 0px',
  width: '80%'
});

export const ModalRescueCash = ({
  sectionTitle = false,
  typeFund = 'Fondo',
  titleFund = 'Xcala Balanceado Global',
  valorCuota = 0
}) => {
  const [values, setValues] = useState({
    cuenta: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <ContainerModal>
      <MuntRescueModal
        sx={{
          width: {
            xs: 'clamp(80%, -23.0357rem + 160.9524vw, 50%)',
            sm: '50%'
          }
        }}
      >
        <ModalContainer>
          {sectionTitle && (
            <TitleContainer>
              <NameFundContainer>
                <FundText>{typeFund}</FundText>
                <FundTitle
                  sx={{
                    fontSize: 'clamp(1.1rem, 0.0313rem + 1.5vw, 2rem)'
                  }}
                >
                  {titleFund}
                </FundTitle>
              </NameFundContainer>
            </TitleContainer>
          )}
          <MuntCashContiner>
            <MuntContainer>
              <MuntContext
                sx={{ fontSize: 'clamp(0.85rem, 0.0313rem + 1.5vw, 1.25rem)' }}
              >
                Monto a rescatar
              </MuntContext>
              <ValueMunt
                sx={{ fontSize: 'clamp(0.85rem, 0.0313rem + 1.5vw, 1.75rem)' }}
              >
                $0.00
              </ValueMunt>
            </MuntContainer>
            {valorCuota > 0 && (
              <TypeChange
                sx={{
                  fontSize: 'clamp(0.625rem, 0.5357rem + 0.381vw, 0.75rem)'
                }}
              >
                {`*Tipo de cambio al 30/10/21 = $${valorCuota}`}
              </TypeChange>
            )}
          </MuntCashContiner>
          <SubtitleModal
            sx={{
              fontSize: 'clamp(1.1rem, 0.0313rem + 1.5vw, 2rem)'
            }}
          >
            ¿Dónde hacemos el depósito?
          </SubtitleModal>
          <BankCantainer>
            <InputLabel
              sx={{
                width: '100%',
                marginTop: { xs: '8px', md: '12px' },
                fontSize: 'clamp(0.625rem, 0.5357rem + 0.381vw, 0.75rem)'
              }}
              id="demo-select-small-label"
            >
              Cuenta
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={values.banco}
              label="cuenta"
              onChange={handleChange}
              sx={{
                width: '100%',
                fontSize: 'clamp(0.825rem, 0.5357rem + 0.381vw, 2.75rem)'
              }}
              variant="standard"
            >
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Banco de Chile - N° 1890567891</MenuItem>
              <MenuItem value={20}>Banco 2</MenuItem>
              <MenuItem value={30}>Banco 3</MenuItem>
            </Select>
          </BankCantainer>
          <MsnAlert>
            <TitleAlert>
              <WarningAmber>
                <IconsWarnning />
              </WarningAmber>
              <TextImportante>Importante</TextImportante>
            </TitleAlert>
            <ParrafoAlert
              sx={{
                fontSize: 'clamp(0.75rem, 0.5673rem + 0.7692vw, 1rem)',
                width: '90%',
                margin: '0 auto'
              }}
            >
              El plazo de rescate comienza a correr el día hábil siguiente si tu
              solcitud fue realizada antes de las 4:00 PM y el día hábil
              subsiguiente si la realizas luego de esa hora.
            </ParrafoAlert>
          </MsnAlert>
          <Stack
            justifyContent={'center'}
            alignItems={'start'}
            width={'100%'}
            marginTop={{ xs: '16px', md: '8px' }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography
                  sx={{
                    fontSize: 'clamp(0.75rem, 0.5673rem + 0.7692vw, 1rem)'
                  }}
                >
                  Declaro entender los{' '}
                  <Typography
                    component={'span'}
                    color={'#49A197'}
                    fontWeight={500}
                    sx={{
                      fontSize: 'clamp(0.75rem, 0.5673rem + 0.7692vw, 1rem)'
                    }}
                  >
                    términos y condiciones del rescate
                  </Typography>{' '}
                  que estoy a punto de solicitar
                </Typography>
              }
            />
          </Stack>
          <BtnContainer
            flexDirection={{ ms: 'column', md: 'row' }}
            //alignItems={{ ms: 'center', md: 'flex-end' }}
            gap={2}
          >
            <Button
              sx={{
                width: { md: '45%' },
                padding: '16px',
                background: '#F4F4FB',
                color: 'white',
                textTransform: 'none'
              }}
              disableElevation
            >
              No por ahora
            </Button>
            <Button
              sx={{
                width: { md: '55%' },
                padding: '16px',
                textTransform: 'none'
              }}
              variant="contained"
              disableElevation
              disabled
            >
              Confirmar solicitud de rescate
            </Button>
          </BtnContainer>
        </ModalContainer>
      </MuntRescueModal>
    </ContainerModal>
  );
};
