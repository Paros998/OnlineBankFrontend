import * as Yup from 'yup';

export const CreateCreditCardValidationSchema = Yup.object().shape({
  pinNumber: Yup.string().required('Podaj numer PIN').min(4, 'Numer pin musi zawierać 4 cyfry'),
});
