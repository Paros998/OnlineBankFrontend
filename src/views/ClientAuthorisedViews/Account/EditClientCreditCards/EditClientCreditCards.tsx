import React from 'react';
import { useFetchRawData } from '../../../../hooks/useFetchRawData';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';
import CenteredSpinner from '../../../../components/CenteredSpinner/CenteredSpinner';
import CreditCard from './CreditCard/CreditCard';
import blackCreditCard from '../../../../assets/images/black-credit-card.jpg';
import blueCreditCard from '../../../../assets/images/blue-credit-card.jpg';
import redCreditCard from '../../../../assets/images/red-credit-card.png';
import { CreditCardModel } from '../../../../interfaces/DatabaseModels/CreditCardModel';

const creditCardImageSources = [blackCreditCard, blueCreditCard, redCreditCard];

const EditClientCreditCards = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const {
    rawData: creditCards,
    isPending,
  } = useFetchRawData<CreditCardModel[]>(`/credit-cards/client/${currentUser?.clientId}`);

  if (creditCards) {
    return (
      <>
        {
          creditCards.map((card, index) => (
            <CreditCard imgSrc={creditCardImageSources[index]}/>
          ))
        }
      </>
    );
  }

  return <CenteredSpinner isPending={isPending}/>;
};

export default EditClientCreditCards;
