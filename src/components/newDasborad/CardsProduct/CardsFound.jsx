import { Grid } from "@mui/material";
import { HeadContainerCards } from "./HeadContainerCards";
import { BodyCardsContainer } from "./BodyCardsContainer";
import { CardsProduct } from "./CardsProductComponents";


export const CardsFound = ({
	profileCards = "Conservador",
	intereses = "Capital Privado",
	motivation = "Hacer crecer mi plata",
	typeCurrency = "USD",
	rentabilityFound = "0.00",
	fundName = "Global Real Estate Income",
	foundTerm = "Anualizado a largo plazo",
	fundPerfile = false,
	
}) => {
	return (
		<Grid item md={4} xs={8}>

		<CardsProduct>
			<HeadContainerCards fundName={fundName} fundPerfile={fundPerfile} />
			<BodyCardsContainer
				profileCards={profileCards}
				foundTerm={foundTerm}
				intereses={intereses}
				motivation={motivation}
				typeCurrency={typeCurrency}
				rentabilityFound={rentabilityFound}
				
				/>
		</CardsProduct>
</Grid>
	);
};
