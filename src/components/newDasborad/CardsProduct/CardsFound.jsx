import { Stack, styled } from "@mui/material";
import { HeadContainerCards } from "./HeadContainerCards";
import { BodyCardsContainer } from "./BodyCardsContainer";
const CardsProduct = styled(Stack)({
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
	maxWidth: "456px",
	//maxHeight: "483.9px",
	minWidth: "316px",
	cursor: "pointer",
	transitionDelay: "-2000",
	transitionDuration: "3000",
	boxShadow: "0px 0px 4px rgba(80, 80, 80, 0.15)",
	"&:hover": {
		boxShadow: "0px 0px 9.828890800476074px rgba(80, 80, 80, 0.25)",
	},
});

const $typeCurrency = "USD";
const intereses = "Venture Capital/Startups";

export const CardsFound = () => {
	return (
		<CardsProduct>
			<HeadContainerCards />
			<BodyCardsContainer $typeCurrency={$typeCurrency} intereses={intereses} />
		</CardsProduct>
	);
};
