import {Typography} from '@mui/material'
import {HeaderRescueSection} from '../components/HeaderRescueSection'
import {CardsContinersRescue} from '../components/CardsContinersRescue'

export const RescuePages = ({rescueValue = 3750000}) => {
  return (
    <>
      <HeaderRescueSection rescueValue={rescueValue} />
      <CardsContinersRescue />
    </>
  )
}
