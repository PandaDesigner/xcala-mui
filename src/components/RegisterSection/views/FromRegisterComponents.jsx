import {
  FormControl,
  InputLabel,
  NativeSelect,
  Stack,
  TextField,
  Typography,
  Checkbox,
  Button,
  useMediaQuery
} from '@mui/material';
import {
  ContentCheckBox,
  DeclarationSpan,
  TermsAndConditions,
  TextDeclaration
} from '../../RescateSection/components/CardsResultRescue';

const LabelTitle = ({ title }) => {
  return (
    <Typography fontSize="clamp(0.75rem, 0.5505rem + 0.8511vw, 1.125rem)">
      {title}
    </Typography>
  );
};

export const FromRegisterComponents = () => {
  const matches = useMediaQuery('(max-width:900px)');
  const spacingsGap = matches ? '1rem' : '4rem';
  const maxWidthContainer = '1200px';

  return (
    <Stack
      sx={{
        background: '#fff',
        boxSizing: 'border-box',
        width: '100%',
        borderRadius: '24px',
        padding: '24px',
        position: 'relative',
        boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.15)',
        minHeight: '300px',
        zIndex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
      width={{ xs: '90%', sm: '80%', md: '80%' }}
      marginTop="clamp(8.375rem, 14.3617rem + -21.2766vw, 1rem)"
      maxWidth={maxWidthContainer}
      //minWidth={{ xs: '90%' }}
    >
      <form
        style={{
          width: '100%',
          maxWidth: maxWidthContainer,
          display: 'flex',
          flexDirection: 'column',
          gap: spacingsGap,
          padding: '1.2rem 1.2rem',
          boxSizing: 'border-box'
        }}
      >
        <Stack
          sx={{ width: '100%', flexDirection: { md: 'row' }, gap: spacingsGap }}
        >
          <TextField
            id="form-name"
            label={<LabelTitle title="Nombre" />}
            placeholder="Francisco"
            multiline
            fullWidth
            variant="standard"
          />
          <TextField
            id="form-lastNameModer"
            label={<LabelTitle title="Apellido Materno" />}
            placeholder="Prada"
            multiline
            fullWidth
            variant="standard"
          />
        </Stack>
        <Stack
          sx={{ width: '100%', flexDirection: { md: 'row' }, gap: spacingsGap }}
        >
          <TextField
            id="form-LastNameFather"
            label={<LabelTitle title="Apellido Paterno" />}
            placeholder="Quevedo"
            multiline
            fullWidth
            variant="standard"
          />
          <TextField
            id="form-rut"
            label={<LabelTitle title="RUT" />}
            placeholder="N° 184565212"
            multiline
            fullWidth
            variant="standard"
          />
        </Stack>
        <Stack
          sx={{
            width: '100%',
            flexDirection: { md: 'row' },
            gap: spacingsGap,
            marginTop: { md: '0rem', lg: '0.5rem' }
          }}
        >
          <TextField
            id="form-email"
            label={<LabelTitle title="Email" />}
            placeholder="correo@correo.com"
            multiline
            fullWidth
            variant="standard"
          />
          <Stack
            sx={{
              flexDirection: 'row',
              width: '100%',
              gap: 1
            }}
          >
            <FormControl
              sx={{
                width: { sm: '20%', md: '40%' },
                minWidth: '84px',
                maxWidth: '86px'
              }}
            >
              <InputLabel variant="standard" htmlFor="form-phone-code">
                Código
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'codePhone',
                  id: 'form-phone-code'
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>+569</option>
              </NativeSelect>
            </FormControl>
            <TextField
              id="form-phone"
              label={<LabelTitle title="Celular" />}
              placeholder="562332513"
              multiline
              fullWidth
              variant="standard"
            />
          </Stack>
        </Stack>
        <Stack>
          <TermsAndConditions>
            <ContentCheckBox
              sx={{
                alignItems: { md: 'center' },
                justifyContent: { md: 'center' }
              }}
              gap={1}
            >
              <Checkbox />
              <TextDeclaration fontSize="clamp(0.75rem, 0.617rem + 0.5674vw, 1rem)">
                Acepto los{' '}
                <DeclarationSpan variant="span" component={'span'}>
                  términos y condiciones del servicio
                </DeclarationSpan>{' '}
                que estoy a punto de solicitar
              </TextDeclaration>
            </ContentCheckBox>
          </TermsAndConditions>
          <Button
            variant="contained"
            sx={{
              padding: '10px 16px',
              width: '70%',
              margin: '20px auto',
              textTransform: 'none'
            }}
            disableElevation
            disabled
          >
            Conrtinuar
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
