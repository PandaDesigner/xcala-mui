import { Button, Stack } from '@mui/material';
import {
  BtnTitle,
  IconsCopy,
  IconsWarnning,
  MsnAlert,
  ParrafoAlert,
  SectionDescription,
  SectionInfo,
  SectionPrintView,
  SectionRechargeCash,
  SoloFaltaQueRealices,
  TextImportante,
  TextValue,
  TitleAlert,
  TitleProperty,
  WarningAmber
} from './Section.Components';

const InfoCards = ({ Title, value }) => {
  return (
    <SectionInfo>
      <TitleProperty
        sx={{ fontSize: 'clamp(0.875rem, 0.6923rem + 0.7692vw, 1.125rem)' }}
      >
        {Title}
      </TitleProperty>
      <TextValue
        sx={{ fontSize: 'clamp(0.875rem, 0.6923rem + 0.7692vw, 1.125rem)' }}
      >
        {value}
      </TextValue>
    </SectionInfo>
  );
};
export const CardRechargeCash = ({ valueRecharge = '10.000' }) => {
  return (
    <Stack paddingBottom={'80px'}>
      <SectionRechargeCash
        sx={{
          padding: { md: '32px', xs: '16px' },
          width: { md: '60%', xs: '90%' }
        }}
      >
        <SectionPrintView>
          <SoloFaltaQueRealices
            sx={{ fontSize: 'clamp(0.75rem, 0.5673rem + 0.7692vw, 1rem)' }}
          >
            {`Sólo Falta que realices la tansferencia de $ ${valueRecharge} a:`}
          </SoloFaltaQueRealices>
        </SectionPrintView>
        <SectionDescription>
          <InfoCards Title={'Nombre:'} value={'Xcala CL SpA.'} />
          <InfoCards Title={'Banco:'} value={'Banco de Bogota'} />
          <InfoCards Title={'Tipo de Cuenta:'} value={'Corriente'} />
          <InfoCards Title={'Cuenta:'} value={'0-0000-0000-0000'} />
          <InfoCards Title={'RUT:'} value={'77.513.567-0'} />
          <InfoCards Title={'Email:'} value={'correo@correo.com'} />
        </SectionDescription>
        <Button
          startIcon={<IconsCopy />}
          sx={{ width: '80%', padding: '16px' }}
        >
          <BtnTitle>Copiar datos bancarios para transferir</BtnTitle>
        </Button>
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
            Una vez validada tu transferencia, veras reflejado tu saldocmo
            disponible en caja en un lapso de 24 horas.
          </ParrafoAlert>
        </MsnAlert>
        <Button sx={{ width: '80%', padding: '16px' }}>
          <BtnTitle>Volver al Inicio</BtnTitle>
        </Button>
      </SectionRechargeCash>
    </Stack>
  );
};
