import { Form, Formik } from 'formik';
import React, { FC, memo, useMemo } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import TextWithDiamond from '../../../../../components/TextWithDiamond/TextWithDiamond';
import { ClientModel } from '../../../../../interfaces/DatabaseModels/ClientModel';
import { useCurrentUser } from '../../../../../contexts/CurrentUserContext';
import { CyclicalTransferModel } from '../../../../../interfaces/DatabaseModels/CyclicalTransferModel';
import { EditCyclicalTransferFormikValues } from '../../../../../interfaces/formik/EditCyclicalTransferFormikValues';
import SubmitButton from '../../../../../components/SubmitButton/SubmitButton';
import EditCyclicalTransferForm from './EditCyclicalTransferForm/EditCyclicalTransferForm';
import { getFormattedReTransferDate } from '../utils/getFormattedReTransferDate';
import { getFormattedAmount } from '../utils/getFormattedAmount';

interface EditCyclicalTransferModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  selectedCyclicalTransfer: CyclicalTransferModel;
}

const EditCyclicalTransferModal: FC<EditCyclicalTransferModalProps> = ({
 showModal,
 toggleVisibility,
 selectedCyclicalTransfer
}) => {
  const { currentUser } = useCurrentUser<ClientModel>();

  console.count('Cyclical rerenders');

  const formikInitialValues: EditCyclicalTransferFormikValues = useMemo(() => (
    {
      ...selectedCyclicalTransfer,
      amount: getFormattedAmount(selectedCyclicalTransfer.amount),
      reTransferDate: getFormattedReTransferDate(selectedCyclicalTransfer.reTransferDate),
      client: currentUser || {} as ClientModel,
    }
  ), [selectedCyclicalTransfer, currentUser]);

  const handleSubmit = async (values: EditCyclicalTransferFormikValues) => {
    try {
      await axios.put(`/cyclical-transfers/client/${currentUser?.clientId}`, values);
    } catch (e) {
      console.error(e);
    } finally {
      toggleVisibility();
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={toggleVisibility}
      centered
      size="lg"
      className="z-3000"
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title>
          <TextWithDiamond diamondClassName="fs-6">
            Edytuj przelew cykliczny
          </TextWithDiamond>
        </Modal.Title>
      </Modal.Header>

      <Formik<EditCyclicalTransferFormikValues>
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
      >
        <Form className="mt-4" noValidate>
          <Modal.Body>
            <EditCyclicalTransferForm/>
          </Modal.Body>

          <Modal.Footer className="justify-content-center">
            <Button
              onClick={toggleVisibility}
              variant="secondary-light"
              className="rounded-pill w-25 fw-bold"
            >
              Zamknij
            </Button>

            <SubmitButton className="rounded-pill w-25 fw-bold">
              Zapisz
            </SubmitButton>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};

export default memo(EditCyclicalTransferModal);
