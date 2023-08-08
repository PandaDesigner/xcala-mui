import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { CajaSection } from "./CajaSection";
import { SectionInteraction } from "./SectionInteraction";
import { GreetingDashboard } from "./GreetingDashboard";
import backgroundFondo from "../../assets/images/Background-fondo.png";

const perfil = "conservador";
const cashAmount = "0";
const name = "jose";

/**HandelFuntion */

const HandlerCapital = (str) => {
	const resultStr = [...str]
		.map((leter, index) => {
			return index === 0 ? leter.toUpperCase() : leter.toLowerCase();
		})
		.join("");
	console.log(resultStr);
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
	maxWidth: "1398px",
	isolation: "isolate",
});

const CarrselContent = styled(Box)({
	//maxWidth: "80%",
	maxHeight: { xs: "100%", md: "315px" },
	maxWidth: { xs: "100%", md: "100%", lg: "1080px" },
	height: "100%",
	width: "78%", //{ lg: "78%", xs: '100%' },
	margin: "0px",
	backgroundColor: "red",
	borderRadius: "8px",
});

const SectionCaja = styled(Stack)({
	width: { md: "100%", sm: "100%", lg: "100%" },
	height: "315px",
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
			<Stack width={"90%"} alignItems={"center"} gap={2}>
				<GreetingDashboard
					name={HandlerCapital(name)}
					width={"100%"}
					padding={"32px 0px 0px 0px"}
				/>
				<SectionHeader
					gap={"16px"}
					flexWrap={{ md: "no-wrap", xs: "wrap" }}
					maxHeight={{ md: "315px", xs: "100%" }}
					width={"100%"}
					justifyContent={"center"}
					flexDirection={"row"}
				>
					<CarrselContent
						m={0}
						justifyContent={"center"}
						//flexBasis={"auto"}
						alignItems={"center"}
						minWidth={{ lg: "78%", xs: "100%" }}
						height={"100%"}
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
						maxHeight={{ lg: "315px", sm: "315px" }}
					>
						<CajaSection perfil={perfil} cashAmount={cashAmount} />
					</SectionCaja>
				</SectionHeader>
				<SectionInteraction />
				<Box height={"100px"} />
			</Stack>
		</BackgroundDashboard>
	);
};
