import * as Yup from 'yup';

export const EditCyclicalTransferValidationSchema = Yup.object().shape({
  amount: Yup.number().required('Podaj kwotę.').min(1, 'Kwota musi być większa niż 0.'),
  reTransferDate: Yup.mixed().required('Podaj datę przelewu cyklicznego.'),
  category: Yup.string().required('Podaj kategorię przelewu.'),
  receiver: Yup.string().required('Podaj odbiorcę przelewu.'),
  title: Yup.string().required('Podaj tytuł przelewu.'),
  accountNumber: Yup.string().required('Podaj numer konta odbiorcy.').min(26, 'Niepoprawny numer konta odbiorcy'),
});
