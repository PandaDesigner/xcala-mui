import {
  Button,
  Checkbox,
  Divider,
  Stack,
  Typography,
  styled
} from '@mui/material';

import iconWarnin from '../../../assets/images/Symbol/warning_amber.svg';

const RescauSolutionSectio = styled(Stack)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 8px rgba(61, 64, 75, 0.15)',
  borderRadius: '16px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '34px',
  boxSizing: 'border-box',
  marginTop: '-75px'
});
const RsContent = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  flex: '1',
  margin: '0px',
  //height: '415px',
  width: '100%'
});
const RescueDescription = styled(Stack)({
  background:
    'linear-gradient(-4.239999999999995deg, rgba(241, 244, 249, 1) -1.5822148034538395%, rgba(241, 244, 249, 0) 135.1821148520685%)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '20px 30px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  gap: '1rem',
  width: '100%'
});
const InstallmentNumbers = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  //height: '27px',
  width: '100%'
});

const RescuePeriod = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  //margin: '21px 0px 0px 0px',
  //height: '27px',
  width: '100%'
});

const TitleItemCards = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: { md: '18px', xs: '12px' },
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});
const ResItemCards = styled(Typography)({
  textAlign: 'end',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: { md: '18px', xs: '12px' },
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});

const WarningMessage = styled(Stack)({
  //border: '1px solid rgba(209, 45, 53, 1)',
  backgroundColor: '#FFF1F1',
  boxShadow: '0px 0px 18px rgba(61, 64, 75, 0.06)',
  boxSizing: 'border-box',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '24px 32px',
  alignSelf: 'stretch',
  margin: '26px 0px 0px 0px',
  gap: '0.51rem',
  //height: '112px',
  width: '100%'
});
const WarninTitle = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  //height: '24px',
  width: '100%'
});
const WarningAmber = styled('img')({
  width: '24px',
  height: '24px',
  margin: '0px'
});

const ImportanText = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(209, 45, 53, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  width: '115.5px',
  margin: '0px 0px 0px 16px'
});

const DescriptionText = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '14px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  alignSelf: 'stretch'
  //margin: '16px 0px 0px 0px',
});
const Divaiders = styled(Divider)({
  border: '1px dashed rgba(191, 191, 191, 0.6)',
  alignSelf: 'stretch',
  margin: '26px 0px 0px 0px',
  width: '100%'
});

export const TermsAndConditions = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '22px 0px 0px 0px',
  //height: '24px',
  width: '100%'
});

export const ContentCheckBox = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
  //height: '24px',
  width: '100%'
});

export const CheckBoxOutlineBlank = styled(Checkbox)({
  width: '24px',
  height: '24px',
  margin: '0px'
});
export const TextDeclaration = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(128, 128, 128, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});
export const DeclarationSpan = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(73, 161, 151, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});

const ButtonGroup = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '26px 0px 0px 0px',
  //height: '60px',
  width: { md: '60%', xs: '80%' },
  gap: '1rem',
  alignSelf: 'stretch'
});
const NotNowButton = styled(Button)({
  backgroundColor: '#F4F4FB',
  width: '302px',
  height: '60px',
  margin: '0px'
});
const ConfirmationButton = styled(Button)({
  width: '302px',
  height: '60px'
  //margin: '0px 0px 0px 21px',
});

const ButtonBack = styled(Button)({
  height: '39px',
  width: '128px'
});

const TextBtnBack = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(30, 34, 170, 1)',
  fontStyle: 'normal',
  fontFamily: 'Museo',
  fontWeight: '300',
  fontSize: '16px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px'
});

export const CardsResultRescue = () => {
  return (
    <Stack sx={{ margin: '0px auto', width: '90%', maxWidth: '1380px' }}>
      <RescauSolutionSectio>
        <RsContent>
          <RescueDescription>
            <InstallmentNumbers>
              <TitleItemCards>Monto solicitado</TitleItemCards>
              <ResItemCards>$ 3.750.000</ResItemCards>
            </InstallmentNumbers>
            <RescuePeriod>
              <TitleItemCards>Fecha de solicitud</TitleItemCards>
              <ResItemCards>26/12/23</ResItemCards>
            </RescuePeriod>
            <RescuePeriod>
              <TitleItemCards>Plazo de rescate:</TitleItemCards>
              <ResItemCards>Según reglamento fondos</ResItemCards>
            </RescuePeriod>
          </RescueDescription>
          <WarningMessage>
            <WarninTitle>
              <WarningAmber src={iconWarnin} />
              <ImportanText>Importante:</ImportanText>
            </WarninTitle>
            <ul style={{ margin: '0px', padding: '0px 18px' }}>
              <li>
                <DescriptionText>
                  El plazo de rescate comienza a correr el día hábil siguiente
                  si tu solicitud fue realizada antes de las 4:00 PM y el día
                  hábil subsiguiente si la realizas luego de esa hora.
                </DescriptionText>
              </li>
              <li>
                <DescriptionText>
                  Este depósito es en Dólares, por lo que el monto solicitado
                  será transformado a pesos el día del depósito de acuerdo al
                  tipo de cambio correspondiente a la fecha.
                </DescriptionText>
              </li>
              <li>
                <DescriptionText>
                  El monto final a ser rescatado puede variar según el valor
                  cuota de los fondos que componen el portafolio al momento de
                  procesar el rescate.
                </DescriptionText>
              </li>
            </ul>
          </WarningMessage>
          <Divaiders variant="inset" />
          <TermsAndConditions>
            <ContentCheckBox gap={1}>
              <CheckBoxOutlineBlank />
              <TextDeclaration>
                Declaro entender los{' '}
                <DeclarationSpan variant="span" component={'span'}>
                  términos y condiciones del rescate
                </DeclarationSpan>{' '}
                que estoy a punto de solicitar
              </TextDeclaration>
            </ContentCheckBox>
          </TermsAndConditions>
          <ButtonGroup flexDirection={{ md: 'row', sx: 'column' }}>
            <NotNowButton>No por ahora</NotNowButton>
            <ConfirmationButton variant="contained" disableElevation>
              Confirmar
            </ConfirmationButton>
          </ButtonGroup>
        </RsContent>
      </RescauSolutionSectio>
      <Stack
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5rem',
          marginBottom: '2rem'
        }}
      >
        <ButtonBack>
          <TextBtnBack> Volver Atras </TextBtnBack>
        </ButtonBack>
      </Stack>
    </Stack>
  );
};
