import { styled, Stack, Typography, Chip, Avatar } from "@mui/material";
import iconRetorno from "../../../assets/images/icono_retorno.svg";

const ContentLabel = styled(Chip)({
	backgroundColor: "rgba(237, 252, 249, 1)",
	color: "rgba(73, 161, 151, 1)",
	//alignItems: "center",
	//justifyContent: "center",
	padding: "2.421052932739258px 4.263158798217773px",
	//boxSizing: "border-box",
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

export const InterestLabel = () => {
	return (
		<>
			<ContentLabel
				label={"Retorno Absoluto"}
				//clickable
				avatar={
					<AvatarLabel
						src={iconRetorno}
						sx={{ width: "16px", height: "16px", fontSize: 8 }}
					/>
				}
			/>
		</>
	);
};
