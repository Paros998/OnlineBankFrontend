import * as Yup from 'yup';

export const NewLoanValidationSchema = Yup.object().shape({
  initialRatesNumber: Yup.number().required('Podaj liczbę rat')
    .min(1, 'Liczba rat nie może być mniejsza niż 1')
    .max(48, 'Liczba rat nie może być większa niż 48'),
  basicLoanAmount: Yup.number().required('Podaj podstawową kwotę')
    .min(2000, 'Podstawowa kwota nie może być mniejsza niż 2000')
    .max(50_000, 'Podstawowa kwota nie może być większa niż 50 000'),
});
