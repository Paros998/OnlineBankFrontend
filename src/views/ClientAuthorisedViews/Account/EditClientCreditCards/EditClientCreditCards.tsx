import React from 'react';
import { useFetchRawData } from '../../../../hooks/useFetchRawData';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';
import CenteredSpinner from '../../../../components/CenteredSpinner/CenteredSpinner';

const EditClientCreditCards = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData: creditCards, isPending } = useFetchRawData(`/credit-cards/client/${currentUser?.clientId}`);

  if (!creditCards) {
    return <CenteredSpinner isPending={isPending} />
  }

  return (
    <>
      <h5 className='text-center'>Dostępne karty płatnicze</h5>
    </>
  );
};

export default EditClientCreditCards;
