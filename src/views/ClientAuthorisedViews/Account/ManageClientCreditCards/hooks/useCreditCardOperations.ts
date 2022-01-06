import { toast } from 'react-toastify';
import axios from 'axios';
import { CreditCardModel } from '../../../../../interfaces/DatabaseModels/CreditCardModel';
import { createOrder } from '../../../../../utils/createOrder';
import { OrderTypes } from '../../../../../enums/OrderTypes';
import { ClientModel } from '../../../../../interfaces/DatabaseModels/ClientModel';
import { useCurrentUser } from '../../../../../contexts/CurrentUserContext';
import { useState } from 'react';

export interface ToastContent {
  errorToastContent: string;
  successToastContent: string;
}

const creditCardEmptyObject: Partial<CreditCardModel> = {
  cardNumber: '',
  cardImage: '',
  isActive: true,
  cvvNumber: 0,
  expireDate: '',
};

export const useCreditCardOperations = (
  toggleEditCardModalVisibility: () => void,
  toggleCreateCardModalVisibility: () => void
) => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const [isRequestPending, setIsRequestPending] = useState(false);

  const handleCreateCard = async ({ pinNumber }: { pinNumber: string }) => {
    try {
      const createCreditCardOrder = createOrder(
        OrderTypes.CreateCreditCard,
        currentUser || {} as ClientModel,
        { ...creditCardEmptyObject, pinNumber } as CreditCardModel,
        true
      );

      await axios.post('/orders', createCreditCardOrder);
      toast.info('Prośba o stworzenie karty została wysłana.');
    } catch {
      toast.error('Nie udało się wysłać prośby o stworzenie karty.');
    } finally {
      toggleCreateCardModalVisibility();
    }
  };

  const handleEditCard = async (
    creditCard: CreditCardModel,
    { errorToastContent, successToastContent }: ToastContent,
    orderType: OrderTypes
  ) => {
    setIsRequestPending(true);

    const editCreditCardOrder = createOrder(
      orderType,
      currentUser || {} as ClientModel,
      creditCard,
      true
    );

    try {
      await axios.post('/orders', editCreditCardOrder);
      toast.info(successToastContent);
    } catch {
      toast.error(errorToastContent);
    } finally {
      setIsRequestPending(false);
      toggleEditCardModalVisibility();
    }
  };

  return { handleCreateCard, handleEditCard, isRequestPending };
};
