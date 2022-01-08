import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Cash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';
import { useFetchRawData } from '../../../../hooks/useFetchRawData';
import CardTemplate from '../../../../components/Cards/CardTemplate';
import CenteredSpinner from '../../../../components/CenteredSpinner/CenteredSpinner';
import { LoanModel } from '../../../../interfaces/DatabaseModels/LoanModel';
import ActiveLoanData from './ActiveLoanData/ActiveLoanData';

const ActiveLoan = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData: currentLoan, isPending } = useFetchRawData<LoanModel>(
    `loans/client/${currentUser?.clientId}`,
  );

  const handlePayLoanRate = async () => {
    try {
      await axios.patch(`/loans/pay-rate/${currentUser?.clientId}`);
      toast.success('Spłacenie raty zostało wykonane pomyślnie');
    } catch {
      toast.error('Wystąpił błąd podczas spłaty raty');
    }
  };

  return (
    <CardTemplate
      header="Aktualna pożyczka"
      headerDiamondClassName="fs-6"
      className="mt-5 w-100 h-100 ms-0 border-secondary"
    >
      <>
        <CenteredSpinner isPending={isPending}/>

        <ActiveLoanData currentLoan={currentLoan}/>

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
