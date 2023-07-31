import { Box, Button, Stack, Typography, styled } from '@mui/material'

import icons_Money from '../../assets/images/iconsMoney.svg'
import icons_Rentavility from '../../assets/images/iconsRentability.svg'

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
    //lineHeight: '26.081161499023438px',
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
            marginTop={{ lg: '0', md: '340px', sm: '250px', xs: '245px' }}
            flexDirection={{ xs: 'column-reverse', sm: 'column-reverse', lg: 'row', md: 'row' }}
        >
            <Stack sx={{
                width: { ls: '60%', md: '80%' },
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.42)',
                minHeight: '414px',
                backgroundColor: 'red',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h4" color="#fff">imagen Charts</Typography>

            </Stack>
            <Stack
                sx={{
                    width: { lg: '40%', md: '80%' },
                    backgroundColor: 'rgba(255, 255, 255, 0.52)',
                }}
                padding={'8px'}
                gap={1}
            //minWidth={'405px'}
            >
                <TitelSection>

                    <TitelSectionBox variant='h6'>Valores Invertidos </TitelSectionBox>
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
                                    fontSize={{ lg: '28px', md: '28px', sm: '28px', xs: '22px' }}
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
                                    fontSize={{ lg: '28px', md: '28px', sm: '28px', xs: '22px' }}
                                >{`$ ${'18.480'}`}</Coin>
                            </BodyText>
                        </BodyCards>
                    </Cards>
                </Stack>
                <TitelSection>

                    <TitelSectionBox variant='h6'>Productos Activos </TitelSectionBox>
                </TitelSection>
            </Stack>

        </Stack>
    )
}
