import React, { FC } from 'react';
import { Button, Modal } from "react-bootstrap";

interface CustomModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
}

const CustomModal: FC<CustomModalProps> = ({ showModal, toggleVisibility }) => {
  return (
    <Modal show={showModal} onHide={toggleVisibility}>
      <Modal.Header closeButton>
        <Modal.Title>Pizda</Modal.Title>
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

export default CustomModal;
