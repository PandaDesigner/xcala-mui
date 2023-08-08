import { Stack, styled, Typography } from "@mui/material";

const TitelDashboards = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	justifyContent: "flex-start",
	alignItems: "center",
	padding: "12px 0px 0px 0px",
	boxSizing: "border-box",
	height: "48px",
	width: "100%",
	maxWidth: "1385px",
});

const TitelType = styled(Typography)({
	textAlign: "left",
	whiteSpace: "`pre-wrap",
	fontSynthesis: "none",
	color: "rgba(19, 41, 75, 1)",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "600",
	letterSpacing: "0px",
	textDecoration: "none",
	lineHeight: "126.49999856948853%",
	textTransform: "none",
	margin: "0px",
});

const NameSection = styled(Typography)({
	textAlign: "right",
	whiteSpace: "pre-wrap",
	fontSynthesis: "none",
	color: "rgba(68, 73, 216, 1)",
	fontStyle: "normal",
	fontFamily: "Museo",
	fontWeight: "400",
	//fontSize: '28.598024368286133px',
	letterSpacing: "0px",
	textDecoration: "none",
	lineHeight: "126.49999856948853%",
	textTransform: "none",
	WebkitTextStroke: "1.2413792610168457px rgba(68, 73, 216, 1)",
	margin: "32px  0px",
	paddingTop: "32px",
});

export const GreetingDashboard = ({ name }) => {
	return (
		<TitelDashboards>
			<TitelType sx={{ fontSize: "clamp(24px, 3vw, 28px)" }}>
				Hola{" "}
				<NameSection
					sx={{ fontSize: "clamp(24px, 3vw, 28px)" }}
					component="span"
				>
					{name}
				</NameSection>
				, que bueno verte de vuelta
			</TitelType>
		</TitelDashboards>
	);
};
