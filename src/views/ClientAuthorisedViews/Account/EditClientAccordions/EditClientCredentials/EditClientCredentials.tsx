import React from 'react';
import isGivenDataEdited from 'lodash.isequal';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { useCurrentUser } from '../../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../../interfaces/DatabaseModels/ClientModel';
import { useFetchRawData } from '../../../../../hooks/useFetchRawData';
import { AppUserModel } from '../../../../../interfaces/DatabaseModels/AppUserModel';

import EditClientCredentialsForm from './EditClientCredentialsForm/EditClientCredentialsForm';
import CenteredSpinner from '../../../../../components/CenteredSpinner/CenteredSpinner';
import { createOrder } from '../../../../../utils/createOrder';
import { OrderTypes } from '../../../../../enums/OrderTypes';
import axios from 'axios';
import { UserCredentials } from '../../../../../interfaces/DatabaseModels/userCredentials';
import { EditClientCredentialsValidationSchema } from '../../../../../validation/EditClientCredentialsValidationSchema';


const EditClientCredentials = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData: appUserData, isPending } = useFetchRawData<AppUserModel>(`/users/client/${currentUser?.clientId}`);

  const handleSubmit = async (values: UserCredentials) => {
    if (isGivenDataEdited(values, appUserData)) {
      toast.warning('Dane powinny być wcześniej zedytowane przed wysłaniem formularza.');
      return;
    }

    // TODO Tricky way, form needs refactor

    const formattedValues = {
      username: values.username,
      password: values.password,
      email: values.email,
      appUserRole: values.appUserRole
    };

    const editClientCredentialsOrder = createOrder(
      OrderTypes.EditUser,
      currentUser || {} as ClientModel,
      formattedValues,
      true
    );

    try {
      await axios.post('/orders', editClientCredentialsOrder);
      toast.info('Prośba o edycje danych logowania została wysłana.');
    } catch {
      toast.error('Nie udało się wysłać prośby o edycję danych logowania klienta');
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
