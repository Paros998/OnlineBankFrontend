import React from 'react';
import { Cash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import CardTemplate from '../../../../components/Cards/CardTemplate';
import CenteredSpinner from '../../../../components/CenteredSpinner/CenteredSpinner';
import ActiveLoanData from './ActiveLoanData/ActiveLoanData';
import { useLoan } from '../../../../contexts/LoanContext';

const ActiveLoan = () => {
  const { currentLoan, isPending, handlePayLoanRate } = useLoan();
  return (
    <CardTemplate
      header="Aktualna pożyczka"
      headerDiamondClassName="fs-6"
      className="mt-5 w-100 h-100 ms-0 border-secondary"
    >
      <>
        <CenteredSpinner isPending={isPending} />

        <ActiveLoanData />

        {
          currentLoan?.isActive && (
            <div className="text-center">
              <Button
                onClick={handlePayLoanRate}
                className="fw-bold"
              >
                <Cash /> Zapłać ratę
              </Button>
            </div>
          )
        }
      </>
    </CardTemplate>
  );
};

export default ActiveLoan;
