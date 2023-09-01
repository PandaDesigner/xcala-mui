import { Box, Stack,  styled } from "@mui/material";
import backgroundFondo from "../../assets/images/Background-fondo.png";

export const SectionHeader = styled(Stack)({
	flexDirection: { lg: "row", md: "column" },
	width: "100%",
	height: "100%",
	position: "relative",
	justifyContent: { md: "flex-start", xs: "center" },
	alignItems: "flex-start",
	padding: "0px",
	boxSizing: "border-box",
	//maxWidth: "1398px",
	isolation: "isolate",
});

export const CarrselContent = styled(Box)({
	maxWidth: { xs: "100%", md: "100%", lg: "1080px" },
	height: "100%",
	width: "78%",
	margin: "0px",
	backgroundColor: "red",
	borderRadius: "8px",
});

export const SectionCaja = styled(Stack)({
	width: { md: "100%", sm: "100%", lg: "100%" },
	margin: "0px 0px 0px 0px",
	borderRadius: "8px",
	backgroundColor: "rgba(255, 255, 255, 1)",
	boxShadow: "0px 0px 8px rgba(61, 64, 75, 0.15)",
	overflow: "hidden",
});

export const BackgroundDashboard = styled(Stack)({
	position: "absolute",
	background: `url(${backgroundFondo})`,
	backgroundOrigin: "top",
	backgroundSize: "cover",
	backgroundPosition: "top",
	backgroundRepeat: "no-repeat",
	top: "0",
	left: "0",
	right: "0",
	width: "100%",
	objectFit: "cover",
	alignItems: "center",
	gap: "16px",
	margin: "0px",
	padding: "0px",
});
