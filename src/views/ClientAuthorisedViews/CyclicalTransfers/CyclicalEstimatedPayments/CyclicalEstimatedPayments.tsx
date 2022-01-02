import React from 'react';
import LabeledProgressBar from '../../../../components/LabeledProgressBar/LabeledProgressBar';
import CardTemplate from '../../../../components/Cards/CardTemplate';

// TODO Connect with BE

const CyclicalEstimatedPayments = () => {
  return (
    <CardTemplate
      header='Prognoza 30 dni'
      headerClassName='fs-2'
      headerDiamondClassName='fs-6'
      className='mt-4 w-100 ms-0 border-secondary h-75'
    >
      <div className='d-flex justify-content-between mt-4'>
        <h5 className='fw-bold'>Suma wydatków:</h5>
        <h5 className='fw-bold'>2314,30 PLN</h5>
      </div>

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

export default CyclicalEstimatedPayments;
