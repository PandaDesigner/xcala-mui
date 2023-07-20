

import { Stack, styled, Typography, Divider } from "@mui/material";
import CajaMount from "./CajaDisponible"




const ContentFlotin = styled(Stack)({
    position: "relative",
    margin: "0 auto",
    bottom: "-50px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 8px rgba(61, 64, 75, 0.15)",
    borderRadius: "8px",
    position: "relative",
    isolation: "isolate",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 24px",
    boxSizing: "border-box",
    overflow: "hidden",
    height: "89px",
    width: "100%",
    gap: "8px",
    animation: "ease-in-out"
})





const CoinFlotin = ({ disponibleCaja, transitoCaja }) => {
    return (
        <>
            <ContentFlotin maxWidth={{ xs: "90%", sm: "30%" }} minWidth={{ xs: "360px", sm: "500px" }}>
                <CajaMount coinValue={disponibleCaja} />
                <Divider orientation="vertical" color="rgba(24, 40, 73, 0.12)" />
                <CajaMount direction="end" title="Dinero en Transitó" coinValue={transitoCaja} />
            </ContentFlotin>
        </>
    )
}
export default CoinFlotin