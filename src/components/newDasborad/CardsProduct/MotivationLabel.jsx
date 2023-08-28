import { useState, useEffect } from "react";
import { styled, Chip } from "@mui/material";
import iconGrenerar from "../../../assets/images/Symbol//motivaciones/icono-generar.svg";
import iconHacer from "../../../assets/images/Symbol/motivaciones/icon-hacer.svg";
import iconGanar from "../../../assets/images/Symbol/motivaciones/icons-ganar.svg";

const motivationObj = [
	{ label: "Hacer crecer mi plata", icon: iconHacer },
	{ label: "Ganar con propósito e impacto", icon: iconGanar },
	{ label: "Generar un ingreso mensual extra", icon: iconGrenerar },
];

const ContentLabel = styled(Chip)({
	backgroundColor: "rgba(231, 243, 255, 1)",
	display: "flex",
	color: "rgba(85, 118, 209, 1)",
	alignItems: "center",
	justifyContent: "center",
	padding: "2.421052932739258px 4.263158798217773px",
	height: "23px",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "600",
	fontSize: "12px",
	lineHeight: "12px",
	"&:hover": {
		backgroundColor: "rgba(176, 194, 212, 1)",
		color: "rgba(85, 118, 209, 1)",
	},
});

const AvatarLabel = styled("img")({
	height: "20px",
	width: "20px",
});

const HandlerMotivation = (motivation) => {
	const result = motivationObj.find((item) => motivation === item.label);
	return result;
};

export const MotivationLabel = ({ motivation }) => {
	const [motivationSate, setMotivationState] = useState({
		label: "Hacer crecer mi plata",
		icon: iconHacer,
	});

	console.log(motivation);

	useEffect(() => {
		setMotivationState(HandlerMotivation(motivation));
	}, []);

	const { label, icon } = motivationSate;

	return (
		<>
			<ContentLabel
				label={label}
				//clickable
				avatar={
					<AvatarLabel
						src={icon}
						sx={{
							width: "20px",
							height: "20px",
							fontSize: "8px",
							lineHeight: "8px",
							marginTop: "2px",
						}}
					/>
				}
			/>
		</>
	);
};
