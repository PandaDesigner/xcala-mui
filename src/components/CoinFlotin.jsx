

import { Stack, styled, Typography, Divider } from "@mui/material";
import CajaMount from "./CajaDisponible"




const ContentFlotin = styled(Stack)({
    position: "relative",
    margin: "0 auto",
    bottom: "-350px",
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
    minWidth: "310px",
    maxWidth: "663px",
    gap: "8px",
})




const CoinFlotin = () => {
    return (
        <>
            <ContentFlotin>
                <CajaMount coinValue={"80.500"} />
                <Divider orientation="vertical" color="rgba(24, 40, 73, 0.12)" />
                <CajaMount direction="end" title="Dinero en Transitó" coinValue={230} />
            </ContentFlotin>
        </>
    )
}
export default CoinFlotin