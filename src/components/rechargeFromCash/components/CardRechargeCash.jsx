import {
  SectionDescription,
  SectionInfo,
  SectionPrintView,
  SectionRechargeCash,
  SoloFaltaQueRealices,
  TextValue,
  TitleProperty
} from './Section.Components';

const InfoCards = ({ Title, value }) => {
  return (
    <SectionInfo>
      <TitleProperty>{Title}</TitleProperty>
      <TextValue>{value}</TextValue>
    </SectionInfo>
  );
};
export const CardRechargeCash = ({ valueRecharge = '10.000' }) => {
  return (
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
    </SectionRechargeCash>
  );
};
