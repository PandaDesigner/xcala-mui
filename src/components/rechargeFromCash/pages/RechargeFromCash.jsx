import React, { useState } from 'react';

import { HeaderFromCash } from '../components/HeaderFromCash';
import { BodyFromCash } from '../components/BodyFromCash';
import { CardRechargeCash } from '../components/CardRechargeCash';

export const RechargeFromCash = () => {
  const [values, setValues] = useState({
    numberformat: '',
    banco: ''
  });

  const [views, setViews] = useState(true);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleViewChange = () => {
    setViews((prev) => !prev);
  };

  return (
    <>
      <HeaderFromCash />
      {views ? (
        <BodyFromCash
          handleChange={handleChange}
          values={values}
          handleViewChange={handleViewChange}
        />
      ) : (
        <CardRechargeCash />
      )}
    </>
  );
};
