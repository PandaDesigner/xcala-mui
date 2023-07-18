import { Typography, Stack, styled, Box, Button } from "@mui/material"


import icons55 from "../assets/images/Ellipse55Image.svg"
import icons56 from "../assets/images/Ellipse56Image.svg"

const ContentDisponible = styled(Stack)({
    position: "relative",
    isolation: "isolate",
    flexDirection: "column",
    padding: "0px",
    boxSizing: "border-box",
    textDecoration: "none",
    heigth: "100%",
    width: "100%",
    gap: "4px"
});

const TitelDisponible = styled(Stack)({

    position: "relative",
    isolation: `"isolate"`,
    flexDirection: "row",
    padding: `"0px"`,
    boxSizing: `"border-box"`,
    margin: `"0px"`,
    width: "100%",
    gap: "4px"
});

const IconsCaja = styled("img")({
    height: "6px",
    width: "6px",
});

const MountDisponible = styled(Typography)({
    //textAlign: "left",
    whiteSpace: "pre-wrap",
    fontSynthesis: `"none"`,
    color: "rgba(0, 0, 0, 1)",
    fontSize: "1.2rem",
    letterSpacing: "- 0.4742029309272766px",
    textDecoration: `"none"`,
    lineHeight: `"26.081161499023438px"`,
    textTransform: `"none"`,
    alignSelf: `"stretch"`,
    margin: `"8px 0px 0px 0px"`,
    fontWeight: "Bold"
});



const CajaMount = ({ direction = "start", title = "Caja Disponible", coinValue = 0 }) => {
    return (
        <ContentDisponible alignItems={direction} sx={{ cursor: "pointer" }}>
            <TitelDisponible justifyContent={direction} alignItems="start"  >
                <Box sx={{ margin: "auto 0" }}>
                    <Typography fontSize={"0.85rem"} fontWeight="500" sx={{ letterSpacing: -0.7 }} >
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <IconsCaja src={icons55} loading='lazy' alt={"Ellipse 55"} />
                </Box>
            </TitelDisponible >
            <MountDisponible>
                {`$ ${coinValue}`}
            </MountDisponible>

        </ContentDisponible>
    )
}

export default CajaMount