import {Container, Stack, Typography} from '@mui/material'
import {HeaderInvertedPortfolio} from '../components/HeaderInvertedPortfolio'
import {BodyInvertedPortfolio} from '../components/BodyInvertedPortfolio'

export const InvertedPortfolioPage = ({rescueValue}) => {
  return (
    <>
      <HeaderInvertedPortfolio rescueValue={rescueValue} />
      <BodyInvertedPortfolio />
    </>
  )
}
