import React, {Dispatch, FC, SetStateAction} from 'react';
import ModalTemplate from "../../../../ModalTemplate";
import OrderDescriptionInModal from "../../../../../RecordsComponents/Employee/OrderDescriptionInModal";
import {OrderModel} from "../../../../../../interfaces/DatabaseModels/OrderModel";
import ClientLoan from "../../../../../RecordsComponents/Employee/ClientLoan";
import ClientCreditWorthiness from "../../../../../RecordsComponents/Employee/ClientCreditWorthiness";
import {useFetchRawData} from "../../../../../../hooks/useFetchRawData";
import {LoanModel} from "../../../../../../interfaces/DatabaseModels/LoanModel";
import {ClientCreditWorthinessModel} from "../../../../../../interfaces/DatabaseModels/ClientCreditWorthinessModel";
import CenteredSpinnerTemplate from "../../../../../CenteredSpinner/CenteredSpinnerTemplate";

interface LoanFinishOrderModalProps {
  setShowModal:Dispatch<SetStateAction<boolean>>
  showModal:boolean;
  order:OrderModel;
}

const LoanFinishOrderModal:FC<LoanFinishOrderModalProps> = ({setShowModal,showModal,order}) => {

  const loan:LoanModel = JSON.parse(order.requestBody);
  const {rawData:ClientWorthiness,isPending} =
    useFetchRawData<ClientCreditWorthinessModel>(`/clients/${order.client?.clientId}/credit-worthiness/${loan.initialRatesNumber}`);
  console.log(loan);
  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      title={'Zlecenie numer: ' + order?.order_Id}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-secondary bg-dark text-light rounded-card-10 ',
        fullscreen: true
      }}
      headerDiamondClassName='text-secondary '
      headerClassName='justify-content-center'
      footerClassName='d-none'
      bodyClassName='justify-content-center text-center'
    >
      <CenteredSpinnerTemplate variant={'success'} isPending={isPending}/>
      <OrderDescriptionInModal order={order} dataColor='text-secondary'/>
      <ClientLoan currentLoan={loan}/>
      { ClientWorthiness && <ClientCreditWorthiness clientCreditWorthiness={ClientWorthiness} clientLoan={loan}/> }
    </ModalTemplate>
  );
};

export default LoanFinishOrderModal;