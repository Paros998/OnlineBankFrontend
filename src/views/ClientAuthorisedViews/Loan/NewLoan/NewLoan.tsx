import React, { memo, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { NewLoanValidationSchema } from '../../../../validation/NewLoanValidationSchema';
import NewLoanForm from './NewLoanForm/NewLoanForm';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';
import { NewLoanFormikValues } from '../../../../interfaces/formik/NewLoanFormikValues';
import { getTodayDate } from '../../../../utils/getTodayDate';
import { getISODate } from '../../../../utils/getISODate';
import { useQuery } from '../../../../hooks/useQuery';

const NewLoan = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const query = useQuery();
  const history = useHistory();

  console.log(Number(query.get('initial-rate-number')));

  const initialFormikValues: NewLoanFormikValues = useMemo(() => ({
    initialRatesNumber: Number(query.get('initial-rate-number')),
    basicLoanAmount: Number(query.get('basic-loan-amount')),
    concludedDate: getTodayDate('DD.MM.YYYY'),
    clientId: currentUser?.clientId || 0,
  }), [query, currentUser?.clientId]);

  const handleSubmit = async (values: NewLoanFormikValues) => {
    const newLoanPostValues = {
      ...values,
      transferDate: getISODate(values.concludedDate),
    };

    try {
      // const { data: generatedLoan } = await axios.post('/loans/calculate', newLoanPostValues);
      history.replace({
        pathname: '/client/loans',
        search: `?initial-rate-number=${values.initialRatesNumber}&basic-loan-amount=${values.basicLoanAmount}`,
      });

      history.push({
        pathname: '/client/loans/new-loan',
        state: values,
      });
      toast.success('Formularz dotyczący zdolności kredytowej został wysłany');
    } catch {
      toast.error('Nie udało się wysłać formularzu dotyczącego zdolności kredytowej');
    }
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      onSubmit={handleSubmit}
      validationSchema={NewLoanValidationSchema}
    >
      <NewLoanForm />
    </Formik>
  );
};

export default memo(NewLoan);
