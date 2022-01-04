import React, { useState } from 'react';
import { Form } from 'formik';
import TextInput from '../../../../../../components/Inputs/TextInput/TextInput';
import EditClientFormActionButtons from '../../EditClientFormActionButtons/EditClientFormActionButtons';

const EditClientCredentialsForm = () => {
  const [isReadonly, setIsReadonly] = useState(true);

  return (
    <Form noValidate>
      <TextInput
        name="username"
        label="Nazwa użytkownika"
        type="text"
        labelClassName="fw-bold"
        placeholder="Wpisz nazwę użytkownika"
        readOnly={isReadonly}
        maxLength={40}
      />

      <TextInput
        name="password"
        label="Hasło"
        type="password"
        labelClassName="fw-bold"
        placeholder="Wpisz hasło"
        containerClass="mt-5"
        readOnly={isReadonly}
        maxLength={40}
      />

      <hr className="bg-secondary-light mt-4"/>

      <EditClientFormActionButtons readonly={isReadonly} setReadonly={setIsReadonly}/>
    </Form>
  );
};

export default EditClientCredentialsForm;
