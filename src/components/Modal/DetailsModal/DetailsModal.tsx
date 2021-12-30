import React, { FC } from 'react';
import { Button, Modal } from "react-bootstrap";
import TextWithDiamond from "../../TextWithDiamond/TextWithDiamond";

interface DetailsModalProps {
  showModal: boolean;
  toggleVisibility: () => void;
  header: string;
}

const DetailsModal: FC<DetailsModalProps> = ({ showModal, toggleVisibility, header, children }) => {
  return (
    <Modal
      show={showModal}
      onHide={toggleVisibility}
      centered
      size='lg'
    >
      <Modal.Header className='justify-content-center'>
        <Modal.Title>
          <TextWithDiamond diamondClassName='fs-6'>{header}</TextWithDiamond>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children}
      </Modal.Body>

      <Modal.Footer className='justify-content-center'>
        <Button
          onClick={toggleVisibility}
          className='rounded-pill w-25 fw-bold'>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
