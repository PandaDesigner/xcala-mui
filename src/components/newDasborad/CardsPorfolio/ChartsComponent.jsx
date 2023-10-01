import {React} from 'react'
import {Stack, Typography} from '@mui/material'
import {useState} from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)
/* 
const labels = [
	"Global Real Estate",
	"Balnace Global",
	"US Venture Opportunities",
];
const datasets = [
	{
		label: "Fondo",
		data: [50, 15, 35],
		backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		hoverBackgroundColor: ["#FF1384", "#31A2EB", "#FFCE16"],
	},
]; */

const miOptions = {
  maintainAspectRatio: true, // Para permitir dimensiones personalizadas
  plugins: {
    legend: {
      display: false,
    },
  },
}

const CharstComponet = ({dataChart, options = miOptions}) => {
  return (
    <Stack
      height={'100%'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Doughnut
        height={'100%'}
        width={'100%'}
        data={dataChart}
        options={miOptions}
      />
    </Stack>
  )
}

export default CharstComponet
