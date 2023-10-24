import {Typography} from '@mui/material'
import {HeaderRescueSection} from '../components/HeaderRescueSection'
import {CardsContinersRescue} from '../components/CardsContinersRescue'
import {useState} from 'react'
import {CardsResultRescue} from '../components/CardsResultRescue'

export const RescuePages = () => {
  const [rescueValue, setRescueValue] = useState(-3750000)
  return (
    <>
      <HeaderRescueSection rescueValue={rescueValue} />
      {/*<CardsContinersRescue />*/}
      <CardsResultRescue />
    </>
  )
}
