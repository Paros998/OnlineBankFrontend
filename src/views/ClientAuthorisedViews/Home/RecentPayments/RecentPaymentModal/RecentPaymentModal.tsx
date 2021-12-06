import React, { FC } from 'react';
import { Button, Modal } from "react-bootstrap";
import { TransferModel } from "../../../../../interfaces/DatabaseModels/TransferModel";

interface RecentPaymentModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  transferData?: TransferModel;
}

const RecentPaymentModal: FC<RecentPaymentModalProps> = ({ showModal, toggleVisibility, transferData }) => {
  return (
    <Modal show={showModal} onHide={toggleVisibility}>
      <Modal.Header closeButton>
        <Modal.Title>{transferData?.amount}</Modal.Title>
      </Modal.Header>

      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">
          Close
        </Button>

        <Button variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecentPaymentModal;
