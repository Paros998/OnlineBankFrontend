import React, {FC, useState} from 'react';
import {ClientCreditWorthinessModel} from "../../../interfaces/DatabaseModels/ClientCreditWorthinessModel";
import {LoanModel} from "../../../interfaces/DatabaseModels/LoanModel";

interface ClientCreditWorthinessProps{
  clientCreditWorthiness: ClientCreditWorthinessModel;
  clientLoan: LoanModel;
}

const ClientCreditWorthiness:FC<ClientCreditWorthinessProps> = ({clientCreditWorthiness,clientLoan}) => {
  const {toRepaidOff,basicRateAmount} = clientLoan;
  const {sumOfBalance,monthlyBalance,sumOfOutgoing,sumOfIncoming} = clientCreditWorthiness;

  const [sumOfBalanceAssessment,setSumOfBalanceAssessment] = useState<string>('');
  const [monthlyBalanceAssessment,setMonthlyBalanceAssessment] = useState<string>('');

  const suggestedDecision = () =>{
    if(sumOfBalance > toRepaidOff * 1.2)
      setSumOfBalanceAssessment('text-success')
    else if( sumOfBalance >= toRepaidOff)
      setSumOfBalanceAssessment('text-warning')
    else setSumOfBalanceAssessment('text-primary')

    if(monthlyBalance > basicRateAmount * 1.2)
      setMonthlyBalanceAssessment('text-success')
    else if( monthlyBalance >= basicRateAmount)
      setMonthlyBalanceAssessment('text-warning')
    else setMonthlyBalanceAssessment('text-primary')

    if(sumOfBalanceAssessment || monthlyBalanceAssessment === 'text-primary')
      return <span className='text-primary'>Odrzucenie Prośby</span>
    else if(sumOfBalanceAssessment || monthlyBalanceAssessment === 'text-warning')
      return <span className='text-warning'>Możliwa Akceptacja Prośby</span>
    else return <span className='text-success'>Zaakceptowanie Prośby</span>
  }

  return (
    <section className='my-3 hstack'>
      <div className='mx-1'>
        Całkowite Przychody :{sumOfIncoming}
      </div>

      <div className='mx-1'>
        Całkowite Wydatki :{sumOfOutgoing}
      </div>

      <div className={`mx-1 ${sumOfBalanceAssessment}`}>
        Całkowite Saldo :{sumOfBalance}
      </div>

      <div className={`mx-1 ${monthlyBalanceAssessment}`}>
        Miesięczne Saldo :{monthlyBalance}
      </div>

      <div className='mx-1'>
        Sugerowana Decyzja :{suggestedDecision()}
      </div>
    </section>
  );
};

export default ClientCreditWorthiness;