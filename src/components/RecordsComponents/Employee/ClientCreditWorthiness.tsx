import React, {FC, memo } from 'react';
import {ClientCreditWorthinessModel} from "../../../interfaces/DatabaseModels/ClientCreditWorthinessModel";

interface ClientCreditWorthinessProps {
  clientCreditWorthiness: ClientCreditWorthinessModel;
  suggestedDecision:decision;
  sumOfBalanceAssessment:string;
  monthlyBalanceAssessment:string;
}

interface decision {
  label: string;
  value: string;
}

const ClientCreditWorthiness: FC<ClientCreditWorthinessProps> = ({clientCreditWorthiness,
                                                                   sumOfBalanceAssessment,
                                                                   monthlyBalanceAssessment,
                                                                   suggestedDecision}) => {
  const {sumOfBalance, monthlyBalance, sumOfOutgoing, sumOfIncoming} = clientCreditWorthiness;

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