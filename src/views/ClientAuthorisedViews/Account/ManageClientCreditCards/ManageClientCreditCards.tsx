import React from 'react';
import { Hammer } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { useFetchRawData } from '../../../../hooks/useFetchRawData';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';
import CenteredSpinner from '../../../../components/CenteredSpinner/CenteredSpinner';
import CreditCard from './CreditCard/CreditCard';
import blackCreditCard from '../../../../assets/images/black-credit-card.jpg';
import blueCreditCard from '../../../../assets/images/blue-credit-card.jpg';
import redCreditCard from '../../../../assets/images/red-credit-card.png';
import { CreditCardModel } from '../../../../interfaces/DatabaseModels/CreditCardModel';
import { useModalState } from '../../../../hooks/useModalState';
import { EditCardConfirmModalEntity } from '../../../../interfaces/EditCardConfirmModalEntity';
import { useCreditCardOperations } from './hooks/useCreditCardOperations';
import EditCreditCardModal from './EditCreditCardModal/EditCreditCardModal';
import CreateCreditCardModal from './CreateCreditCardModal/CreateCreditCardModal';

const creditCardImageSources = [blackCreditCard, blueCreditCard, redCreditCard];

const ManageClientCreditCards = () => {
  const { currentUser } = useCurrentUser<ClientModel>();

  const {
    rawData: creditCards,
    isPending,
  } = useFetchRawData<CreditCardModel[]>(`/credit-cards/client/${currentUser?.clientId}`);

  const {
    toggleVisibility: toggleEditCardModalVisibility,
    showModal: showConfirmModal,
    entity: confirmModalContent,
  } = useModalState<EditCardConfirmModalEntity>();

  const {
    toggleVisibility: toggleCreateCardModalVisibility,
    showModal: showCreateCardModal,
  } = useModalState();

  const {
    isRequestPending,
    handleCreateCard,
    handleEditCard,
  } = useCreditCardOperations({
    toggleEditCardModalVisibility,
    toggleCreateCardModalVisibility
  });

  if (creditCards) {
    return (
      <section className="text-center mt-4">
        {
          creditCards.length < 3 && (
            <Button
              className="fw-bold rounded-pill"
              onClick={toggleCreateCardModalVisibility}
            >
              <Hammer/> Wyrób nową kartę płatniczą
            </Button>
          )
        }

        <div className="mb-4"/>

        {
          creditCards.map((card, index) => (
            <CreditCard
              key={card.cardId}
              imgSrc={creditCardImageSources[index]}
              toggleConfirmModalVisibility={toggleEditCardModalVisibility}
              handleEditCard={handleEditCard}
              {...card}
            />
          ))
        }

        <EditCreditCardModal
          modalContent={confirmModalContent}
          showModal={showConfirmModal}
          toggleVisibility={toggleEditCardModalVisibility}
          isRequestPending={isRequestPending}
        />

        <CreateCreditCardModal
          showModal={showCreateCardModal}
          toggleVisibility={toggleCreateCardModalVisibility}
          handleSubmit={handleCreateCard}
        />
      </section>
    );
  }

  return <CenteredSpinner isPending={isPending}/>;
};

export default ManageClientCreditCards;
