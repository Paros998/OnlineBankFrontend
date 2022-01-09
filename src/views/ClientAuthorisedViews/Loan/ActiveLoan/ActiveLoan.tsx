import React from 'react';
import { Cash } from 'react-bootstrap-icons';
import CardTemplate from '../../../../components/Cards/CardTemplate';
import CenteredSpinner from '../../../../components/CenteredSpinner/CenteredSpinner';
import ActiveLoanData from './ActiveLoanData/ActiveLoanData';
import { useLoan } from '../../../../contexts/LoanContext';
import RequestSubmitButton from '../../../../components/SubmitButton/RequestSubmitButton';

const ActiveLoan = () => {
  const { currentLoan, isPending, handlePayLoanRate, isPayLoanPending } = useLoan();
  return (
    <CardTemplate
      header="Aktualna pożyczka"
      headerDiamondClassName="fs-6"
      className="mt-5 w-100 h-100 ms-0 border-secondary"
      bodyClassName='pt-2'
    >
      <>
        <CenteredSpinner isPending={isPending} />

        <ActiveLoanData />

        {
          currentLoan.isActive && !isPending && (
            <div className="text-center mt-3">
              <RequestSubmitButton
                props={{ onClick: handlePayLoanRate, className: "fw-bold rounded-pill w-50" }}
                isSubmitting={isPayLoanPending}
              >
                <Cash /> Zapłać ratę
              </RequestSubmitButton>
            </div>
          )
        }
      </>
    </CardTemplate>
  );
};

export default ActiveLoan;
