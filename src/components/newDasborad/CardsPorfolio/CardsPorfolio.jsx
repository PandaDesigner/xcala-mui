import {Divider, Grid, Stack, Typography, Box} from '@mui/material'
import {HeadContainerCardsPorfolio} from './HeadContainerCardsPorfolio'
import {
  BottonsIconosPerfile,
  CardsInfo,
  CardsProduct,
  ExpectedTime,
  ReantabilityTitel,
  RentabilityValue,
  TitelCards,
} from '../CardsProduct/CardsProductComponents'
import {CardsButtomGroup} from '../CardsProduct/CardsButtomGroup'
import {handelProfileIcon} from '../../../helper/FuntionesHelpers'
import CharstComponet from './ChartsComponent'

const miData = {
  labels: ['Global Real Estate', 'Balnace Global', 'US Venture Opportunities'],
  datasets: [
    {
      label: 'Fondo',
      data: [50, 15, 35],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF1384', '#31A2EB', '#FFCE16'],
    },
  ],
}

const printLabelData = ({labels, datasets}) => {
  return datasets.map((item, index) => {
    const {
      label: titelLabel,
      data: dataLabel,
      backgroundColor: colorLabel,
      hoverBackgroundColor,
    } = item

    return colorLabel.map((item, index) => {
      return (
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'start'}
          gap={1}
        >
          <Typography variant='span'>
            {
              <Box
                display='inline-block'
                backgroundColor={item}
                borderRadius={100}
                width={'8px'}
                height={'8px'}
              >
                {''}
              </Box>
            }
            {'   '}
          </Typography>
          <Typography fontSize={12} key={labels[index]}>
            {`${labels[index]} ${dataLabel[index]}%`}
          </Typography>
        </Stack>
      )
    })
  })
}

export const CardsPorfolio = ({
  fundName = 'Portafolio One',
  rentabilityFound = '20',
  foundTerm = 'Anualizado a largo plazo',
  ProfileCards = 'Agresivo',
  dataChart = miData,
}) => {
  return (
    <Grid item md={4} xs={8}>
      <CardsProduct spacing={2} alignItems={'center'}>
        <HeadContainerCardsPorfolio fundName={fundName} fundPerfile={true} />
        <Stack width={'93%'} paddingBottom={'16px'} gap={2}>
          <TitelCards>
            <BottonsIconosPerfile src={handelProfileIcon(ProfileCards)} />
            <CardsInfo spacing={'20px'}>
              <ExpectedTime>{`Participación de ${dataChart.labels.length} Fondos`}</ExpectedTime>
              <ReantabilityTitel fontSize={'clamp(0.96rem, 2vw, 1.2rem)'}>
                Rentabilidad Esperada
              </ReantabilityTitel>
              <RentabilityValue>{`${rentabilityFound}%`}</RentabilityValue>
              <ExpectedTime>{`(${foundTerm})`}</ExpectedTime>
            </CardsInfo>
          </TitelCards>
          <Divider variant='fullWidth' width='100%' />
        </Stack>
        <Stack width={'93%'} borderRadius={2} backgroundColor={'#E7F3FF'}>
          {' '}
          {/*Este es el mardito */}
          <Stack
            padding={2}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Stack
              height={'100%'}
              alignItems={'start'}
              justifyContent={'space-between'}
            >
              <Typography fontWeight={700} fontSize={'12pt'}>
                Fondos del portafolio
              </Typography>
              <Stack height={'90%'} justifyContent={'space-around'}>
                {printLabelData(dataChart)}
              </Stack>
            </Stack>
            <CharstComponet
              dataChart={dataChart}
              width={'100%'}
              height={'100%'}
            />
          </Stack>
        </Stack>
        <Stack width={'93%'} paddingBottom={'16px'}>
          <CardsButtomGroup />
        </Stack>
      </CardsProduct>
    </Grid>
  )
}
