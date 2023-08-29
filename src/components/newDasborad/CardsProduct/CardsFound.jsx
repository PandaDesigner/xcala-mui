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
	minWidth: "316px",
	//cursor: "pointer",
	transitionDelay: "-2000",
	transitionDuration: "3000",
	boxShadow: "0px 0px 12px rgba(80, 80, 80, 0.15)",
	"&:hover": {
		boxShadow: "0px 0px 20px rgba(80, 80, 80, 0.25)",
	},
});

export const CardsFound = ({
	profileCards = "Conservador",
	intereses = "Capital Privado",
	motivation = "Hacer crecer mi plata",
	typeCurrency = "USD",
	rentabilityFound = "0.00",
	fundName = "Global Real Estate Income",
	foundTerm = "Anualizado a largo plazo",
	fundPerfile = false,
	funDescription = "Lorem ipsum dolor sit amet consectetur. Congue hendrerit et lacinia donec tristique. A sit commodo fusce viverra",
}) => {
	return (
		<CardsProduct>
			<HeadContainerCards fundName={fundName} fundPerfile={fundPerfile} />
			<BodyCardsContainer
				profileCards={profileCards}
				foundTerm={foundTerm}
				intereses={intereses}
				motivation={motivation}
				typeCurrency={typeCurrency}
				rentabilityFound={rentabilityFound}
				funDescription={funDescription}
			/>
		</CardsProduct>
	);
};
