import { Stack, Typography, styled } from "@mui/material";
import startIcons from "../../../assets/images/start-icons.svg";

export const HeadCards = styled(Stack)({
	backgroundColor: "rgba(30, 34, 170, 1)",
	position: "relative",
	isolation: "isolate",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	padding: "16px 32px",
	boxSizing: "border-box",
	flex: "1",
	margin: "0px",
	height: "120px",
	width: "100%",
	//maxWidth: "406px",
});
export const HeadChips = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	padding: "0px",
	boxSizing: "border-box",
	margin: "0px",
	height: "22.9px",
	width: "100%", //"84.46px",
});

export const MotivacionesGenerarl = styled(Stack)({
	backgroundColor: "rgba(231, 243, 255, 1)",
	borderRadius: "14px",
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	padding: "2.5px 8px",
	boxSizing: "border-box",
	height: "22px",
	margin: "0px",
	width: "42px",
});
export const HmcText = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(30, 34, 170, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "600",
	fontSize: "10px",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
	margin: "0px",
});

export const Start = styled(Stack)({
	backgroundColor: "rgba(90, 196, 177, 1)",
	borderRadius: "17px",
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	padding: "0px 7px",
	boxSizing: "border-box",
	margin: "0px 0px 0px 8px",
	height: "22px",
	width: "36px",
});

export const StartIcons = styled("img")({
	height: "16px",
	width: "16px",
	margin: "0px",
});
export const HeadTitel = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(231, 243, 255, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "600",
	//fontSize: "26px",
	letterSpacing: "0px",
	textDecoration: "none",
	lineHeight: "119.49999332427979%",
	textTransform: "none",
	alignSelf: "stretch",
	margin: "8px 0px 0px 0px",
});