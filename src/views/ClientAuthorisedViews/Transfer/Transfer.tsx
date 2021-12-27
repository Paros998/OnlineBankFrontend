import React, { FC } from 'react';
import axios from "axios";
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";
import ClientMainLayout from "../../../components/ClientMainLayout/ClientMainLayout";
import { LocationHeaders } from "../../../enums/LocationHeaders";
import { TransferFormikValues } from "../../../interfaces/formik/TransferFormikValues";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../interfaces/DatabaseModels/ClientModel";
import { TransferValidationSchema } from "../../../validation/TransferValidationSchema";
import NewTransferForm from "./NewTransferForm/NewTransferForm";
import { getTodayDate } from "../../../utils/getTodayDate";
import { getISODate } from "../../../utils/getISODate";

const Transfer: FC = () => {
  const { currentUser, fetchUser } = useCurrentUser<ClientModel>();
  const history = useHistory();

  const formikInitialValues: TransferFormikValues = {
    amount: 0,
    transferDate: getTodayDate(),
    category: '',
    type: 'OUTGOING',
    receiver_sender: '',
    title: '',
    toAccountNumber: '',
    client: currentUser || {} as ClientModel,
    isCyclicalTransfer: false,
  };

  const handleSubmit = async ({ isCyclicalTransfer, ...values }: TransferFormikValues) => {
    // TODO (BE) need to refactor fields in cyclical controller. There is no point reinitializing values before posting...

    try {
      if (isCyclicalTransfer) {
        const cyclicalTransferPostValues = {
          amount: values.amount,
          category: values.category,
          title: values.title,
          accountNumber: values.toAccountNumber,
          receiver: values.receiver_sender,
          reTransferDate: getISODate(values.transferDate),
          client: currentUser,
        };
        await axios.post('/cyclical-transfers', cyclicalTransferPostValues);
      } else {
        const transferPostValues = {
          ...values,
          transferDate: getISODate(getTodayDate()),
        };
        await axios.post('/transfers', transferPostValues);
      }

      history.push('/client/home');
      await fetchUser();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ClientMainLayout location={LocationHeaders.Transfer}>
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validationSchema={TransferValidationSchema}
      >
        <NewTransferForm/>
      </Formik>
    </ClientMainLayout>
  );
};

export default Transfer;
