import { Box, Button, Portal, Stack, Typography, styled } from '@mui/material'

import icons_Money from '../../assets/images/iconsMoney.svg';
import icons_Rentavility from '../../assets/images/iconsRentability.svg';
import icons_NoProduct from '../../assets/images/Team members discussing solution.gif';
import { PeymenCards } from './PeymenCards';

const TitelSection = styled(Stack)({
    background: 'linear-gradient(106.49deg, rgba(112, 151, 217, 1) -29.020488665609555%, rgba(30, 34, 170, 1) 50.092131130721704%)',
    borderRadius: '4px',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    width: '100%',
    height: '33px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '4px 10px',
    boxSizing: 'border-box'
});
const TitelSectionBox = styled(Typography)({
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontSynthesis: 'none',
    color: 'rgba(231, 243, 255, 1)',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '16px',
    letterSpacing: '0px',
    textDecoration: 'none',
    lineHeight: '126.49999856948853%',
    textTransform: 'none',
    margin: '0px',
});


/**Section Caja */
const Cards = styled(Stack)({
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0px 0px 12px rgba(61, 64, 75, 0.18)',
    borderRadius: '4px',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'column',
    height: '135.63px',
    width: '100%',
    minWidth: '140px',
    //maxWidth: '230.5px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
});

const BodyCards = styled(Stack)({
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    boxSizing: 'border-box',
    alignSelf: 'stretch',
    margin: '0px',
    height: '97px',
    width: '80%',
});
const Icons = styled("img")({
    position: 'relative',
    isolation: 'isolate',
    padding: '0px',
    boxSizing: 'content-box',
    minHeight: '50px',
    width: '50px',
    margin: '0px',
    borderRadius: '4px',
    //backgroundColor: '#ECECF9'
});

const BodyText = styled(Stack)({
    display: 'flex',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0px',
    boxSizing: 'border-box',
    margin: '8px 0px 0px 0px',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
});

const Titulo = styled(Typography)({
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontSynthesis: 'none',
    color: 'rgba(0, 0, 0, 0.54)',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '12px',
    letterSpacing: '-0.4742029309272766px',
    textDecoration: 'none',
    lineHeight: '105%',
    textTransform: 'none',
    margin: '0px',
});

const Coin = styled(Typography)({
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontSynthesis: 'none',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins',
    fontWeight: '700',
    letterSpacing: '-0.4742029309272766px',
    textDecoration: 'none',
    lineHeight: '26.081161499023438px',
    textTransform: 'none',
    margin: '4px 0px 0px 0px',
});

//*section product items

const ListProduct = styled(Stack)({
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '4px',
    boxSizing: 'border-box',
    height: '100%',
    margin: '8px 0px 0px 0px',
    overflow: 'hidden',
    width: '100%',
    //backgroundColor: 'red',
    borderRadius: '8px',
    minHeight: '164px',
    overflowY: 'scroll'
});

/**Action no Product */

const SectionNoProduct = styled(Stack)({
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0px 0px 6.828890800476074px rgba(0, 0, 0, 0.12)',
    borderRadius: '4px',
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 11.706669807434082px',
    boxSizing: 'border-box',
    alignSelf: 'stretch',
    flex: '1',
    margin: '0px',
    height: '100%',
    width: '100%',
});

const ContetNoProduct = styled(Stack)({
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0px',
    boxSizing: 'border-box',
    margin: '0px',
    height: '120px',
    width: '100%',
});
const IconsNoProduct = styled("img")({
    height: '120px',
    width: '140px',
    objectFit: 'cover',
    margin: '0px',
});
const BodyTextNoProduct = styled(Stack)({
    position: 'relative',
    isolation: 'isolate',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    boxSizing: 'border-box',
    margin: '0px 0px 0px 6px',
    //height: '78.61px',
    //width: '180px',
});

const TitelNopProduct = styled(Typography)({
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontSynthesis: 'none',
    color: 'rgba(0, 0, 0, 1)',
    //fontStyle: 'normal',
    fontFamily: 'Poppins',
    fontWeight: '700',
    letterSpacing: '-0.39022237062454224px',
    textDecoration: 'none',
    lineHeight: '21.462230682373047px',
    textTransform: 'none',
    margin: '0px',
});

const ParrafoNoProduct = styled(Typography)({
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontSynthesis: 'none',
    color: 'rgba(143, 141, 141, 1)',
    fontFamily: 'Poppins',
    fontWeight: '500',
    //fontSize: '11.706669807434082px',
    letterSpacing: '-0.39022237062454224px',
    textDecoration: 'none',
    lineHeight: '12.962230682373047px',
    textTransform: 'none',
    margin: '7.804447174072266px 0px 0px 0px',
});

const BtnCarga = styled(Button)({
    backgroundColor: 'rgba(30, 34, 170, 1)',
    borderRadius: '4px',
    position: 'relative',
    isolation: 'isolate',
    //padding: '12px 24px',
    boxSizing: 'border-box',
    margin: '7.804447174072266px 0px 0px 0px',
    height: '100%',
    width: '100%',
    color: '#fff',
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#4449D8"
    },
});


/** FIN */

const portfolio = null/*[
    {
        perfil: 'conservador',
        titelPeymen: 'text one loremp 1',
        montoTotal: '13.200'
    },
    {
        perfil: 'agresivo',
        titelPeymen: 'text one loremp 2',
        montoTotal: '15.200'
    },
    {
        perfil: 'moderado',
        titelPeymen: 'text one loremp 3',
        montoTotal: '11.200'
    },
    {
        perfil: 'portafolio',
        titelPeymen: 'text one loremp 4',
        montoTotal: '13.200'
    },
    {
        perfil: 'portafolio',
        titelPeymen: 'text one loremp 5',
        montoTotal: '20.200'
    },
]
*/




export const SectionInteraction = () => {
    return (
        <Stack
            width={'100%'}
            borderRadius={'8px'}
            height={'100%'}
            minHeight={'284px'}
            maxHeight={'414px'}

            maxWidth={"1398px"}
            gap={2}
            marginTop={{ lg: '0', md: '340px', sm: '8px', xs: '8px' }}
            flexDirection={{ xs: 'column', sm: 'column', lg: 'row', md: 'row' }}
        >
            <Stack sx={{
                width: { ls: '60%', md: '80%' },
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.42)',
                minHeight: '414px',
                backgroundColor: 'red',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant="h4" color="#fff">imagen Charts</Typography>

            </Stack>
            <Stack
                sx={{
                    width: { lg: '40%', md: '80%' },
                    backgroundColor: 'rgba(255, 255, 255, 0.52)',
                }}
                //padding={'1px'}
                gap={1}
            //minWidth={'405px'}
            >
                <TitelSection>

                    <TitelSectionBox variant='h6' >Valores Invertidos </TitelSectionBox>
                </TitelSection>
                <Stack
                    gap={2}
                    flexDirection={'row'}

                >
                    <Cards>
                        <BodyCards gap={0.1}>
                            <Icons alt='Icons Monety' src={icons_Money} />
                            <BodyText>
                                <Titulo>Valor Actual</Titulo>
                                <Coin
                                    fontSize={'clamp(1.4em, 6vw, 1.8em)'}
                                >{`$ ${'8.480'}`}</Coin>
                            </BodyText>
                        </BodyCards>
                    </Cards>
                    <Cards>
                        <BodyCards>
                            <Icons alt='Icons Rentability' src={icons_Rentavility} />
                            <BodyText>
                                <Titulo>Rentabilidad</Titulo>
                                <Coin
                                    fontSize={'clamp(1.4em, 6vw, 1.8em)'}
                                >{`$ ${'18.480'}`}</Coin>
                            </BodyText>
                        </BodyCards>
                    </Cards>
                </Stack>
                <TitelSection>
                    <TitelSectionBox variant='h6'>Productos Activos </TitelSectionBox>
                </TitelSection>
                {(portfolio != null)
                    ? (<ListProduct
                        gap={0.5}
                        overflow={'hidden'}
                        maxHeight={'160px'}

                    >

                        {portfolio.map(({ perfil, titelPeymen, montoTotal }) => {

                            return (<PeymenCards
                                key={titelPeymen}
                                perfil={perfil}
                                titelPeymen={titelPeymen}
                                montoTotal={montoTotal} />)
                        })
                        }
                    </ListProduct>)
                    : (<SectionNoProduct>
                        <ContetNoProduct>
                            <IconsNoProduct src={icons_NoProduct} alt={'Cargando Product'} />
                            <BodyTextNoProduct>
                                <TitelNopProduct fontSize={'clamp(12px, 5vw, 32px)'}>Creemos en ti</TitelNopProduct>
                                <ParrafoNoProduct fontSize={'clamp(12px, 2vw, 16px)'}>La base de una buena inversión
                                    es el conocimiento
                                </ParrafoNoProduct>
                                <BtnCarga variant='text' sx={{ fontSize: 'clamp(12px, 3vw, 16px)' }} >Aprende de los que saben</BtnCarga>
                            </BodyTextNoProduct>
                        </ContetNoProduct>
                    </SectionNoProduct>)}


            </Stack>
        </Stack >
    )
}
