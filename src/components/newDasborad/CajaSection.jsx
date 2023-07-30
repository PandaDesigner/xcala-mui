import { Button, Box, Stack, IconButton, styled, Typography } from '@mui/material'

import IconsMenus from '../../assets/images/iconsMenu.svg'
import AvatarSection from '../AvatarSection';



const SectionCajaContainer = styled(Stack)({
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "8px",
    position: "relative",
    isolation: "isolate",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    minHeight: "315px",
    maxHeight: "315px",
    maxWidth: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 16px",
    boxSizing: "border-box",
});

const HeaderMenu = styled(Stack)({
    position: "relative",
    isolation: "isolate",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px",
    boxSizing: "border-box",
    alignSelf: "stretch",
    margin: "0px",
    width: "100%",
});

const Menu = styled(IconButton)({
    display: "flex",
    position: "relative",
    isolation: "isolate",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "4px",
    boxSizing: "border-box",
    borderRadius: "4px"
})

const Icons = styled("img")({
    display: "flex",
    position: "relative",
    isolation: "isolate",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "0px",
    boxSizing: "border-box",
    margin: "0px",
    height: "16px",
    width: "16px",
})
const Titel = styled(Stack)({
    position: "relative",
    isolation: "isolate",
    flexDirection: "colunm",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    boxSizing: "border-box",
    alignSelf: "stretch",
    height: "100%",
    width: "100%",
    maxHeight: "20px",
    maxWidth: "100%",
})

const CajaDisponible = styled(Typography)({
    textAlign: "center",
    whiteSpace: "pre-wrap",
    fontSynthesis: "none",
    color: "rgba(24, 40, 73, 1)",
    fontStyle: "normal",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: "0px",
    textDecoration: "none",
    lineHeight: "126.49999856948853%",
    textTransform: "none",
    margin: "0px",
})

const MoneyCaja = styled(Typography)({
    textAlign: "center",
    whiteSpace: "pre-wrap",
    fontSynthesis: "none",
    color: "rgba(30, 34, 170, 1)",
    fontStyle: "normal",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "20px",
    letterSpacing: "0px",
    textDecoration: "none",
    lineHeight: "126.49999856948853%",
    textTransform: "none",
    margin: "0px",
});

const ContainerCaja = styled(Stack)({
    position: "relative",
    isolation: "isolate",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    boxSizing: "border-box",
    alignSelf: "stretch",
    margin: "0px",
    height: "90px",
    width: "100%",
})

const BtnCargar = styled(Button)({
    backgroundColor: "rgba(30, 34, 170, 1)",
    color: "#fff",
    borderRadius: "4px",
    position: "relative",
    isolation: "isolate",
    padding: "12px 8px",
    boxSizing: "border-box",
    height: "31px",
    width: "120px",
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#4449D8"
    },
    fontStyle: "normal",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "10px",
    letterSpacing: "0px",
    textDecoration: "none",
    textTransform: "none",
    margin: "0px",
}
)

const BtnActualiza = styled(Button)({
    textDecoration: "underline",
    textTransform: "none",
    fontStyle: "normal",
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "12px",
    letterSpacing: "0px",
})


export const CajaSection = () => {
    return (
        <>
            <SectionCajaContainer>
                <HeaderMenu>
                    <Menu>
                        <Icons src={IconsMenus} alt='icons Menu' />
                    </Menu>
                </HeaderMenu>
                <AvatarSection />
                <Titel>
                    <CajaDisponible> Caja Disponible </CajaDisponible>
                    <MoneyCaja>
                        {`$ ${15.345}`}
                    </MoneyCaja>
                </Titel>
                <ContainerCaja>
                    <BtnCargar>Carga aquí tu caja</BtnCargar>
                    <BtnActualiza disabled variant='text'>Actualizar Caja</BtnActualiza>

                </ContainerCaja>

            </SectionCajaContainer>

        </>
    )
}
