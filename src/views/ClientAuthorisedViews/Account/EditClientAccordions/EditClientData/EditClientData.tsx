import React from 'react';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import isGivenDataEdited from 'lodash.isequal';
import { useCurrentUser } from '../../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../../interfaces/DatabaseModels/ClientModel';
import EditClientDataForm from './EditClientDataForm/EditClientDataForm';
import { EditClientDataValidationSchema } from '../../../../../validation/EditClientDataValidationSchema';

const EditClientData = () => {
  const { currentUser, fetchUser } = useCurrentUser<ClientModel>();

  const handleSubmit = async (values: ClientModel) => {
    if (isGivenDataEdited(values, currentUser)) {
      toast.warning('Dane powinny być wcześniej zedytowane przed wysłaniem formularza.');
      return;
    }

    try {
      console.log(values);
      toast.success('Dane klienta zostały zedytowane poprawnie.');
    } catch {
      toast.error('Edycja danych klienta nie udała się.');
    }
  };

  return (
    <Formik
      initialValues={currentUser || {} as ClientModel}
      onSubmit={handleSubmit}
      validationSchema={EditClientDataValidationSchema}
    >
      <EditClientDataForm />
    </Formik>
  );
};

export default EditClientData;
