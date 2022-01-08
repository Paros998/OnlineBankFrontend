import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Formik } from 'formik';
import isGivenDataEdited from 'lodash.isequal';
import { useCurrentUser } from '../../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../../interfaces/DatabaseModels/ClientModel';
import EditClientDataForm from './EditClientDataForm/EditClientDataForm';

import { createOrder } from '../../../../../utils/createOrder';
import { OrderTypes } from '../../../../../enums/OrderTypes';
import {EditClientDataValidationSchema} from "../../../../../Validation/EditClientDataValidationSchema";


const EditClientData = () => {
  const { currentUser } = useCurrentUser<ClientModel>();

  const handleSubmit = async (values: ClientModel) => {
    if (isGivenDataEdited(values, currentUser)) {
      toast.warning('Dane powinny być wcześniej zedytowane przed wysłaniem formularza.');
      return;
    }

    const editClientDataOrder = createOrder(OrderTypes.EditClient, currentUser || {} as ClientModel, values);

    try {
      await axios.post('/orders', editClientDataOrder);
      toast.info('Prośba o edycje danych osobowych została wysłana.');
    } catch {
      toast.error('Nie udało się wysłać prośby o edycję danych klienta');
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
