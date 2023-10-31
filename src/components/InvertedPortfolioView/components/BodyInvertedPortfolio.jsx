import {Box, Divider, Stack, Tab, Tabs, Typography, styled} from '@mui/material'
import {ItemDescription} from './itemDescription'
import {TabletInverted} from './TabletInverted'
import {useState} from 'react'

const SectionGeneralCondit = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  height: '100%',
  minHeight: '400px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  width: '100%',
})
const GeneralConditionCard = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  flex: '1',
  margin: '0px',
  width: '100%',
  //height: '560px',
})
const GeneralConditionHead = styled(Stack)({
  background:
    'linear-gradient(-3.010000000000005deg, rgba(30, 34, 170, 1) -23.35634030850793%, rgba(30, 34, 170, 1) 154.27856830737326%)',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '20px 30px',
  boxSizing: 'border-box',
  width: '100%',
  margin: '0px',
  height: '67px',
})
const CondicionesGenerales = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '18px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

const GeneralConditionBody = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 16px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  flex: '1',
  width: '100%',
  gap: '1rem',
})

const ItemContentDescription = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '12px',
  boxSizing: 'border-box',
  //height: '27px',
})
const TitleItemContent = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'semiBold',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: 'clamp(0.75rem, 0.5813rem + 1.5vw, 1.125rem)',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})
const ValueItemContent = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  color: 'rgba(24, 40, 73, 1)',
  fontStyle: 'Bold',
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: 'clamp(0.75rem, 0.5813rem + 1.5vw, 1.125rem)',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

const Divaider = styled(Divider)({
  border: '1px solid rgba(30, 34, 170, 1)',
  alignSelf: 'stretch',
  width: '100%',
})

const GeneralConditionFooter = styled(Stack)({
  backgroundColor: 'rgba(30, 34, 170, 1)',
  borderRadius: '0px 0px 8px 8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  //height: '67px',
})

const TitleItemFooter = styled(Typography)({
  textAlign: 'left',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: '#fff',
  fontStyle: 'semiBold',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: ' clamp(0.875rem, 0.25rem + 2vw, 1.375rem)',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})
const ValueItemFooter = styled(Typography)({
  textAlign: 'right',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: '#fff',
  fontStyle: 'Bold',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: 'clamp(0.875rem, 0.25rem + 2vw, 1.375rem)',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

/** DistributionValue */

const DistributionValue = styled(Stack)({
  backgroundColor: 'rgba(85, 118, 209, 1)',
  border: '0.41rem solid transparent',
  borderImage:
    'linear-gradient(to right, rgba(30,34,170,1) , rgba(112,151,217,1)) 1',
  borderRadius: '8px',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  //height: '430px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  boxSizing: 'border-box',
})

const HeadContainer = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  flex: '1 0 1 auto',
  margin: '0px auto',
  height: '87.5px',
  width: '100%',
  maxWidth: '300px',
  textAlign: 'center',
})

const HeadTitleDistribution = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '22px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '105%',
  textTransform: 'none',
})
const HeadTitleDistributionSpan = styled(Typography)({
  whiteSpace: 'pre-wrap',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '22px',
  letterSpacing: '0px',
  textDecoration: 'none',
  lineHeight: '105%',
  textTransform: 'none',
})
const HeadTitleDistributio = styled(Stack)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(255, 255, 255, 1)',
  fontStyle: 'normal',
  fontFamily: 'unset',
  fontWeight: '400',
  fontSize: '22px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  height: '76px',
  width: '341px',
  margin: '0px',
})
const SectionDistribucion = styled(Stack)({
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '13px 0px 0px 0px',
  //height: '297.5px',
  gap: '1rem',
  width: '100%',
})

const ContentTitleTable = styled(Stack)({
  display: 'flex',
  position: 'relative',
  isolation: 'isolate',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px',
  boxSizing: 'border-box',
  alignSelf: 'stretch',
  margin: '0px',
})
const TitleTableName = styled(Typography)({
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  fontSynthesis: 'none',
  color: 'rgba(0, 0, 0, 1)',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  fontWeight: '600',
  fontSize: '24px',
  letterSpacing: '0px',
  textDecoration: 'none',
  textTransform: 'none',
  margin: '0px',
})

/**Tabs Component */
/*
const CustomTabPanel = (props) => {
  const {children, value, index, ...other} = props
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </Box>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.element,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
*/
export const BodyInvertedPortfolio = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Stack
      sx={{
        width: '90%',
        marginTop: '48px',
        borderRadius: '16px',
        position: 'relative',
        marginX: 'auto',
        isolation: 'isolate',
        marginBottom: '4rem',
      }}
      gap={4}
    >
      <Stack
        sx={{width: '100%'}}
        gap={2}
        flexDirection={{md: 'row', xs: 'column'}}
      >
        <Stack
          flex={'1 1 1 auto'}
          sx={{
            backgroundColor: 'white',
            width: '100%',
            backgroundColor: 'red',
            borderRadius: '8px',
            //border: '1px solid red',
            //height: '100%',
          }}
        ></Stack>
        <Stack
          flex={'1 1 1 auto'}
          sx={{
            backgroundColor: '#fff',
            width: '100%',
            //border: '1px solid red',
            height: '100%',
          }}
        >
          <SectionGeneralCondit>
            <GeneralConditionCard>
              <GeneralConditionHead>
                <CondicionesGenerales>
                  Condiciones Generales
                </CondicionesGenerales>
              </GeneralConditionHead>
              <GeneralConditionBody>
                <ItemContentDescription>
                  <TitleItemContent>Tienes</TitleItemContent>
                  <ValueItemContent>$ 102.002</ValueItemContent>
                </ItemContentDescription>
                <ItemContentDescription>
                  <TitleItemContent>Dividendos</TitleItemContent>
                  <ValueItemContent>$ 4.600</ValueItemContent>
                </ItemContentDescription>
                <ItemContentDescription>
                  <TitleItemContent>Rescates</TitleItemContent>
                  <ValueItemContent>$ 0</ValueItemContent>
                </ItemContentDescription>
                <Divaider />
                <ItemContentDescription>
                  <TitleItemContent>Total Depositado</TitleItemContent>
                  <ValueItemContent>$ 200.000</ValueItemContent>
                </ItemContentDescription>
                <ItemContentDescription>
                  <TitleItemContent>Comisión de salida:</TitleItemContent>
                  <ValueItemContent>Según reglamento fondos</ValueItemContent>
                </ItemContentDescription>
                <ItemContentDescription>
                  <TitleItemContent>Plazo de rescate:</TitleItemContent>
                  <ValueItemContent>Según reglamento fondos</ValueItemContent>
                </ItemContentDescription>
              </GeneralConditionBody>
              <GeneralConditionFooter>
                <ItemContentDescription>
                  <TitleItemFooter>Ganancia / Pérdida:</TitleItemFooter>
                  <ValueItemFooter>-$ 370.000</ValueItemFooter>
                </ItemContentDescription>
              </GeneralConditionFooter>
            </GeneralConditionCard>
          </SectionGeneralCondit>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <DistributionValue>
          <HeadContainer>
            <HeadTitleDistribution>
              Distribución porcentual de tus{' '}
              <HeadTitleDistributionSpan variant='span'>
                inversiones
              </HeadTitleDistributionSpan>
            </HeadTitleDistribution>
          </HeadContainer>
          <SectionDistribucion>
            {/** un map de elementos repetidos */}
            <ItemDescription />
            <ItemDescription />
            <ItemDescription />
            <ItemDescription />
            <ItemDescription />
          </SectionDistribucion>
        </DistributionValue>
      </Stack>
      <Stack
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '8px',
          display: 'flex',
          position: 'relative',
          isolation: 'isolate',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: '32px',
          boxSizing: 'border-box',
          boxShadow: '0px 0px 8px rgba(61, 64, 75, 0.15)',
        }}
      >
        <ContentTitleTable>
          <TitleTableName variant='h2'>Cartola de movimientos</TitleTableName>
        </ContentTitleTable>
        <Box sx={{width: '100%', my: 2}}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label='Tabs where selection follows focus'
            selectionFollowsFocus
          >
            <Tab label='Realizados' />
            <Tab label='Pendientes' />
          </Tabs>
        </Box>
        {/**componentes de la tabla  */}
        <TabletInverted />
      </Stack>
    </Stack>
  )
}
