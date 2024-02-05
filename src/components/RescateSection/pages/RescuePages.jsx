import { HeaderRescueSection } from '../components/HeaderRescueSection';
import { CardsContinersRescue } from '../components/CardsContinersRescue';
import { useState } from 'react';
import { ModalRescueCash } from '../../rechargeFromCash/components/ModalRescueCash';

const btnContent = 'Rescartar fondo';
export const RescuePages = () => {
  const [rescueValue, setRescueValue] = useState(-3750000);
  return (
    <>
      <HeaderRescueSection rescueValue={rescueValue} />
      <CardsContinersRescue btnContent={btnContent} />
    </>
  );
};
