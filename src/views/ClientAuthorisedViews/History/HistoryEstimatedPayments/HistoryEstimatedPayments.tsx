import React from 'react';
import CardTemplate from '../../../../components/Cards/CardTemplate';
import LabeledProgressBar from '../../../../components/LabeledProgressBar/LabeledProgressBar';
import { useHistory } from '../../../../contexts/HistoryContext';
import { transferCategoryClassNames } from '../../../../constants/transferCategoryClassNames';

const HistoryEstimatedPayments = () => {
  const { estimatedData } = useHistory();
  const { data: { income, outgo, values } } = estimatedData;

  return (
    <CardTemplate
      header="Ostatnie 30 dni"
      headerClassName="fs-2"
      headerDiamondClassName="fs-6"
      className="mt-4 w-100 ms-0 border-secondary h-75"
    >
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold">Suma wydatków</h5>
        <h5 className="fw-bold">Suma przychodów</h5>
      </div>

      <div className="d-flex justify-content-between">
        <h5 className="text-warning fw-bold">{outgo.amount} PLN</h5>
        <h5 className="text-success fw-bold">{income.amount} PLN</h5>
      </div>

      <LabeledProgressBar
        wrapperProps={{ className: 'mt-3' }}
        startLabel={{
          startLabelName: 'Wydatki',
          className: 'text-warning fw-bold',
        }}
        endLabel={{
          endLabelName: 'Przychody',
          className: 'text-success fw-bold',
        }}
        startProgressBarProps={{
          now: outgo.percent,
          label: `${outgo.percent}%`,
          variant: 'warning',
        }}
        endProgressBarProps={{
          now: income.percent,
          label: `${outgo.percent}%`,
          variant: 'success',
        }}
      />

      <hr className="text-secondary mt-3"/>

      {
        values?.map(({ category, amount, percent }, index) => {
          const categoryClassName = transferCategoryClassNames[category];
          return (
            <LabeledProgressBar
              key={index}
              wrapperProps={{ className: 'mt-4' }}
              startLabel={{
                startLabelName: category,
                className: `${categoryClassName} fw-bold`,
              }}
              endLabel={{
                endLabelName: `${amount} PLN`,
                className: 'fw-bold',
              }}
              startProgressBarProps={{
                now: percent,
                label: `${percent}%`,
                variant: categoryClassName.split('-')[1],
              }}
            />
          );
        })
      }
    </CardTemplate>
  );
};

export default HistoryEstimatedPayments;
