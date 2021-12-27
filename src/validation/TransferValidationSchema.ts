import * as Yup from 'yup';

export const TransferValidationSchema = Yup.object().shape({
  amount: Yup.number().required('Podaj kwotę.').min(1, 'Kwota musi być większa niż 0.'),
  transferDate: Yup.string()
    .when('isCyclicalTransfer', {
      is: true,
      then: Yup.string().required('Podaj datę przelewu cyklicznego.'),
    }),
  category: Yup.string().required('Podaj kategorię przelewu.'),
  receiver_sender: Yup.string().required('Podaj odbiorcę przelewu.'),
  title: Yup.string().required('Podaj tytuł przelewu.'),
  toAccountNumber: Yup.string().required('Podaj numer konta odbiorcy.').min(26, 'Niepoprawny numer konta odbiorcy'),
});
