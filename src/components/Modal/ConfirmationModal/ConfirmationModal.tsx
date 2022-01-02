import React, { FC, memo, ReactNode } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TextWithDiamond from '../../TextWithDiamond/TextWithDiamond';
import ModalSubmitButton from '../../SubmitButton/ModalSubmitButton';

interface ConfirmationModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  onConfirm: () => void;
  isRequestPending: boolean;
  header: string;
  children: ReactNode;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  showModal,
  toggleVisibility,
  onConfirm,
  isRequestPending,
  header,
  children
}) => (
  <Modal
    show={showModal}
    onHide={toggleVisibility}
    centered
    size="lg"
    className="z-3000"
    backdropClassName="z-3000"
  >
    <Modal.Header className="justify-content-center">
      <Modal.Title>
        <TextWithDiamond diamondClassName="fs-6">
          {header}
        </TextWithDiamond>
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {children}
    </Modal.Body>

    <Modal.Footer className="justify-content-center">
      <Button
        onClick={toggleVisibility}
        variant="secondary-light"
        className="rounded-pill w-25 fw-bold"
      >
        Wróć
      </Button>

      <ModalSubmitButton
        isSubmitting={isRequestPending}
        props={{
          className: 'rounded-pill w-25 fw-bold',
          onClick: onConfirm,
        }}
      >
        Potwierdź
      </ModalSubmitButton>
    </Modal.Footer>
  </Modal>
);

export default memo(ConfirmationModal);
