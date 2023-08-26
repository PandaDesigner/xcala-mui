import { Box, Button, Divider, Stack, Typography, styled } from "@mui/material";
import { InterestLabel } from "./InterestLabel";
import { MotivationLabel } from "./MotivationLabel";
import { TypeOfCurrency } from "./TypeOfCurrency";

const BodyContainers = styled(Stack)({
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
	maxHeight: "380.07px",
});

const BottonsIconosPerfile = styled("img")({
	width: "81px",
	height: "81px",
	margin: "0px",
});

const TitelCards = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	width: "100%",
	maxWidth: "374px",
	justifyContent: "flex-start",
	alignItems: "center",
	padding: "0px",
	boxSizing: "border-box",
	height: "81px",
});
const CardsInfo = styled(Stack)({
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

const ReantabilityTitel = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(0, 0, 0, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "400",
	//fontSize: "20px",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
	alignSelf: "stretch",
	margin: "0px",
});
const RentabilityValue = styled(Typography)({
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

const ExpectedTime = styled(Typography)({
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

const Line = styled(Divider)({
	border: "1px solid rgba(255, 255, 255, 1)",
	//alignSelf: "stretch",
	//height: "0px",
	margin: "10px 0px 0px 0px",
	//width: "374px",
});

export const BodyCardsContainer = () => {
	return (
		<BodyContainers gap={2}>
			<TitelCards>
				<BottonsIconosPerfile />
				<CardsInfo>
					<ReantabilityTitel fontSize={"clamp(0.96rem, 2vw, 1.2rem)"}>
						Rentabilidad Esperada
					</ReantabilityTitel>
					<RentabilityValue>$0.00</RentabilityValue>
					<ExpectedTime>(últimos 12 meses)</ExpectedTime>
				</CardsInfo>
			</TitelCards>
			<Divider variant="fullWidth" width="100%" />
			<Stack flexDirection={"row"} gap={1} flexWrap={"wrap"}>
				<InterestLabel />
				<MotivationLabel />
			</Stack>
			<TypeOfCurrency />
			<Box sx={{ mt: 3, ml: 1, mb: 1 }}>
				<Button>Add to cart</Button>
			</Box>
		</BodyContainers>
	);
};
