import { Button, Stack, IconButton, styled, Typography } from "@mui/material";

import ImagenNotification from "../../assets/images/perfiles/iconNotification.svg";

const SectionNoAmount1 = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0px",
  boxSizing: "border-box",
  height: "100%",
  minHeight: "125px",
  width: "100%",
  minWidth: "233px",
});
const ContentAmount = styled(Stack)({
  backgroundColor: "rgba(255, 255, 255, 1)",
  borderRadius: "4px",
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  boxSizing: "border-box",
  flex: "0 1 auto",
  //width: '233px',
  margin: "0px",
  //height: "88px",
  border: "1px",
  borderBlockColor: "#0000",
});
const IconsNotification = styled("img")({
  height: "25px",
  width: "25px",
  backgroundColor: "#3B82f6",
  borderRadius: "100%",
  padding: "5px",
});

const TitelAmount = styled(Typography)({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "400",
  letterSpacing: "-0.04px",
  textDecoration: "none",
  textTransform: "none",
  alignSelf: "stretch",
  margin: "0px",
});
const BtnCargar = styled(Button)({
  backgroundColor: "rgba(30, 34, 170, 1)",
  color: "#fff",
  borderRadius: "4px",
  position: "relative",
  isolation: "isolate",
  padding: "12px 8px",
  boxSizing: "border-box",
  height: "31px",
  width: "120px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#4449D8",
  },
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "10px",
  letterSpacing: "0px",
  textDecoration: "none",
  textTransform: "none",
  margin: "0px",
});
const BtnActualiza = styled(Button)({
  textDecoration: "underline",
  textTransform: "none",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "12px",
  letterSpacing: "0px",
});

export const SectionNoAmount = () => {
  return (
    <SectionNoAmount1 gap={2}>
      <ContentAmount gap={1}>
        <IconsNotification src={ImagenNotification} alt="Notification" />
        <TitelAmount fontSize={"clamp(12px, 2vw, 16px)"}>
          ¡Carga tu caja para invertir!
        </TitelAmount>
        <BtnCargar> Carga aquí tu caja</BtnCargar>
      </ContentAmount>
      {/* <BtnActualiza disabled variant='text'>Actualizar Caja</BtnActualiza> */}
    </SectionNoAmount1>
  );
};
