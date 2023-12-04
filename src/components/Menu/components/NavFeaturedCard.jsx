import { Box, Button, CircularProgress, Stack, Typography, styled } from "@mui/material";

const NavFeaturedContainer = styled(Stack)({
  backgroundColor: "rgba(231, 243, 255, 0.25)",
  backdropFilter: "blur(50px)",
  WebkitBackdropFilter: "blur(50px)",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "8px",
  display: "flex",
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "20px 16px",
  boxSizing: "border-box",
  //height: "240px"
});
const ProgressCircle = styled(Stack)({
  height: "64px",
  width: "64px",
  margin: "0px"
});
const TextAndSupportingTex = styled(Stack)({
  display: "flex",
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  margin: "16px 0px 0px 0px",
  //height: "84px",
  width: "100%"
});
const Text = styled(Typography)({
  textAlign: "left",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(255, 255, 255, 1)",
  fontStyle: "bold",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "0px",
  textDecoration: "none",
  //lineHeight: "20px",
  textTransform: "none",
  alignSelf: "stretch",
  margin: "0px"
});
const SupportingText = styled(Typography)({
  textAlign: "left",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(234, 236, 240, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "300",
  fontSize: "14px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "20px",
  textTransform: "none",
  alignSelf: "stretch",
  margin: "4px 0px 0px 0px"
});
const ActionsSection = styled(Stack)({
  display: "flex",
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: {sx:'column' ,md:'space-between'},
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  //margin: "16px 0px 0px 0px",
  //height: "20px",
  width: "100%"
});
const ButtonAction = styled(Button)({
  fontSize: "12px",
  letterSpacing: "0px",
  textTransform:'none',
  color: '#fff',
  margin: "0px",
  padding:'2px 4px',
  '&:hover':{
    color: '#1E22AA'
  }
});
const ButtonActions = styled(Button)({
  margin: "0px 0px 0px 12px"
});

function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'flex', alignItems:'center', justifyContent:'center', width:'64px',height:'64px' }}>
        <CircularProgress variant="determinate" thickness={5} size={'64px'} {...props} 
        sx={{zIndex:999,
        //position:'absolute',
        color:'#5AC4B1',

        }} />
        <CircularProgress size={'64px'} thickness={5}	 variant="determinate" value={100} sx={{position:'absolute'}} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="#5AC4B1" sx={{
            fontSize: '16px',
          }}>
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }


export const NavFeaturedCard = () => {
  return (
    <NavFeaturedContainer gap={1}>
      <Box>
        <ProgressCircle>
        <CircularProgressWithLabel
            value={80}
            //color="success"
            sx={{
                color: '#5AC4B1',
                '&.MuiTypography-root': {
                color: '#5AC4B1',
                },
            }}
            />
        </ProgressCircle> 
      </Box>
      <TextAndSupportingTex>
        <Text>Completa tu Onboarding</Text>
        <SupportingText>
        Descubre tu perfil de riesgo y comienza a generar tu libertad economica
        </SupportingText>
      </TextAndSupportingTex>
      <ActionsSection justifyContent={'space-between'}>
        <ButtonAction variant='text' >
          Tus intereses
        </ButtonAction>
        <ButtonAction variant='text' >
        Perfil de riesgo
        </ButtonAction>

      </ActionsSection>

    </NavFeaturedContainer>
  );
};
