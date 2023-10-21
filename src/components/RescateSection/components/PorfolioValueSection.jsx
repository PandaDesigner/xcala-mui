import React from 'react'
import {
  DeteilValue,
  PorfolioStack,
  ValuePorfolio,
} from '../../detailPortafolioView'
import {
  CreateDatePorfolio,
  ExpectedReturnValue,
  TitlePortafolioValue,
} from './Rescue.component'
//import {numberFormat} from '../handler'

export const PorfolioValueSection = ({rescueValue = 0}) => {
  return (
    <PorfolioStack
      display={rescueValue > 0 ? 'flex' : 'none'}
      alignItems={{md: 'flex-end', xs: 'center'}}
      mb={{md: '0px', xs: '48px'}}
    >
      <ValuePorfolio>
        <TitlePortafolioValue
          fontSize={{md: '54px', xs: '32px'}}
          marginTop={{md: '0px', xs: '32px'}}
        >{`$${rescueValue.toLocaleString('es-ES')}`}</TitlePortafolioValue>
      </ValuePorfolio>
      <DeteilValue alignItems={{md: 'flex-end', xs: 'center'}}>
        <ExpectedReturnValue>Monto a Rescatar</ExpectedReturnValue>
        <CreateDatePorfolio>
          Rescate realizado hoy, 16/10/2023
        </CreateDatePorfolio>
      </DeteilValue>
    </PorfolioStack>
  )
}
