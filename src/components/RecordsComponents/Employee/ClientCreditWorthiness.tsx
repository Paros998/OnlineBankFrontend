import React, {FC, memo, useEffect } from 'react';
import {ClientCreditWorthinessModel} from "../../../interfaces/DatabaseModels/ClientCreditWorthinessModel";
import {LoanModel} from "../../../interfaces/DatabaseModels/LoanModel";

interface ClientCreditWorthinessProps {
  clientCreditWorthiness: ClientCreditWorthinessModel;
  clientLoan: LoanModel;
}

interface decision {
  label: string;
  value: string;
}

let sumOfBalanceAssessment = 'text-primary';
let monthlyBalanceAssessment = 'text-primary';

let suggestedDecision:decision = {
  label: 'text-success',
  value: 'Zaakceptowanie Prośby'
};

const ClientCreditWorthiness: FC<ClientCreditWorthinessProps> = ({clientCreditWorthiness, clientLoan}) => {
  const {toRepaidOff, basicRateAmount} = clientLoan;
  const {sumOfBalance, monthlyBalance, sumOfOutgoing, sumOfIncoming} = clientCreditWorthiness;


  useEffect(() => {
    if (sumOfBalance > toRepaidOff * 1.2)
      sumOfBalanceAssessment = 'text-success';
    else if (sumOfBalance >= toRepaidOff && sumOfBalance < toRepaidOff * 1.2)
      sumOfBalanceAssessment = 'text-warning';

    if (monthlyBalance > basicRateAmount * 1.2)
      monthlyBalanceAssessment = 'text-success';
    else if (monthlyBalance >= basicRateAmount && monthlyBalance < basicRateAmount * 1.2)
      monthlyBalanceAssessment = 'text-warning';

    if (sumOfBalanceAssessment && monthlyBalanceAssessment === 'text-primary')
      suggestedDecision = {label: 'text-primary', value: 'Odrzucenie Prośby'};
    else if (sumOfBalanceAssessment && monthlyBalanceAssessment === 'text-warning')
      suggestedDecision = {label: 'text-warning', value: 'Możliwa Akceptacja Prośby'};

  }, [basicRateAmount, monthlyBalance, sumOfBalance, toRepaidOff])

  return (
    <section className='my-3 vstack text-info border-info border-1 border p-2 ms-2 rounded-card-10 fw-bold'>
      <div className='mx-1 hstack justify-content-between'>
        <span>
          Całkowite Przychody:
        </span>
        <span>
          {sumOfIncoming + "PLN"}
        </span>
      </div>

      <div className='mx-1 hstack justify-content-between'>
        <span>
          Całkowite Wydatki:
        </span>
        <span>
          {sumOfOutgoing + "PLN"}
        </span>
      </div>

      <div className={`mx-1 hstack justify-content-between ${sumOfBalanceAssessment}`}>
        <span>
          Całkowite Saldo:
        </span>
        <span>
          {sumOfBalance + "PLN"}
        </span>
      </div>

      <div className={`mx-1 hstack justify-content-between ${monthlyBalanceAssessment}`}>
        <span>
          Miesięczne Saldo:
        </span>
        <span>
          {monthlyBalance + "PLN"}
        </span>
      </div>

      <div className={`mx-1 hstack justify-content-between ${suggestedDecision.label}`}>
        <span>
          Sugerowana Decyzja:
        </span>
        <span
          className={suggestedDecision.label}
        >
          {suggestedDecision.value}
        </span>
      </div>
    </section>
  );
};

export default memo(ClientCreditWorthiness);