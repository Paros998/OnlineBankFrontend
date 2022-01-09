import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { LoanModel } from '../interfaces/DatabaseModels/LoanModel';
import { useCurrentUser } from './CurrentUserContext';
import { ClientModel } from '../interfaces/DatabaseModels/ClientModel';
import { useFetchRawData } from '../hooks/useFetchRawData';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NewLoanFormikValues } from '../interfaces/formik/NewLoanFormikValues';
import { useHistory } from 'react-router-dom';
import { LoanContextModel } from '../interfaces/LoanContextModel';

const LoanContext = createContext<unknown>(null);

export const useLoan = () => useContext(LoanContext) as LoanContextModel;

interface LoanProviderProps {
  children: ReactNode;
}

const LoanProvider: FC<LoanProviderProps> = ({ children }) => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const [isPayLoanPending, setIsPayLoanPending] = useState(false);
  const history = useHistory();
  const { rawData, isPending, fetchData: fetchActiveLoan } = useFetchRawData<LoanModel>(
    `loans/client/${currentUser?.clientId}`,
  );

  const currentLoan = rawData ?? {} as LoanModel;

  const handlePayLoanRate = async () => {
    setIsPayLoanPending(true);
    try {
      await axios.patch(`/loans/pay-rate/${currentUser?.clientId}`);
      await fetchActiveLoan();
      toast.success('Spłacenie raty zostało wykonane pomyślnie');
    } catch {
      toast.error('Wystąpił błąd podczas spłaty raty');
    } finally {
      setIsPayLoanPending(false);
    }
  };

  const handleCheckCreditWorthiness = async (values: NewLoanFormikValues) => {
    try {
      const { data: generatedLoan } = await axios.post('/loans/calculate', values);
      history.replace({
        pathname: '/client/loans',
        search: `?initial-rate-number=${values.initialRatesNumber}&basic-loan-amount=${values.basicLoanAmount}`,
      });

      history.push({
        pathname: '/client/loans/new-loan',
        state: generatedLoan,
      });
      toast.info('Formularz dotyczący zdolności kredytowej został wysłany');
    } catch {
      toast.error('Nie udało się wysłać formularzu dotyczącego zdolności kredytowej');
    }
  };

  const contextModel: LoanContextModel = {
    currentLoan,
    isPending,
    isPayLoanPending,
    handlePayLoanRate,
    handleCheckCreditWorthiness,
  };

  return (
    <LoanContext.Provider value={contextModel}>
      {children}
    </LoanContext.Provider>
  );
};

export default LoanProvider;
