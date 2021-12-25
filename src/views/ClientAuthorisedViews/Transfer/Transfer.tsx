import React from 'react';
import { Formik } from 'formik';
import { toast } from "react-toastify";
import ClientMainLayout from "../../../components/ClientMainLayout/ClientMainLayout";
import { LocationHeaders } from "../../../enums/LocationHeaders";
import { TransferFormikValues } from "../../../interfaces/formik/TransferFormikValues";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../interfaces/DatabaseModels/ClientModel";
import { TransferValidationSchema } from "../../../validation/TransferValidationSchema";
import NewTransferForm from "./NewTransferForm/NewTransferForm";

const Transfer = () => {
  const { currentUser } = useCurrentUser<ClientModel>();

  const formikInitialValues: TransferFormikValues = {
    amount: 0,
    transferDate: '',
    category: '',
    type: 'OUTGOING',
    receiver_sender: '',
    title: '',
    toAccountNumber: '',
    client: currentUser || {} as ClientModel,
    isCyclicalTransfer: false,
  };

  const handleSubmit = async (values: TransferFormikValues) => {
    try {
      console.log(values);
    } catch (e) {
      toast.error(`${e}`);
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
