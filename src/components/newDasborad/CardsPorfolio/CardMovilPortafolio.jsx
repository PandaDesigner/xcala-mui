import { BottonsIconosPerfile, CardsInfo, CardsProduct, ExpectedTime, ReantabilityTitel, RentabilityValue, TitelCards } from "../CardsProduct/CardsProductComponents"
//import { HeadContainerCards } from "../CardsProduct/HeadContainerCards"
import { HeadCards, HeadChips, HeadTitel, HmcText, MotivacionesGenerarl, Start, StartIcons } from "../CardsProduct/HeadComponent";
import startIcons from "../../../assets/images/start-icons.svg";
import { Stack, Box } from "@mui/material";
import CharstComponet from "./ChartsComponent";
import { handelProfileIcon } from "../../../helper/FuntionesHelpers";


const miData = {
	labels: ["Global Real Estate", "Balnace Global", "US Venture Opportunities"],
	datasets: [
		{
			label: "Fondo",
			data: [50, 15, 35],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF1384", "#31A2EB", "#FFCE16"],
		},
	],
};



export const CardMovilPortafolio = ({fundName="Portafolio movil", fundPerfile=true, ProfileCards="Moderado",rentabilityFound="20",foundTerm="Anualizado a largo plazo" }) => {

    
  return (
    <CardsProduct>
      <HeadCards sx={{padding:{xs:"8px 16px", md:"16px 32px"} }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Stack gap={1} alignItems={"center"}>
            <HeadChips justifyContent={"center"} alignItems={"center"} gap={1}>
              <MotivacionesGenerarl>
                <HmcText>HMC</HmcText>
              </MotivacionesGenerarl>
              {fundPerfile && (
                <Start sx={{ margin: "0" }}>
                  <StartIcons src={startIcons} alt="start-icons" />
                </Start>
              )}
              <HeadTitel
                sx={{
                  marginTop: "0",
                  lineHeight: "clamp(160%, 1vw, 100%)",
                  fontSize: "clamp(0.85rem, 1vw, 5.6rem)",
                }}
              >
                {fundName}
              </HeadTitel>
            </HeadChips>
            <TitelCards >
              <BottonsIconosPerfile src={handelProfileIcon(ProfileCards)} sx={{width:{xs:"40px", md:"80px"}}} />
              <CardsInfo gap={"16px"}>
                <ExpectedTime
                  sx={{ color: "#fff", lineHeight:"105%", fontSize:"clamp(0.5rem, 2vw, 1rem)"  }}
                >{`Participación de ${miData.labels.length} Fondos`}</ExpectedTime>
                <ReantabilityTitel
                  sx={{ color: "#fff" }}
                  fontSize={"clamp(0.8rem, 2vw, 1.2rem)"}
                >
                  Rentabilidad Esperada
                </ReantabilityTitel>
                <RentabilityValue
                  sx={{
                    fontWeight: "400",
                    fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
                    lineHeight:"clamp(30%, 2vw, 45%)"
                  }}
                >{`${rentabilityFound}%`}</RentabilityValue>
                <ExpectedTime
                  sx={{ color: "#fff", margin:"0",lineHeight:"105%" }}
                >{`(${foundTerm})`}</ExpectedTime>
              </CardsInfo>
            </TitelCards>
          </Stack>
          <Box sx={{ height:{sm:"80px", md:"100%"}  }} >
            <CharstComponet miData={miData} sx={{ height:{sm:"100%", md:"150px"}  }}  />
          </Box>
        </Stack>
      </HeadCards>
    </CardsProduct>
  );
}
 