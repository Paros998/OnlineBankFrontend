import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { LoanModel } from '../../../../interfaces/DatabaseModels/LoanModel';
import { createOrder } from '../../../../utils/createOrder';
import { OrderTypes } from '../../../../enums/OrderTypes';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';

const ActionButtons = () => {
  const history = useHistory();
  const { currentUser } = useCurrentUser<ClientModel>();
  const { state: currentLoan } = useLocation<LoanModel>();

  const handleSubmitLoan = async () => {
    const newLoanOrder = createOrder(
      OrderTypes.LoanRequest,
      currentUser || {} as ClientModel,
      currentLoan
    );

    try {
      await axios.post('/orders', newLoanOrder);
      toast.success('Prośba o wzięcie pożyczki została wysłana.');
      history.replace('/client/home');
    } catch {
      toast.error('Nie udało się wysłać formularzu dotyczącego potwierdzenia wzięcia pożyczki.');
    }
  };

  return (
    <div className='text-end w-50'>
      <Button
        className='rounded-pill fw-bold w-25'
        variant='secondary-light'
        type='button'
        onClick={() => history.goBack()}
      >
        Wróć
      </Button>

      <Button
        className='ms-4 rounded-pill fw-bold w-25 text-white'
        variant='success'
        onClick={handleSubmitLoan}
      >
        Zatwierdź
      </Button>
    </div>
  );
};

export default ActionButtons;
