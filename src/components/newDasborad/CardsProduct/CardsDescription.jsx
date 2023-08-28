import { Stack, Typography, styled } from "@mui/material";

const CardsContainer = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "column",
	width: "100%",
	justifyContent: "center",
	alignItems: "center",
	padding: "0px",
	boxSizing: "border-box",
	//height: "64px",
});

const TitelCards = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(24, 40, 73, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "700",
	fontSize: "12px",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
	alignSelf: "stretch",
	margin: "0px",
});

const BodyCardsDescription = styled(Typography)(
	{
		//whiteSpace: "pre-wrap",
		color: "rgba(24, 40, 73, 1)",
		fontStyle: "normal",
		fontFamily: "Poppins",
		fontWeight: "400",
		fontSize: "12px",
		letterSpacing: "0px",
		textDecoration: "none",
		textTransform: "none",
		alignSelf: "stretch",
		width: "100%",
	},
	`
component="p"
`,
);

export const CardsDescription = ({ funDescription }) => {
	return (
		<>
			<CardsContainer>
				<TitelCards>Descripción</TitelCards>
				<BodyCardsDescription>{funDescription}</BodyCardsDescription>
			</CardsContainer>
		</>
	);
};
