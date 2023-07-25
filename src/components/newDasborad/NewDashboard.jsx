import { Box, Button, Stack, Typography, styled } from '@mui/material'
import { CajaSection } from './CajaSection'

const SectionHeader = styled(Stack)({

    flexDirection: "row", //{ md: "row", xs: "column" },
    width: "100%",
    height: "100%",
    position: "relative",
    justifyContent: { md: "flex-start", xs: "center" },
    alignItems: "flex-start",
    padding: "0px",
    boxSizing: "border-box",
    maxHeight: "315px",
    maxWidth: "1398px",
    isolation: "isolate",

})

const CarrselContent = styled(Box)({
    maxWidth: "1124px",
    maxHeight: "315px",
    height: "100%",
    width: "80%",
    margin: "0px",
    backgroundColor: "red",
    borderRadius: "8px"
})

const SectionCaja = styled(Stack)({
    width: { md: "241px", sm: "100%" },
    height: "315px",
    margin: "0px 0px 0px 32px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 8px rgba(61, 64, 75, 0.15)",
    overflow: "hidden"
})

export const NewDashboard = () => {
    return (
        <>
            <SectionHeader
                gap={"32px"}
                flexWrap={{ md: "no-wrap", xs: "wrap" }}
                maxHeight={{ md: "315px", xs: "100%" }}
                margin={{ md: "0 auto", xs: "0" }}
                justifyContent={"center"}>
                <CarrselContent m={0} justifyContent={"center"} alignItems={"center"}>
                    <Box
                        width={"100%"} height={"100%"} minHeight={{ md: "315px", sm: "250px", xs: "100px" }}>test</Box>
                </CarrselContent>
                <SectionCaja
                    minWidth={{ xs: "80%", md: "241px" }}
                    maxHeight={{ lg: "315px", sm: "315px" }}>
                    <CajaSection />
                </SectionCaja>
            </SectionHeader >
        </>
    )
}
