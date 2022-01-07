import React from 'react';
import LabeledProgressBar from '../../../../components/LabeledProgressBar/LabeledProgressBar';
import CardTemplate from '../../../../components/Cards/CardTemplate';
import { transferCategoryClassNames } from '../../../../constants/transferCategoryClassNames';
import { useCyclicalTransfers } from '../../../../contexts/CyclicalTransferContext';

const CyclicalEstimatedPayments = () => {
  const { estimatedData } = useCyclicalTransfers();
  const { data: { values, totalSum } } = estimatedData;

  return (
    <CardTemplate
      header="Prognoza 30 dni"
      headerClassName="fs-2"
      headerDiamondClassName="fs-6"
      className="mt-4 w-100 ms-0 border-secondary h-75"
    >
      <div className="d-flex justify-content-between mt-4">
        <h5 className="fw-bold">Suma wydatków:</h5>
        <h5 className="fw-bold">{totalSum} PLN</h5>
      </div>

      <hr className="text-secondary mt-5 mb-5"/>

      {
        values.map(({ category, amount, percent}, index) => {
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

export default CyclicalEstimatedPayments;
