import {
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  styled
} from "@mui/material";
import { Image } from "@mui/icons-material";
import { LogoXcalaWhite } from "../components/LogoXcalaWhite";
import { AvatarIcons } from "../components/AvatarIcons";
import imagen_avatar from "../../../assets/images/AvatarIcons.png";
import { ChipsIcons } from "../components/ChipsIcons";
import IconsCaja from "../../../assets/images/IconsCaja.svg";
import IconsProducts from "../../../assets/images/IconsProducts.svg";
import IconsTransacciones from "../../../assets/images/IconsTransacciones.svg";
import IconsReferidos from "../../../assets/images/IconsReferidos.svg";
import IconSetting from "../../../assets/images/IconsSettings.svg";

let objMenu = {
  show: "flex",
  width: "300px",
  state: true
};

const handlerStateMenu = (state = false) => {
  objMenu.show = state ? "flex" : "none";
  objMenu.width = state ? "300px" : "0px";
  objMenu.state = state;
};

handlerStateMenu(true);

const MenuConteiner = styled(Drawer)({
  display: objMenu.show,
  maxWidth: objMenu.width,
  flex: "1 1 300px",
  alignItems: "center",
  justifyContent: "center",
  padding: "28px 24px",
  boxSizing: "border-box",
  color: "#FFFFFF",
  fontFamily: "Poppins",
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth:objMenu.width,
    width: objMenu.width,
    padding: "28px 24px",
    background:
      "linear-gradient(-174.87deg, rgba(112, 151, 217, 1) -36.71897846239968%, rgba(30, 34, 170, 1) 103.47570081720376%)",
    zIndex: "999999"
  }
});

const ContainerLayout = styled(Stack)({
  position: "relative",
  width: `calc(100% - ${objMenu.width})`,
  flex: "1 1 auto",
  backgroundColor: "LightSteelBlue",
  transition: "all 0.5s ease-in-out"
});

const ContentNav = styled(Stack)({
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0px",
  boxSizing: "border-box",
  height: "100%",
  minWidth: "100%",
  gap: "16px"
});

const ContentBody = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  width: "100%"
});

const UsersAccount = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  width: "100%",
  gap: "8px"
});

const Avatars = styled("img")({
  height: "90px",
  width: "90px",
  margin: "0px"
});

const ContentUser = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  height: "53px",
  width: "243px"
});

const EmailUser = styled(Typography)({
  textAlign: "left",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(255, 255, 255, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "300",
  fontSize: "10.117438316345215px",
  letterSpacing: "-0.2023487663269043px",
  textDecoration: "none",
  textTransform: "none",
  margin: "0px"
});
const NameUser = styled(Typography)({
  textAlign: "left",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(255, 255, 255, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "15.176156997680664px",
  letterSpacing: "0px",
  textDecoration: "none",
  textTransform: "none",
  margin: "1px 0px 0px 0px"
});
const AcountUser = styled(Typography)({
  textAlign: "right",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(255, 255, 255, 1)",
  fontStyle: "normal",
  fontFamily: "Work Sans",
  fontWeight: "400",
  fontSize: "10.96055793762207px",
  letterSpacing: "-0.2192111587524414px",
  textDecoration: "none",
  textTransform: "none",
  margin: "1px 0px 0px 0px"
});

const ContentActions = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  width: "100%",
  gap: "8px"
});
const ContentTitleSection = styled(Stack)({
  background: "#1E22AA",
  borderRadius: "4px",
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "12px 12px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  margin: "0px",
  width: "100%",
  gap: "8px"
});
const MiInversion = styled(Typography)({
  textAlign: "left",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(231, 243, 255, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "14px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "126%",
  textTransform: "none",
  margin: "0px"
});
const InvertionSections = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  margin: "8px 0px 0px 0px",
  height: "57px",
  width: "100%",
  gap: "8px"
});

const Main = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  padding: "0px",
  boxSizing: "border-box",
  width: "100%",
  margin: "0px",
  height: "100%",
  gap: "4px"
  //backgroundColor: 'rgb(256,256,256,0.08)',
});

const CardContainer = styled(Stack)({
  backgroundColor: "#fff",
  borderRadius: "8px",
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  flex: "1",
  margin: "0px",
  height: "57px",
  width: "117.5px"
});
const CardSaldo = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  width: "117.56px",
  height: "57px",
  margin: "0px"
});

const Footer = styled(Stack)({
  backgroundColor: "rgb(256,256,256,0.08)",
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  margin: "0px",
  height: "393px",
  width: "100%"
});

const IconsSettings = styled("img")({
  width: `24px`,
  height: `24px`,
  margin: `0px`
});

export const LoyoutMenu = ({ children }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        //backgroundColor: 'lavender',
        flexDirection: "row"
      }}
    >
      <MenuConteiner
        variant="persistent"
        // display={ objMenu.show}
        open={objMenu.state}
      >
        <ContentNav>
          <LogoXcalaWhite />
          <UsersAccount display="none">
            <Avatars src={imagen_avatar} loading={true} />
            <ContentUser>
              <EmailUser>susana_prada@xcala.com</EmailUser>
              <NameUser>Susana Raquiel Prada</NameUser>
              <AcountUser>******** 1233</AcountUser>
            </ContentUser>
            <ContentActions>
              <ContentTitleSection>
                <MiInversion>MI Inversiones</MiInversion>
              </ContentTitleSection>
              <InvertionSections>
                <CardContainer />
                <CardContainer />
              </InvertionSections>
            </ContentActions>
          </UsersAccount>
          <ContentBody>
            <Main>
              <ChipsIcons titleLabel="Dashboard" labelNotification={2} />
              <ChipsIcons
                Icons={IconsCaja}
                titleLabel={"Caja"}
                colorLabel="#F472B6"
                labelNotification={10}
              />
              <ChipsIcons
                Icons={IconsProducts}
                titleLabel={"Productos"}
                colorLabel="#F472B6"
                labelNotification={10}
              />
              <ChipsIcons
                Icons={IconsTransacciones}
                titleLabel={"Transacciones"}
                colorLabel="#F472B6"
                labelNotification={10}
              />
              <ChipsIcons
                Icons={IconsReferidos}
                titleLabel={"Referidos"}
                labelNotification={10}
              />
            </Main>
          </ContentBody>
          <Footer>
            <ContentTitleSection>
              <IconsSettings src={IconSetting} />
              <MiInversion>Mi cuenta</MiInversion>
            </ContentTitleSection>
          </Footer>
        </ContentNav>
      </MenuConteiner>

      <ContainerLayout>
        {children}
      </ContainerLayout>
    </Stack>
  );
};
