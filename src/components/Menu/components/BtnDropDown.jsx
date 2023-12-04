import { Button, Collapse, Stack, Typography, styled } from "@mui/material";
import IconsProducts from "../../../assets/images/IconsProducts.svg";
import { useState } from "react";
//import { setOptions } from "react-chartjs-2/dist/utils";

const BtnDropContainer = styled(Stack)({
  display: "flex",
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  padding: "0px",
  boxSizing: "border-box",
  //height: "140px",
  width: "100%"
});

const BtnItem = styled(Button)({
  //backgroundColor: "rgba(30, 34, 170, 1)",
  display: "flex",
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "10px 20px",
  boxSizing: "border-box",
  height: "44px",
  width: "100%",
  margin: "0px",
  "&:hover": {
    background: "#1E22AA"
  }
});

const IconAndText = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0px",
  boxSizing: "border-box",
  flex: "1",
  margin: "0px",
  //height: "28px",
  width: "100%"
});
const TextIcons = styled(Typography)({
  textAlign: "left",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(255, 255, 255, 1)",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "16px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "28px",
  textTransform: "none",
  width: "100%"
});

const Internal = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "flex-end",
  padding: "0px",
  boxSizing: "border-box",
  width: "100%",
  margin: "8px 0px 0px 0px"
  //height: '88px',
});

const IonsCart = styled("img")({
  height: "20px",
  width: "20px",
  margin: "0px"
});

const ItemListButton = styled(Button)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "2px 8px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  margin: "0px",
  width: "90%",
  textTransform: "none",
  color: "white",
  "&:hover": {
    background: "#4449D8"
  }
});
const BodyItems = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  boxSizing: "border-box",
  alignSelf: "stretch",
  margin: "0px",
  //height: "48px",
  width: "100%"
});

const Notification = styled(Stack)({
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  boxSizing: "border-box",
  margin: "0px 0px 0px 8px",
  height: "18px",
  width: "23px"
});
const Content = styled(Stack)({
  borderRadius: "4px",
  position: "relative",
  isolation: "isolate",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 8px",
  boxSizing: "border-box",
  height: "18px",
  margin: "0px",
  width: "23px"
});
const Label = styled(Typography)({
  textAlign: "left",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "white",
  fontStyle: "normal",
  fontFamily: "Poppins",
  fontWeight: "600",
  fontSize: "12px",
  letterSpacing: "0px",
  textDecoration: "none",
  lineHeight: "16px",
  textTransform: "none",
  margin: "0px"
});

const IconMenu = styled("div")({
  height: "6px",
  width: "6px",
  margin: "0px",
  background: "white",
  borderRadius: "50%"
});


export const BtnDropDown = () => {
    const [opens, setOpens] = useState(false)
    const handlerOpens = () => setOpens(!opens)
  return (
    <BtnDropContainer>
      <BtnItem onClick={handlerOpens}>
        <IconAndText gap={1}>
          <IonsCart src={IconsProducts} />
          <TextIcons>Productos</TextIcons>
        </IconAndText>
        <Notification>
            <Content backgroundColor={"#5AC4B1"}>
                <Label>4</Label>
            </Content>
        </Notification>
      </BtnItem>
      <Collapse
        appear={opens}
        in={opens}
        timeout={500}
        sx={{
          width: "100%",
        }}
      >
        <Internal>
          <ItemListButton>
            <BodyItems>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "end",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <IconMenu />
                <Typography sx={{ fontSize: "14px" }}>Portfolios</Typography>
              </Stack>
              <Notification>
                <Content backgroundColor={"#5AC4B1"}>
                  <Label>2</Label>
                </Content>
              </Notification>
            </BodyItems>
          </ItemListButton>
          <ItemListButton>
            <BodyItems>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <IconMenu />
                <Typography sx={{ fontSize: "14px" }}>Fondo</Typography>
              </Stack>
              <Notification>
                <Content backgroundColor={"#5AC4B1"}>
                  <Label>2</Label>
                </Content>
              </Notification>
            </BodyItems>
          </ItemListButton>
        </Internal>
      </Collapse>
    </BtnDropContainer>
  );
};
