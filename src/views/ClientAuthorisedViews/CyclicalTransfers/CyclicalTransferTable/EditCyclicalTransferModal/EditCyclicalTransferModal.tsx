import { Form, Formik } from 'formik';
import React, { FC, memo } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import TextWithDiamond from '../../../../../components/TextWithDiamond/TextWithDiamond';
import { CyclicalTransferModel } from '../../../../../interfaces/DatabaseModels/CyclicalTransferModel';
import { EditCyclicalTransferFormikValues } from '../../../../../interfaces/formik/EditCyclicalTransferFormikValues';
import SubmitButton from '../../../../../components/SubmitButton/SubmitButton';
import EditCyclicalTransferForm from './EditCyclicalTransferForm/EditCyclicalTransferForm';
import { useCyclicalTransfers } from '../../../../../contexts/CyclicalTransferContext';

interface EditCyclicalTransferModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  selectedCyclicalTransfer: CyclicalTransferModel;
}

const EditCyclicalTransferModal: FC<EditCyclicalTransferModalProps> = ({
  showModal,
  toggleVisibility,
  selectedCyclicalTransfer,
}) => {
  const { cyclicalTransfers, estimatedData } = useCyclicalTransfers();

  const { fetchData: fetchEstimatedData } = estimatedData;
  const { fetchData: fetchCyclicalTransfers } = cyclicalTransfers;

  const handleSubmit = async (values: EditCyclicalTransferFormikValues) => {
    const currentCyclicalTransferId = selectedCyclicalTransfer.transferId;

    try {
      await axios.put(`/cyclical-transfers/${currentCyclicalTransferId}`, values);

      toast.success('Przelew cykliczny został poprawnie zedytowany.');
      await fetchCyclicalTransfers();
      await fetchEstimatedData();
    } catch {
      toast.error('Edycja przelewu cyklicznego nie powiodła się.')
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
      backdropClassName='z-3000'
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title>
          <TextWithDiamond diamondClassName="fs-6">
            Edytuj przelew cykliczny
          </TextWithDiamond>
        </Modal.Title>
      </Modal.Header>

      <Formik<EditCyclicalTransferFormikValues>
        initialValues={selectedCyclicalTransfer}
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
