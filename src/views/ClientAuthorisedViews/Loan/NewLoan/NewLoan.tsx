import React, { memo, useMemo } from 'react';
import { Formik } from 'formik';
import NewLoanForm from './NewLoanForm/NewLoanForm';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';
import { NewLoanFormikValues } from '../../../../interfaces/formik/NewLoanFormikValues';
import { getTodayDate } from '../../../../utils/getTodayDate';
import { useQuery } from '../../../../hooks/useQuery';
import { useLoan } from '../../../../contexts/LoanContext';
import {NewLoanValidationSchema} from "../../../../Validation/NewLoanValidationSchema";

const NewLoan = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const query = useQuery();
  const { handleCheckCreditWorthiness } = useLoan();

  const initialFormikValues: NewLoanFormikValues = useMemo(() => ({
    initialRatesNumber: Number(query.get('initial-rate-number')),
    basicLoanAmount: Number(query.get('basic-loan-amount')),
    concludedDate: getTodayDate('YYYY-MM-DD'),
    clientId: currentUser?.clientId || 0,
  }), [query, currentUser?.clientId]);

  return (
    <Formik
      initialValues={initialFormikValues}
      onSubmit={handleCheckCreditWorthiness}
      validationSchema={NewLoanValidationSchema}
    >
      <NewLoanForm />
    </Formik>
  );
};

export default memo(NewLoan);
