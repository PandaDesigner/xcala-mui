import { Stack, Typography, styled } from "@mui/material";

import iconsUSD from "../../../assets/images/USD-symbol.svg";
import iconsCPL from "../../../assets/images/icons-cpl.svg";

const colorTag = (typeCurrency) => {
	return typeCurrency === "USD"
		? "rgba(90, 196, 177, 0.5)"
		: "rgba(107, 110, 199, 0.5)";
};

const TentabilidadContainer = styled(Stack)({
	borderRadius: "8px",
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	justifyContent: "flex-start",
	alignItems: "center",
	padding: "2px 4px",
	boxSizing: "border-box",
	height: "18px",
	width: "122px",
	borderRadius: "15px",
	backgroundColor: "#fff",
});

const ColorCurrency = styled("img")({
	height: "14px",
	width: "14px",
	margin: "0px",
});
const TextTypeOfCurrency = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(24, 40, 73, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "600",
	fontSize: "10px",
	letterSpacing: "0px",
	textDecoration: "none",
	lineHeight: "119%",
	textTransform: "none",
	margin: "0px 0px 0px 3px",
});

export const TypeOfCurrency = ({ typeCurrency }) => {
	const tagColor = colorTag(typeCurrency);
	return (
		<TentabilidadContainer
			sx={{
				"&:hover": {
					backgroundColor: tagColor,
				},
			}}
		>
			<ColorCurrency
				src={`${typeCurrency === "USD" ? iconsUSD : iconsCPL}`}
				alt={`${typeCurrency === "USD" ? "USD" : "CPL"}`}
			/>
			<TextTypeOfCurrency>
				{` Inversion en ${typeCurrency === "USD" ? "USD" : "CPL"}`}
			</TextTypeOfCurrency>
		</TentabilidadContainer>
	);
};
