import React, { FC, memo, ReactNode } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TextWithDiamond from '../../TextWithDiamond/TextWithDiamond';

interface ConfirmationModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  onConfirm: () => void;
  header: string;
  children: ReactNode;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({ showModal, toggleVisibility, onConfirm, header, children }) => {
  console.count('Confirmation rerenders');
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

        <Button
          className="rounded-pill w-25 fw-bold"
          onClick={onConfirm}
        >
          Potwierdź
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default memo(ConfirmationModal);
