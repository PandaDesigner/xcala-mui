import { Box, Button, Link, Stack, Typography, styled } from '@mui/material';
import iconRiskNoDenifed from '../../../assets/images/changePerfilDefination.png';
import DoneIcon from '@mui/icons-material/Done';

const ContainerRiskProfile = styled(Box)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  flex: '1',
  margin: '0px',
  height: '361px',
  width: '100%'
});
const HeaderCardRiskProf = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  //alignSelf: 'stretch',
  margin: '0px',
  width: '100%'
});
const TitleRiskProfile = styled(Typography)({
  //whiteSpace: 'pre-wrap',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  lineHeight: '105%',
  //letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});
const TitleRiskProfileSpan = styled(Typography)({
  //whiteSpace: 'pre-wrap',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '300',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none'
});
export const IconsRiskProfile = styled('img')({
  objectFit: 'cover'
});

const BtnsRiskProfile = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '32px 0px 0px 0px',
  maxWidth: { md: '60%' }
});
const BtnPrimary = styled(Button)({
  //alignSelf: 'stretch',
  padding: '10px 32px',
  //maxHeight: '60px',
  margin: '0px',
  textTransform: 'none'
});
const BtnSecundary = styled(Button)({
  // alignSelf: 'stretch',
  padding: '10px 32px',
  // height: '60px',
  //margin: '32px 0px 0px 0px',
  textTransform: 'none'
});

export const DefiningRiskProfile = () => {
  return (
    <>
      <Stack
        sx={{
          width: '100%',
          boxSizing: 'border-box',
          flexDirection: 'column',
          padding: 'clamp(1rem, -1.8571rem + 12.1905vw, 5rem);',
          bgcolor: '#fff',
          borderRadius: '1rem',
          boxShadow: '0px 0px 1rem 0px rgba(0, 0, 0, 0.1)'
        }}
      >
        <ContainerRiskProfile>
          <HeaderCardRiskProf
            flexDirection={{ xs: 'column-reverse', md: 'row', gap: '0.6rem' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                md: '80%',
                gap: { xs: '0.6rem', md: '0.3rem' }
              }}
            >
              <TitleRiskProfile
                fontSize={'clamp(1rem, 0.4643rem + 2.2857vw, 1.75rem)'}
              >
                En este proceso aprenderás a definir cual es el perfil de riesgo
                que se adecua a tus necesidades.
              </TitleRiskProfile>
              <TitleRiskProfileSpan
                fontSize={'clamp(0.75rem, 0.4821rem + 1.1429vw, 1.125rem)'}
              >
                Puedes volver a realizar el cuestionario en cualquier momento
                dentro de Xcala.
              </TitleRiskProfileSpan>
            </Box>
            <Box maxWidth={{ md: '20%' }}>
              <IconsRiskProfile
                sx={{
                  width: 'clamp(5.1875rem, 1.4375rem + 16vw, 10.4375rem);'
                }}
                src={iconRiskNoDenifed}
              />
            </Box>
          </HeaderCardRiskProf>
          <BtnsRiskProfile sx={{ gap: { xs: '2rem', md: '4rem' } }}>
            <BtnPrimary
              sx={{
                fontSize: 'clamp(0.9rem, 0.3214rem + 0.7619vw, 1.45rem)',
                borderRadius: '8px'
              }}
              startIcon={<DoneIcon />}
              variant="contained"
              disableElevation
            >
              Definir mi perfil de Riesgo
            </BtnPrimary>
            <BtnSecundary
              variant={'text'}
              component={Link}
              sx={{
                fontSize: 'clamp(0.7rem, 0.3214rem + 0.7619vw, 1.05rem)'
              }}
            >
              ya se cual es mi perfil de riesgo
            </BtnSecundary>
          </BtnsRiskProfile>
        </ContainerRiskProfile>
      </Stack>
    </>
  );
};
