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
	maxWidth: "406px",
	maxHeight: "483.9px",
});
export const CardsFound = () => {
	return (
		<CardsProduct>
			<HeadContainerCards />
			<BodyCardsContainer />
		</CardsProduct>
	);
};
