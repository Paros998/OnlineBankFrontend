import React, { FC } from 'react';
import { EditCardConfirmModalEntity } from '../../../../../interfaces/EditCardConfirmModalEntity';
import InfoCard from '../../../../../components/InfoCard/InfoCard';
import ConfirmationModal from '../../../../../components/Modal/ConfirmationModal/ConfirmationModal';

interface EditCreditCardModalProps {
  modalContent?: EditCardConfirmModalEntity;
  showModal: boolean;
  toggleVisibility: () => void;
  isRequestPending: boolean;
}

const EditCreditCardModal: FC<EditCreditCardModalProps> = ({
  modalContent,
  showModal,
  toggleVisibility,
  isRequestPending,
}) => {
  if (modalContent) {
    return (
      <ConfirmationModal
        showModal={showModal}
        header={modalContent.header}
        isRequestPending={isRequestPending}
        onConfirm={modalContent.handleAction}
        toggleVisibility={toggleVisibility}
      >
        <InfoCard className='bg-warning'>
          <h5>{modalContent.bodyHeader}</h5>

          {modalContent.bodyContent}
        </InfoCard>
      </ConfirmationModal>
    );
  }

  return null;
};

export default EditCreditCardModal;
