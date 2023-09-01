import { Stack, styled, Typography } from "@mui/material";

export const CardsProduct = styled(Stack)({
	backgroundColor: "rgba(255, 255, 255, 1)",
	borderRadius: "16px",
	position: "relative",
	isolation: "isolate",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	padding: "0px",
	boxSizing: "border-box",
	overflow: "hidden",
	width: "100%",
	height: "100%",
	//maxWidth: "456px",
	minWidth: "316px",
	//cursor: "pointer",
	transitionDelay: "-2000",
	transitionDuration: "3000",
	boxShadow: "0px 0px 12px rgba(80, 80, 80, 0.15)",
	"&:hover": {
		boxShadow: "0px 0px 20px rgba(80, 80, 80, 0.25)",
	},
});

export const BodyContainers = styled(Stack)({
	backgroundColor: "rgba(255, 255, 255, 1)",
	position: "relative",
	isolation: "isolate",
	flexDirection: "column",
	width: "100%",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	padding: "8px 16px 16px 16px",
	boxSizing: "border-box",
	height: "100%",
});

export const BottonsIconosPerfile = styled("img")({
	width: "81px",
	height: "81px",
	margin: "0px",
});

export const TitelCards = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	width: "100%",
	//maxWidth: "374px",
	justifyContent: "flex-start",
	alignItems: "center",
	padding: "0px",
	boxSizing: "border-box",
	height: "81px",
});
export const CardsInfo = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "column",
	justifyContent: "flex-end",
	alignItems: "flex-start",
	padding: "0px",
	boxSizing: "border-box",
	flex: "1",
	margin: "0px 0px 0px 13px",
	height: "72px",
	width: "280px",
});

export const ReantabilityTitel = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(0, 0, 0, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "400",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
	alignSelf: "stretch",
	margin: "0px",
});
export const RentabilityValue = styled(Typography)({
	whiteSpace: "pre-wrap",
	color: "rgba(90, 196, 177, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "600",
	fontSize: "22px",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
});

export const ExpectedTime = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(166, 166, 166, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "400",
	fontSize: "10px",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
	margin: "0px",
});