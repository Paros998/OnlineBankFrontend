import * as Yup from 'yup';

export const EditClientDataValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Imię i nazwisko jest wymagane'),
    email: Yup.string().required('E-mail jest wymagany').email('Podaj poprawny format e-maila'),
    postalCode: Yup.string().required('Kod pocztowy jest wymagany')
      .min(5, 'Podaj poprawny kod pocztowy'),
    homeAddress: Yup.string().required('Adres korespondencyjny jest wymagany'),
    city: Yup.string().required('Nazwa miasta jest wymagana'),
    secPostalCode: Yup.string().required('Kod pocztowy jest wymagany')
      .min(5, 'Podaj poprawny kod pocztowy'),
    secHomeAddress: Yup.string().required('Adres korespondencyjny jest wymagany'),
    secCity: Yup.string().required('Nazwa miasta jest wymagana'),
});
