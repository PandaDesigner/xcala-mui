import React from 'react';
import { HeaderFromCash } from '../components/HeaderFromCash';
import { CardsContinersRescue } from '../../RescateSection/components/CardsContinersRescue';
import { ModalRescueCash } from '../components/ModalRescueCash';

export const CashRescuePages = () => {
  return (
    <>
      <ModalRescueCash />
      <HeaderFromCash />
      <CardsContinersRescue
        mountFund={'90000'}
        displaySection={'row'}
        lableParcialRescue={'Rescate Parcial'}
      />
    </>
  );
};
