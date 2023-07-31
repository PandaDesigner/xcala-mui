import { Box, Button, Stack, Typography, styled } from '@mui/material'
import { CajaSection } from './CajaSection'
import { SectionInteraction } from './SectionInteraction'


const SectionHeader = styled(Stack)({

    flexDirection: { lg: "row", md: "column" },
    width: "100%",
    height: "100%",
    position: "relative",
    justifyContent: { md: "flex-start", xs: "center" },
    alignItems: "flex-start",
    padding: "0px",
    boxSizing: "border-box",
    maxWidth: "1398px",
    isolation: "isolate",

})

const CarrselContent = styled(Box)({
    //maxWidth: "80%",
    maxHeight: { xs: "100%", md: '315px' },
    maxWidth: { xs: '100%', md: '100%', lg: '1080px' },
    height: "100%",
    width: '78%',//{ lg: "78%", xs: '100%' },
    margin: "0px",
    backgroundColor: "red",
    borderRadius: "8px"
})

const SectionCaja = styled(Stack)({

    width: { md: "100%", sm: "100%", lg: "100%" },
    height: "315px",
    margin: "0px 0px 0px 0px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 8px rgba(61, 64, 75, 0.15)",
    overflow: "hidden"
})

export const NewDashboard = () => {
    return (
        <Stack alignItems={'center'} gap={2}>
            <SectionHeader
                gap={"16px"}
                flexWrap={{ md: "no-wrap", xs: "wrap" }}
                maxHeight={{ md: "315px", xs: "100%" }}
                width={'100%'}
                justifyContent={"center"}
                flexDirection={'row'}
            >
                <CarrselContent
                    m={0}
                    justifyContent={"center"}
                    //flexBasis={"auto"}
                    alignItems={"center"}
                    minWidth={{ lg: '78%', xs: '100%' }}
                    height={'100%'}

                >
                    <Stack
                        width={"100%"}
                        height={{ xs: '450px', md: '315px' }}
                        minHeight={{ md: "315px", sm: "315px", xs: "450px" }}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Typography variant="h4" color="#fff">Carrusel</Typography>
                    </Stack>
                </CarrselContent>
                <SectionCaja
                    flexBasis={'1'}
                    minWidth={{ lg: '20%', md: '100%', sm: '100%', xs: '100%' }}
                    maxHeight={{ lg: "315px", sm: "315px" }}>
                    <CajaSection />
                </SectionCaja>
            </SectionHeader>
            <SectionInteraction />
        </Stack >
    )
}
