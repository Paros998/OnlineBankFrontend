import React, {FC} from 'react';
import {LoanModel} from "../../../interfaces/DatabaseModels/LoanModel";
import GeneratedLoanData from "../../../views/ClientAuthorisedViews/GeneratedLoan/GeneratedLoanData/GeneratedLoanData";

interface ClientLoanProps{
  currentLoan:LoanModel;
}

const ClientLoan:FC<ClientLoanProps> = ({currentLoan}) => {
  return <GeneratedLoanData
    currentLoan={currentLoan}
    key={currentLoan.loanId}
    additionalWrapperClassName='w-100 ms-3 pe-2 ps-1 text-light '
    additionalDataClassName={''}
    additionalLabelDataWrapperClassName={'me-4 text-light fw-bold'}
  />
};

export default ClientLoan;