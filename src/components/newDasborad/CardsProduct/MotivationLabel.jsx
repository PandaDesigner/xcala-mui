import { styled, Stack, Typography, Chip, Avatar } from "@mui/material";
import iconGrenerar from "../../../assets/images/insert_invitation.svg";

const ContentLabel = styled(Chip)({
	backgroundColor: "rgba(231, 243, 255, 1)",
	display: "flex",
	color: "rgba(85, 118, 209, 1)",
	alignItems: "center",
	justifyContent: "center",
	padding: "2.421052932739258px 4.263158798217773px",
	//boxSizing: "border-box",
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

export const MotivationLabel = () => {
	return (
		<>
			<ContentLabel
				label={"Generar un ingreso mensual extra "}
				//clickable
				avatar={
					<AvatarLabel
						src={iconGrenerar}
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
