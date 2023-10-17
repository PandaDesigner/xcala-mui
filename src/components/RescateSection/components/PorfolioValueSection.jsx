import React from 'react'
import {
  DeteilValue,
  PorfolioStack,
  ValuePorfolio,
} from '../../detailPortafolioView'
import {
  CreateDatePorfolio,
  RetornoEsperado,
  TitlePortafolioValue,
} from './Rescue.component'

export const PorfolioValueSection = () => {
  return (
    <PorfolioStack
      alignItems={{md: 'flex-end', xs: 'center'}}
      mb={{md: '0px', xs: '48px'}}
    >
      <ValuePorfolio>
        <TitlePortafolioValue
          fontSize={{md: '54px', xs: '32px'}}
          marginTop={{md: '0px', xs: '32px'}}
        >{`$${'3.750.000'}`}</TitlePortafolioValue>
      </ValuePorfolio>
      <DeteilValue alignItems={{md: 'flex-end', xs: 'center'}}>
        <RetornoEsperado>Monto a Rescatar</RetornoEsperado>
        <CreateDatePorfolio>
          Rescate realizado hoy, 16/10/2023
        </CreateDatePorfolio>
      </DeteilValue>
    </PorfolioStack>
  )
}
