import React from 'react';
import { useLocation } from 'react-router-dom';
import { LocationHeaders } from '../../../enums/LocationHeaders';
import ClientCardLayout from '../../../components/ClientCardLayout/ClientCardLayout';
import { LoanModel } from '../../../interfaces/DatabaseModels/LoanModel';
import GeneratedLoanData from './GeneratedLoanData/GeneratedLoanData';
import ActionButtons from './ActionButtons/ActionButtons';

const GeneratedLoan = () => {
  const { state: currentLoan } = useLocation<LoanModel>();

  return (
    <ClientCardLayout location={LocationHeaders.NewLoan} style={{ height: '45.2rem' }}>
      <GeneratedLoanData currentLoan={currentLoan} />

      <hr className='w-50 bg-secondary-light mt-5 mb-5' />

      <ActionButtons currentLoan={currentLoan} />
    </ClientCardLayout>
  );
};

export default GeneratedLoan;
