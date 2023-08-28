import { useState, useEffect } from "react";
import { styled, Chip } from "@mui/material";
import iconRetorno from "../../../assets/images/Symbol/intereses/icono-retorno.svg";
import iconSostenibility from "../../../assets/images/Symbol/intereses/icono-sotenibilidad.svg";
import iconDeuda from "../../../assets/images/Symbol/intereses/icono-deuda.svg";
import iconVenture from "../../../assets/images/Symbol/intereses/icono-venture.svg";
import iconCapital from "../../../assets/images/Symbol/intereses/icono-capital.svg";
import iconRenta from "../../../assets/images/Symbol/intereses/icono-renta.svg";

const interestObjects = [
	{ label: "Retorno Absoluto", icon: iconRetorno },
	{ label: "Sostenibilidad", icon: iconSostenibility },
	{ label: "Deuda Privada", icon: iconDeuda },
	{ label: "Venture Capital/Startups", icon: iconVenture },
	{ label: "Capital Privado", icon: iconCapital },
	{ label: "Renta Inmobiliaria", icon: iconRenta },
];

const ContentLabel = styled(Chip)({
	backgroundColor: "rgba(237, 252, 249, 1)",
	color: "rgba(73, 161, 151, 1)",
	padding: "2.421052932739258px 4.263158798217773px",
	height: "23px",
	fontStyle: "normal",
	fontFamily: "Poppins",
	fontWeight: "600",
	fontSize: "12px",
	lineHeight: "12px",
	"&:hover": {
		backgroundColor: "rgba(196, 222, 217, 1)",
		color: "rgba(73, 161, 151, 1)",
	},
});

const AvatarLabel = styled("img")({
	height: "16px",
	width: "16px",
});

const HandlerInterests = (intereses) => {
	const result = interestObjects.find((item) => intereses === item.label);
	return result;
};

export const InterestLabel = ({ intereses }) => {
	const [{ label, icon }, setInsterState] = useState({
		label: "Retorno Absoluto",
		icon: iconRetorno,
	});
	useEffect(() => {
		setInsterState(HandlerInterests(intereses));
	}, []);

	return (
		<>
			<ContentLabel
				label={label}
				//clickable
				avatar={
					<AvatarLabel
						src={icon}
						sx={{ width: "16px", height: "16px", fontSize: 8 }}
					/>
				}
			/>
		</>
	);
};
