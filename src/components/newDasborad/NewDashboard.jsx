import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import { CajaSection } from "./CajaSection";
import { SectionInteraction } from "./SectionInteraction";
import { GreetingDashboard } from "./GreetingDashboard";
import backgroundFondo from "../../assets/images/Background-fondo.png";
import { DiviaiderSectionText } from "./DiviaiderSectionText";
import { CardsFound } from "./CardsProduct/CardsFound";
import { CardsButtomGroup } from "./CardsProduct/CardsButtomGroup";

const perfil = "conservador";
const cashAmount = "10.000.000";
const name = "jose";
const actualMount = "8.480.000";
const rentabilityMount = "18.480.000";
const portfolio = null; /*[
    {
        perfil: 'conservador',
        titelPeymen: 'text one loremp 1',
        montoTotal: '13.200'
    },
    {
        perfil: 'agresivo',
        titelPeymen: 'text one loremp 2',
        montoTotal: '15.200'
    },
    {
        perfil: 'moderado',
        titelPeymen: 'text one loremp 3',
        montoTotal: '11.200'
    },
    {
        perfil: 'portafolio',
        titelPeymen: 'text one loremp 4',
        montoTotal: '13.200'
    },
    {
        perfil: 'portafolio',
        titelPeymen: 'text one loremp 5',
        montoTotal: '20.200'
    },
]
*/

/**HandelFuntion */

const HandlerCapital = (str) => {
	const resultStr = [...str]
		.map((leter, index) => {
			return index === 0 ? leter.toUpperCase() : leter.toLowerCase();
		})
		.join("");
	//console.log(resultStr);
	return resultStr;
};

/**FIN */

const SectionHeader = styled(Stack)({
	flexDirection: { lg: "row", md: "column" },
	width: "100%",
	height: "100%",
	position: "relative",
	justifyContent: { md: "flex-start", xs: "center" },
	alignItems: "flex-start",
	padding: "0px",
	boxSizing: "border-box",
	//maxWidth: "1398px",
	isolation: "isolate",
});

const CarrselContent = styled(Box)({
	maxWidth: { xs: "100%", md: "100%", lg: "1080px" },
	height: "100%",
	width: "78%",
	margin: "0px",
	backgroundColor: "red",
	borderRadius: "8px",
});

const SectionCaja = styled(Stack)({
	width: { md: "100%", sm: "100%", lg: "100%" },
	margin: "0px 0px 0px 0px",
	borderRadius: "8px",
	backgroundColor: "rgba(255, 255, 255, 1)",
	boxShadow: "0px 0px 8px rgba(61, 64, 75, 0.15)",
	overflow: "hidden",
});

const BackgroundDashboard = styled(Stack)({
	position: "absolute",
	background: `url(${backgroundFondo})`,
	backgroundOrigin: "top",
	backgroundSize: "cover",
	backgroundPosition: "top",
	backgroundRepeat: "no-repeat",
	top: "0",
	left: "0",
	right: "0",
	width: "100%",
	objectFit: "cover",
	alignItems: "center",
	gap: "16px",
	margin: "0px",
	padding: "0px",
});

export const NewDashboard = () => {
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
				<SectionInteraction
					portfolio={portfolio}
					height={"100%"}
					actualMount={actualMount}
					rentabilityMount={rentabilityMount}
				/>

				<DiviaiderSectionText width={"100%"} />

				<Grid
					width={"100%"}
					rowSpacing={2}
					columnSpacing={2}
					Spacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
					columns={{ xs: 4, sm: 4, md: 8, lg: 8 }}
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
						funDescription={
							"Fondo que selecciona e invierte activamente en los mejores gestores globales Inmobiliarios. A su vez."
						}
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
						funDescription={
							"Fondo que selecciona e invierte activamente en los mejores gestores de deuda privada listados en este fondo..."
						}
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
						funDescription={
							"Fondo que replica el índice de Venture Capital de Estados Unidos. Venture Capital son todas aquellas inversiones..."
						}
					/>
				</Grid>

				<Button variant="contained" color="primary">
					Ver más
				</Button>
			</Stack>
		</BackgroundDashboard>
	);
};
