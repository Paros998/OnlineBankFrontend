import React from 'react';
import { LocationHeaders } from '../../../enums/LocationHeaders';
import ClientCardLayout from '../../../components/ClientCardLayout/ClientCardLayout';
import GeneratedLoanData from './GeneratedLoanData/GeneratedLoanData';
import ActionButtons from './ActionButtons/ActionButtons';

const GeneratedLoan = () => {
  return (
    <ClientCardLayout location={LocationHeaders.NewLoan} style={{ height: '45.2rem' }}>
      <GeneratedLoanData />

      <hr className='w-50 bg-secondary-light mt-5 mb-5' />

      <ActionButtons />
    </ClientCardLayout>
  );
};

export default GeneratedLoan;
