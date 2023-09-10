import { Divider, Stack, Typography, styled } from "@mui/material";
import { InterestLabel } from "./InterestLabel";
import { MotivationLabel } from "./MotivationLabel";
import { TypeOfCurrency } from "./TypeOfCurrency";
import { CardsButtomGroup } from "./CardsButtomGroup";

import {
	BodyContainers,
	BottonsIconosPerfile,
	CardsInfo,
	ExpectedTime,
	ReantabilityTitel,
	RentabilityValue,
	TitelCards,
} from "./CardsProductComponents";
import { handelProfileIcon } from "../../../helper/FuntionesHelpers";

export const BodyCardsContainer = ({
	profileCards,
	typeCurrency,
	intereses,
	motivation,
	rentabilityFound,
	foundTerm,
}) => {
	return (
		<BodyContainers gap={2}>
			<Stack gap={1} width={"100%"}>
				<TitelCards>
					<BottonsIconosPerfile src={handelProfileIcon(profileCards)} />
					<CardsInfo spacing={"20px"}>
						<ReantabilityTitel fontSize={"clamp(0.96rem, 2vw, 1.2rem)"}>
							Rentabilidad Esperada
						</ReantabilityTitel>
						<RentabilityValue>{`${rentabilityFound}%`}</RentabilityValue>
						<ExpectedTime>{`(${foundTerm})`}</ExpectedTime>
					</CardsInfo>
				</TitelCards>
				<Divider variant="fullWidth" width="100%" />
				<Stack flexDirection={"row"} gap={1} flexWrap={"wrap"}>
					<InterestLabel intereses={intereses} />
					<MotivationLabel motivation={motivation} />
				</Stack>
			</Stack>
			<TypeOfCurrency typeCurrency={typeCurrency} />

			<CardsButtomGroup />
		</BodyContainers>
	);
};
