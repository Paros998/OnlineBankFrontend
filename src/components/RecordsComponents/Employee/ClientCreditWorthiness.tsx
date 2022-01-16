import React, {FC, memo } from 'react';
import {ClientCreditWorthinessModel} from "../../../interfaces/DatabaseModels/ClientCreditWorthinessModel";

interface ClientCreditWorthinessProps {
  clientCreditWorthiness: ClientCreditWorthinessModel;
}

const ClientCreditWorthiness: FC<ClientCreditWorthinessProps> = ({clientCreditWorthiness}) => {
  const {sumOfBalance, monthlyBalance, sumOfOutgoing, sumOfIncoming} = clientCreditWorthiness;

  return (
    <section className='my-3 vstack text-info border-info border-1 border p-2 ms-2 rounded-card-10 fw-bold'>
      <div className='mx-1 hstack justify-content-between'>
        <span>
          Całkowite Przychody:
        </span>
        <span>
          {sumOfIncoming.toFixed(2) + "PLN"}
        </span>
      </div>

      <div className='mx-1 hstack justify-content-between'>
        <span>
          Całkowite Wydatki:
        </span>
        <span>
          {sumOfOutgoing.toFixed(2) + "PLN"}
        </span>
      </div>

      <div className={`mx-1 hstack justify-content-between`}>
        <span>
          Całkowite Saldo:
        </span>
        <span>
          {sumOfBalance.toFixed(2) + "PLN"}
        </span>
      </div>

      <div className={`mx-1 hstack justify-content-between `}>
        <span>
          Miesięczne Saldo:
        </span>
        <span>
          {monthlyBalance.toFixed(2) + "PLN"}
        </span>
      </div>

    </section>
  );
};

export default memo(ClientCreditWorthiness);