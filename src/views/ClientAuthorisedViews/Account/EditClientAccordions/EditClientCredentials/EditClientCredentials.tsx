import React, {useState} from 'react';
import isGivenDataEdited from 'lodash.isequal';
import {toast} from 'react-toastify';
import { Formik, FormikHelpers } from 'formik';
import {useCurrentUser} from '../../../../../contexts/CurrentUserContext';
import {ClientModel} from '../../../../../interfaces/DatabaseModels/ClientModel';
import {useFetchRawData} from '../../../../../hooks/useFetchRawData';
import EditClientCredentialsForm from './EditClientCredentialsForm/EditClientCredentialsForm';
import CenteredSpinner from '../../../../../components/CenteredSpinner/CenteredSpinner';
import {createOrder} from '../../../../../utils/createOrder';
import {OrderTypes} from '../../../../../enums/OrderTypes';
import axios from 'axios';
import {UserCredentials} from '../../../../../interfaces/DatabaseModels/userCredentials';
import { EditClientCredentialsValidationSchema } from '../../../../../validation/EditClientCredentialsValidationSchema';

const EditClientCredentials = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData: appUserData, isPending } = useFetchRawData<UserCredentials>(`/users/client/${currentUser?.clientId}`);
  const [isReadonly, setIsReadonly] = useState(true);

  const handleSubmit = async (values: UserCredentials, formikHelpers: FormikHelpers<UserCredentials>) => {
    if (isGivenDataEdited(values, appUserData)) {
      toast.warning('Dane powinny być wcześniej zedytowane przed wysłaniem formularza.');
      return;
    }

    const editClientCredentialsOrder = createOrder(
      OrderTypes.EditUser,
      currentUser || {} as ClientModel,
      { ...appUserData, ...values },
      true
    );

    try {
      await axios.post('/orders', editClientCredentialsOrder);
      toast.info('Prośba o edycje danych logowania została wysłana.');
    } catch {
      toast.error('Nie udało się wysłać prośby o edycję danych logowania klienta');
    } finally {
      setIsReadonly(true);
      formikHelpers.resetForm();
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
      <EditClientCredentialsForm isReadonly={isReadonly} setIsReadonly={setIsReadonly} />
    </Formik>
  );
};

export default EditClientCredentials;
