import React, {FC} from 'react';
import {Button, Modal} from 'react-bootstrap';
import TextWithDiamond from '../../../../../components/TextWithDiamond/TextWithDiamond';
import {Form, Formik} from 'formik';
import SubmitButton from '../../../../../components/SubmitButton/SubmitButton';
import NumberFormatTextInput from '../../../../../components/Inputs/NumberFormatTextInput/NumberFormatTextInput';
import { CreateCreditCardValidationSchema } from '../../../../../validation/CreateCreditCardValidationSchema';



interface CreateCreditCardModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  handleSubmit: (values: { pinNumber: string }) => Promise<void>;
}

const CreateCreditCardModal: FC<CreateCreditCardModalProps> = ({ showModal, toggleVisibility, handleSubmit }) => {
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
            Wyrób kartę płatniczą
          </TextWithDiamond>
        </Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={{ pinNumber: '' }}
        onSubmit={handleSubmit}
        validationSchema={CreateCreditCardValidationSchema}
      >
        <Form className="mt-4" noValidate>
          <Modal.Body>
            <NumberFormatTextInput
              label='Numer PIN'
              name='pinNumber'
              format='####'
              placeholder="Wpisz numer PIN"
              labelClassName='fw-bold'
            />
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
              Wyślij
            </SubmitButton>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CreateCreditCardModal;
