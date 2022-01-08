import React, { Dispatch, FC, SetStateAction } from 'react';
import { Form } from 'formik';
import TextInput from '../../../../../../components/Inputs/TextInput/TextInput';
import NumberFormatTextInput from '../../../../../../components/Inputs/NumberFormatTextInput/NumberFormatTextInput';
import EditClientFormActionButtons from '../../EditClientFormActionButtons/EditClientFormActionButtons';

interface EditClientDataFormProps {
  isReadonly: boolean;
  setIsReadonly: Dispatch<SetStateAction<boolean>>;
}

const EditClientDataForm: FC<EditClientDataFormProps> = ({ setIsReadonly, isReadonly }) => {
  return (
    <Form noValidate>
      <TextInput
        name="fullName"
        label="Imię i nazwisko"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz imię i nazwisko"
        readOnly={isReadonly}
        maxLength={40}
      />

      <TextInput
        name="email"
        label="E-mail"
        type="email"
        labelClassName="fw-bold"
        placeholder="Wpisz e-mail"
        containerClass="mt-5"
        readOnly={isReadonly}
        maxLength={40}
      />

      <hr className="bg-secondary-light mt-4"/>

      <TextInput
        name="city"
        label="Miasto (adres koresponedencyjny)"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz nazwę miasta adresu korespondencyjnego"
        containerClass="mt-4"
        readOnly={isReadonly}
        maxLength={40}
      />

      <NumberFormatTextInput
        name="postalCode"
        label="Numer pocztowy (adres koresponedencyjny)"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz numer pocztowy adresu korespondencyjnego"
        format="##-###"
        containerClass="mt-5"
        readonly={isReadonly}
      />

      <TextInput
        name="homeAddress"
        label="Adres koresponedencyjny"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz adres koresponedencyjny"
        containerClass="mt-5"
        readOnly={isReadonly}
        maxLength={40}
      />

      <hr className="bg-secondary-light mt-4"/>

      <TextInput
        name="secCity"
        label="Miasto (adres zameldowania)"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz nazwę miasta adresu zameldowania"
        containerClass="mt-4"
        readOnly={isReadonly}
        maxLength={40}
      />

      <NumberFormatTextInput
        name="secPostalCode"
        label="Numer pocztowy (adres zameldowania)"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz numer pocztowy adresu zameldowania"
        format="##-###"
        containerClass="mt-5"
        readonly={isReadonly}
      />

      <TextInput
        name="secHomeAddress"
        label="Adres zameldowania"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz adres zameldowania"
        containerClass="mt-5"
        readOnly={isReadonly}
        maxLength={40}
      />

      <hr className="bg-secondary-light mt-4"/>

      <EditClientFormActionButtons readonly={isReadonly} setReadonly={setIsReadonly}/>
    </Form>
  );
};

export default EditClientDataForm;
