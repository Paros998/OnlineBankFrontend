import React, { FC } from 'react';
import CardTemplate from "../../../../components/Cards/CardTemplate";
import LabeledProgressBar from "../../../../components/LabeledProgressBar/LabeledProgressBar";
import { TransferDisplayModel } from '../../../../interfaces/TransferDisplayModel';

interface HistoryEstimatedPaymentsProps {
  transfers: TransferDisplayModel[];
}

// TODO Connect with BE

const HistoryEstimatedPayments: FC<HistoryEstimatedPaymentsProps> = () => {
  return (
    <CardTemplate
      header='Ostatnie 30 dni'
      headerClassName='fs-2'
      headerDiamondClassName='fs-6'
      className='mt-4 w-100 ms-0 border-secondary h-75'
    >
      <div className='d-flex justify-content-between'>
        <h5 className='fw-bold'>Suma wydatków</h5>
        <h5 className='fw-bold'>Suma przychodów</h5>
      </div>

      <div className='d-flex justify-content-between'>
        <h5 className='text-warning fw-bold'>0 PLN</h5>
        <h5 className='text-success fw-bold'>0 PLN</h5>
      </div>

      <LabeledProgressBar
        wrapperProps={{ className: 'mt-3' }}
        startLabel={{ startLabelName: 'Wydatki', className: 'text-warning fw-bold' }}
        endLabel={{ endLabelName: 'Przychody', className: 'text-success fw-bold'  }}
        startProgressBarProps={{ now: 90, label: '90%', variant: 'warning' }}
        endProgressBarProps={{ now: 10, label: '10%', variant: 'success' }}
      />

      <hr className='text-secondary mt-5 mb-5'/>

      <LabeledProgressBar
        wrapperProps={{ className: 'mt-4' }}
        startLabel={{ startLabelName: 'Rachunki', className: 'text-purpel fw-bold' }}
        endLabel={{ endLabelName: '1480 PLN', className: 'fw-bold'  }}
        startProgressBarProps={{ now: 90, label: '90%', variant: 'purpel' }}
      />

      <LabeledProgressBar
        wrapperProps={{ className: 'mt-4' }}
        startLabel={{ startLabelName: 'Wydatki bieżące', className: 'text-primary fw-bold' }}
        endLabel={{ endLabelName: '1180 PLN', className: 'fw-bold'  }}
        startProgressBarProps={{ now: 70, label: '70%', variant: 'primary' }}
      />

      <LabeledProgressBar
        wrapperProps={{ className: 'mt-4' }}
        startLabel={{ startLabelName: 'Rozrywka', className: 'text-success fw-bold' }}
        endLabel={{ endLabelName: '180 PLN', className: 'fw-bold'  }}
        startProgressBarProps={{ now: 50, label: '50%', variant: 'success' }}
      />

      <LabeledProgressBar
        wrapperProps={{ className: 'mt-4' }}
        startLabel={{ startLabelName: 'Zdrowie', className: 'text-info fw-bold' }}
        endLabel={{ endLabelName: '654 PLN', className: 'fw-bold'  }}
        startProgressBarProps={{ now: 30, label: '30%', variant: 'info' }}
      />

      <LabeledProgressBar
        wrapperProps={{ className: 'mt-4' }}
        startLabel={{ startLabelName: 'Inne', className: 'text-dark fw-bold' }}
        endLabel={{ endLabelName: '321 PLN', className: 'fw-bold'  }}
        startProgressBarProps={{ now: 60, label: '60%', variant: 'dark' }}
      />
    </CardTemplate>
  );
};

export default HistoryEstimatedPayments;
