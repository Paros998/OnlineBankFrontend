import React from 'react';
import CardTemplate from '../../../../components/Cards/CardTemplate';
import HistoryEstimatedPaymentsData from './HistoryEstimatedPaymentsData/HistoryEstimatedPaymentsData';

const HistoryEstimatedPayments = () => {
  return (
    <CardTemplate
      header="Ostatnie 30 dni"
      headerClassName="fs-2"
      headerDiamondClassName="fs-6"
      className="mt-4 w-100 ms-0 border-secondary h-75"
    >
      <HistoryEstimatedPaymentsData />
    </CardTemplate>
  );
};

export default HistoryEstimatedPayments;
