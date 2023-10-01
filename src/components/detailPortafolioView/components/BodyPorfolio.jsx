import {Stack, Typography} from '@mui/material'
import {
  ChartsPorfolio,
  ContentApp,
  DataCharts,
  DescriptionDataPorfo,
  InfoPorfolio,
  SectionDataPorfolio,
  TitelDataPorfolio,
} from './PorfolioSections.components'
import CharstComponet from '../../newDasborad/CardsPorfolio/ChartsComponent'
import {DescriptionComponent} from './DescriptionComponent'

const labels = [
  'HMC Deuda Privada Pesos',
  'HMC Balanceado Global',
  'HMC Renta Global Pesos',
  'HMC Global Real Estate Income',
  'HMC US Venture Opportunities',
  'HMC Deuda Privada Global',
]
const datasets = [
  {
    label: 'Fondo',
    data: [12.5, 12.5, 28, 24, 13, 5],
    backgroundColor: [
      '#8612FF',
      '#160BE3',
      '#0060FA',
      '#0BBAE3',
      '#0DFBBD',
      '#FFAF9C',
      '#F7C888',
      '#D47D74',
      '#D98DEB',
      '#747CD4',
      '#90F0F5',
    ],
    hoverBackgroundColor: [
      '#8612FF',
      '#160BE3',
      '#0060FA',
      '#0BBAE3',
      '#0DFBBD',
      '#FFAF9C',
      '#F7C888',
      '#D47D74',
      '#D98DEB',
      '#747CD4',
      '#90F0F5',
    ],
  },
]

const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          // Obtener el valor y el índice del segmento actual
          const label = data.labels[context.dataIndex]
          const value =
            data.datasets[context.datasetIndex].data[context.dataIndex]

          // Calcular el porcentaje y formatearlo
          const porcentaje =
            (
              (value / data.datasets[0].data.reduce((a, b) => a + b)) *
              100
            ).toFixed(2) + '%'

          // Devolver la etiqueta personalizada
          return `${label}: ${porcentaje}`
        },
      },
    },
  },
}
export const BodyPorfolio = () => {
  return (
    <ContentApp sx={{flexDirection: 'column', marginTop: '100px', gap: '50px'}}>
      <Typography variant='body1' margin={{md: '0', xs: '0 2rem'}}>
        Este portafolio fue generado mediante la metodología de Resampled
        efficient frontier, con el objetivo de buscar la combinación óptima de
        fondos de acuerdo al perfil de riesgo. [+].
      </Typography>
      <SectionDataPorfolio minHeight={'400px'}>
        <ChartsPorfolio
          height={'100%'}
          width={'50%'}
          maxWidth={'450px'}
          maxHeight={'450px'}
        >
          <DataCharts height={'100%'} width={'100%'}>
            <CharstComponet dataChart={{labels, datasets}} options={options} />
          </DataCharts>
        </ChartsPorfolio>
        <InfoPorfolio width={'50%'}>
          <TitelDataPorfolio>Condiciones generales</TitelDataPorfolio>
          <DescriptionDataPorfo gap={2}>
            <DescriptionComponent KeyDescriptions='Moneda:' KeyValues='Pesos' />
            <DescriptionComponent
              KeyDescriptions='Duración:'
              KeyValues='Indefinido'
            />
            <DescriptionComponent
              KeyDescriptions='Plazo de rescate:'
              KeyValues='Según reglamento de los fondos'
            />
            <DescriptionComponent
              KeyDescriptions='Comisión de salida:'
              KeyValues='Según reglamento de los fondos'
            />
          </DescriptionDataPorfo>
        </InfoPorfolio>
      </SectionDataPorfolio>
    </ContentApp>
  )
}
