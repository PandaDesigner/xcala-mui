import { Box, Button, Divider, Stack, Typography, styled } from "@mui/material";
import { InterestLabel } from "./InterestLabel";
import { MotivationLabel } from "./MotivationLabel";
import { TypeOfCurrency } from "./TypeOfCurrency";
import { CardsDescription } from "./CardsDescription";
import { CardsButtomGroup } from "./CardsButtomGroup";

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

export const BodyCardsContainer = ({ $typeCurrency, intereses }) => {
	return (
		<BodyContainers gap={2}>
			<Stack gap={1}>
				<TitelCards>
					<BottonsIconosPerfile />
					<CardsInfo>
						<ReantabilityTitel fontSize={"clamp(0.96rem, 2vw, 1.2rem)"}>
							Rentabilidad Esperada
						</ReantabilityTitel>
						<RentabilityValue>{`$${0.0}`}</RentabilityValue>
						<ExpectedTime>(últimos 12 meses)</ExpectedTime>
					</CardsInfo>
				</TitelCards>
				<Divider variant="fullWidth" width="100%" />
				<Stack flexDirection={"row"} gap={1} flexWrap={"wrap"}>
					<InterestLabel intereses={intereses} />
					<MotivationLabel />
				</Stack>
			</Stack>
			<TypeOfCurrency $typeCurrency={$typeCurrency} />
			<CardsDescription />
			<CardsButtomGroup />
		</BodyContainers>
	);
};
