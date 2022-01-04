import React from 'react';
import isGivenDataEdited from 'lodash.isequal';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { useCurrentUser } from '../../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../../interfaces/DatabaseModels/ClientModel';
import { useFetchRawData } from '../../../../../hooks/useFetchRawData';
import { AppUserModel } from '../../../../../interfaces/DatabaseModels/AppUserModel';
import { EditClientCredentialsValidationSchema } from '../../../../../validation/EditClientCredentialsValidationSchema';
import EditClientCredentialsForm from './EditClientCredentialsForm/EditClientCredentialsForm';
import CenteredSpinner from '../../../../../components/CenteredSpinner/CenteredSpinner';

const EditClientCredentials = () => {
  const { currentUser, fetchUser } = useCurrentUser<ClientModel>();
  const { rawData: appUserData, isPending } = useFetchRawData<AppUserModel>(`/users/client/${currentUser?.clientId}`);

  const handleSubmit = async (values: AppUserModel) => {
    if (isGivenDataEdited(values, appUserData)) {
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

  if (!appUserData) {
    return <CenteredSpinner isPending={isPending} />
  }

  return (
    <Formik
      initialValues={appUserData}
      onSubmit={handleSubmit}
      validationSchema={EditClientCredentialsValidationSchema}
    >
      <EditClientCredentialsForm />
    </Formik>
  );
};

export default EditClientCredentials;
