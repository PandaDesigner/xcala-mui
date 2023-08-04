import { Stack, Typography, styled } from "@mui/material";

import perfil_conservador from '../../assets/images/perfiles/conservador.svg'
import perfil_moderado from '../../assets/images/perfiles/moderado.svg'
import perfil_agresivo from '../../assets/images/perfiles/agresivo.svg'
import perfil_portafolio from '../../assets/images/perfiles/portafolio.svg'
/**ItemsPeymenBox */


const ItemsPeymenBox = styled(Stack)({
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '4px',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 16px',
    boxSizing: 'border-box',
    height: '48px',
    boxShadow: '0px 0px 12px rgba(61, 64, 75, 0.28)',
})

const ContainerCardsBox = styled(Stack)({
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px',
    boxSizing: 'border-box',
    margin: '0px',
    height: '40px',
    width: '60%',
});

const ListProduct = styled(Stack)({
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    boxSizing: 'border-box',
    height: '90%',
    width: '100%',
    overflow: 'hidden',
    maxWidth: '493px',
});


const MiPortafolio = styled(Typography)({
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontSynthesis: 'none',
    color: 'rgba(0, 0, 0, 1)',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '0px',
    textDecoration: 'none',
    //lineHeight: '110.00000238418579%',
    textTransform: 'none',
    margin: '0px',
});

const CoinValueBox = styled(Typography)({
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontSynthesis: 'none',
    color: 'rgba(0, 0, 0, 1)',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',//'15px',
    letterSpacing: '-0.39022237062454224px',
    textDecoration: 'none',
    lineHeight: '21.462230682373047px',
    textTransform: 'none',
    margin: '0px',
});
const PortafolioPerfil = styled("img")({
    height: 'auto',
    width: '50px',
});

const handelPerfil = (perfil) => {
    return perfil === 'conservador'
        ? perfil_conservador
        : perfil === 'moderado'
            ? perfil_moderado
            : perfil === 'portafolio'
                ? perfil_portafolio
                : perfil_agresivo
}

export const PeymenCards = ({ perfil, titelPeymen, montoTotal }) => {
    return (
        <ItemsPeymenBox>
            <ContainerCardsBox gap={1}>
                <PortafolioPerfil src={handelPerfil(perfil)} alt={`${perfil}`} />
                <ListProduct>
                    <MiPortafolio>{titelPeymen}</MiPortafolio>
                </ListProduct>
            </ContainerCardsBox>
            <CoinValueBox>{`$ ${montoTotal}`}</CoinValueBox>
        </ItemsPeymenBox>
    )
}
