import { Stack, styled, Typography } from "@mui/material";

import iconSection from "../../assets/images/icon-section.svg";

const ContainerDivaider = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "column",
	alignItems: {
		xs: "center",
		ms: "center",
		md: "flex-start",
		lg: "flex-start",
	},
	padding: "0px",
	boxSizing: "border-box",
	width: "100%",
	//maxWidth: "1398px",
	marginBottom: "20px",
});
const TitelDivaiderContent = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	alignItems: "center",
	padding: "0px",
	boxSizing: "border-box",
	width: "100%",
	maxWidth: "627px",
	margin: "0px",
});

const IconSectionDivaider = styled("img")({
	height: "20px",
	width: "20px",
	margin: "0px",
	marginRight: "16px",
});

const TextSectionFondoSpan = styled(Typography)({
	whiteSpace: "pre-wrap",
	color: "rgba(16, 24, 32, 1)",
	fontStyle: "normal",
	fontFamily: "Museo",
	fontWeight: "300",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
});

const TextSectionFondoSpanResalt = styled(Typography)({
	whiteSpace: "pre-wrap",
	color: "rgba(30, 34, 170, 1)",
	fontStyle: "normal",
	fontFamily: "Museo",
	fontWeight: "300",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
});

const DivideSectionText = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	justifyContent: "space-between",
	alignItems: "flex-start",
	padding: "0px",
	boxSizing: "border-box",
	width: "100%",
	margin: "17px 0px 0px 0px",
	height: "14px",
});

const TextPromo = styled(Typography)({
	textAlign: "left",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(128, 128, 128, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "400",
	fontSize: "20px",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
	width: "100%",
	margin: "0px",
	flex: "1 0",
});

const ContenTime = styled(Typography)({
	textAlign: "right",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(128, 128, 128, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "400",
	fontSize: "14px",
	letterSpacing: "0px",
	textDecoration: "none",
	textTransform: "none",
	width: "100%",
	margin: "0px",
	flex: "1 1",
});

export const DiviaiderSectionText = () => {
	return (
		<ContainerDivaider >
			<TitelDivaiderContent
				justifyContent={{
					xs: "center",
					ms: "center",
					md: "flex-start",
					lg: "flex-start",
				}}
				//mb={{ sx: "50px", md: "50px" }}
			>
				<IconSectionDivaider src={iconSection} alt="icon-section" />
				<TextSectionFondoSpan
					component={"p"}
					fontSize={"clamp(0.6em, 4vw, 1.4em)"}
				>
					Te proponemos estos fondos{" "}
					<TextSectionFondoSpanResalt
						component={"span"}
						fontSize={"clamp(0.6em, 4vw, 1.3em)"}
					>
						para ti
					</TextSectionFondoSpanResalt>
				</TextSectionFondoSpan>
			</TitelDivaiderContent>
			<DivideSectionText
				flexDirection={{ xs: "column", ms: "column", md: "row", lg: "row" }}
				justifyContent={{
					xs: "center",
					ms: "center",
					md: "flex-start",
					lg: "flex-start",
				}}
				alignItems={{
					xs: "center",
					ms: "center",
					md: "flex-start",
					lg: "flex-start",
				}}
				mt={{ xs: "50px", ms: "0px", md: "0px", lg: "0px" }}
				spacing={{ xs: "0px", ms: "0px", md: "0px", lg: "0px" }}
				sx={{ marginBottom: "50px", marginTop: "0px" }}
			>
				<TextPromo>
					Invierte tranquila... Podrás invertir desde $10 mil y sacar tu plata
					cuando la necesites.
				</TextPromo>
				<ContenTime>{`Actualizado ${"16/12/2021 - 14:27"}`}</ContenTime>
			</DivideSectionText>
		</ContainerDivaider>
	);
};
