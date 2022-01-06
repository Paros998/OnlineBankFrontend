import React, {FC} from 'react';
import axios from "axios";
import {Formik} from 'formik';
import {useHistory} from "react-router-dom";
import ClientCardLayout from "../../../components/ClientCardLayout/ClientCardLayout";
import {LocationHeaders} from "../../../enums/LocationHeaders";
import {TransferFormikValues} from "../../../interfaces/formik/TransferFormikValues";
import {useCurrentUser} from "../../../contexts/CurrentUserContext";
import {ClientModel} from "../../../interfaces/DatabaseModels/ClientModel";
import NewTransferForm from "./NewTransferForm/NewTransferForm";
import {getTodayDate} from "../../../utils/getTodayDate";
import {getISODate} from "../../../utils/getISODate";
import {toast} from 'react-toastify';
import { TransferValidationSchema } from '../../../validation/TransferValidationSchema';

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

      toast.success('Przelew został wykonany pomyślnie.');
      history.push('/client/home');

      await fetchUser();
    } catch {
      toast.error('Nie udało się wykonać przelewu.');
    }
  };

  return (
    <ClientCardLayout location={LocationHeaders.Transfer}>
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validationSchema={TransferValidationSchema}
      >
        <NewTransferForm/>
      </Formik>
    </ClientCardLayout>
  );
};

export default Transfer;
