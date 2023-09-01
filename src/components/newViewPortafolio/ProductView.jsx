import { Grid, Stack, Typography } from "@mui/material";
import { BackgroundDashboard, CarrselContent, SectionCaja, SectionHeader } from "../newDasborad/DasboardComponent.jsx";
import { GreetingDashboard } from "../newDasborad/GreetingDashboard.jsx";
import { HandlerCapital } from "../../helper/FuntionesHelpers.js";
import { CajaSection } from "../newDasborad/CajaSection.jsx";
//import { CardsFound } from "../newDasborad/CardsProduct/CardsFound.jsx";
import { DiviaiderSectionText } from "../newDasborad/DiviaiderSectionText.jsx";
import { CardsFound } from "../newDasborad/CardsProduct/CardsFound.jsx";


const name = "Pedro"
const perfil = "conservador"
const cashAmount = "10.000.000"


export const ProductView = () => {
	return (
    <BackgroundDashboard>
      <Stack
        width={"90%"}
        alignItems={"center"}
        gap={2}
        justifyContent={{
          xs: "center",
          ms: "center",
          md: "flex-start",
          lg: "flex-start",
        }}
      >
        <GreetingDashboard
          name={HandlerCapital(name)}
          width={"100%"}
          padding={"32px 0px 0px 0px"}
        />

        <SectionHeader
          gap={"16px"}
          flexWrap={{ md: "no-wrap", xs: "wrap" }}
          width={"100%"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <CarrselContent
            m={0}
            justifyContent={"center"}
            alignItems={"center"}
            minWidth={{ lg: "78%", xs: "100%" }}
          >
            <Stack
              width={"100%"}
              height={{ xs: "450px", md: "315px" }}
              minWidth={{ lg: "80%", md: "100%", sm: "100%", xs: "100%" }}
              minHeight={{ md: "315px", sm: "315px", xs: "450px" }}
              justifyContent={"center"}
              alignItems={"center"}
              flex={"2 2 78%"}
            >
              <Typography variant="h4" color="#fff">
                Carrusel
              </Typography>
            </Stack>
          </CarrselContent>
          <SectionCaja
            flex={"1 1 18%"}
            minWidth={{ lg: "20%", md: "100%", sm: "100%", xs: "100%" }}
          >
            <CajaSection perfil={perfil} cashAmount={cashAmount} />
          </SectionCaja>
        </SectionHeader>

        <DiviaiderSectionText width={"100%"} />

        <Grid
          width={"100%"}
          rowSpacing={2}
          columnSpacing={2}
          columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}
          container
        >
			<CardsFound
						profileCards="Conservador"
						fundName="Global Real Estate Income"
						rentabilityFound={"10,00"}
						typeCurrency={"CPL"}
						intereses={"Renta Inmobiliaria"}
						motivation={"Generar ingreso extra"}
						foundTerm="Anualizado a largo plazo"
						fundPerfile={true}
						
					/>
					<CardsFound
						profileCards="Moderado"
						fundName="Balanceado Global"
						rentabilityFound={"8,90"}
						typeCurrency={"USD"}
						intereses={"Retorno Absoluto"}
						motivation={"Hacer crecer mi plata"}
						foundTerm="Anualizado a largo plazo"
						fundPerfile={true}
						
					/>
					<CardsFound
						profileCards="Agresivo"
						fundName="US Venture Opportunities"
						rentabilityFound={"25,00"}
						typeCurrency="CPL"
						intereses={"Venture Capital/Startups"}
						motivation={"Hacer crecer mi plata"}
						foundTerm="Anualizado a largo plazo"
						fundPerfile={false}
						
					/>
          
        </Grid>
      </Stack>
    </BackgroundDashboard>
  );
};
