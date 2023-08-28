import { Stack, styled, Button } from "@mui/material";
const CardsButtonContainer = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "column",
	width: "100%",
	justifyContent: "flex-start",
	alignItems: "center",
	padding: "0px",
	boxSizing: "border-box",
	gap: "8px",
	paddingBottom: "8px",
});

const BtnGroup = styled(Stack)({
	position: "relative",
	isolation: "isolate",
	flexDirection: "row",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	padding: "0px",
	boxSizing: "border-box",
	alignSelf: "stretch",
	margin: "0px",
	height: "50px",
	width: "100%",
	gap: "8px",
});
const BtnPrimary = styled(Button)({
	flex: "1",
	height: "50px",
});

const BtnSecundary = styled(Button)({
	flex: "1",
	height: "50px",
	margin: "0px",
	"&:hover": {
		backgroundColor: "rgba(30, 34, 170, 1)",
		color: "rgba(244, 244, 251, 1)",
	},
});

const BtnInformation = styled(Button)({
	backgroundColor: "rgba(244, 244, 251, 1)",
	color: "rgba(30, 34, 170, 1)",
	border: "1px solid rgba(30, 34, 170, 1)",
	flex: "1",
	alignSelf: "stretch",
	height: "50px",
	"&:hover": {
		backgroundColor: "rgba(30, 34, 170, 1)",
		color: "rgba(244, 244, 251, 1)",
	},
});

export const CardsButtomGroup = () => {
	return (
		<CardsButtonContainer>
			<BtnGroup>
				<BtnSecundary variant="outlined" color="primary" disableElevation>
					Simular
				</BtnSecundary>
				<BtnPrimary variant="contained" color="primary" disableElevation>
					Invertir
				</BtnPrimary>
			</BtnGroup>
			<BtnInformation variant="contained" disableElevation>
				Más Información
			</BtnInformation>
		</CardsButtonContainer>
	);
};
