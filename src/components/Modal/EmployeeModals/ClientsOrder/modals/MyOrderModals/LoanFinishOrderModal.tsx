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
import RequestSubmitButton from "../../../../../SubmitButton/RequestSubmitButton";

interface LoanFinishOrderModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>
  showModal: boolean;
  order: OrderModel;
  isSubmittingDenied: boolean;
  isSubmittingAccepted: boolean;
  handleSubmit: (value: string) => Promise<void>;
}


const LoanFinishOrderModal: FC<LoanFinishOrderModalProps> = ({
                                                               setShowModal,
                                                               showModal,
                                                               order,
                                                               isSubmittingDenied,
                                                               isSubmittingAccepted,
                                                               handleSubmit
                                                             }) => {
  const loan: LoanModel = JSON.parse(order.requestBody);

  const {rawData: ClientWorthiness, isPending} =
    useFetchRawData<ClientCreditWorthinessModel>(`/clients/${order.client?.clientId}/credit-worthiness/${loan.initialRatesNumber}`);


  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      title={'Zlecenie numer: ' + order?.order_Id}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-success bg-dark text-success rounded-card-10',
        fullscreen: true
      }}
      headerDiamondClassName='text-success '
      headerClassName='justify-content-center'
      footerClassName='justify-content-center'
      bodyClassName='justify-content-center thumb-success align-items-center'
      footerChildren={(
        <>
          <RequestSubmitButton
            props={{
              variant: 'primary',
              onClick: () => {
                handleSubmit("denied")
              },
              className: `w-20 rounded-pill `
            }}
            isSubmitting={isSubmittingDenied}
          >
            Odrzuć
          </RequestSubmitButton>
          <RequestSubmitButton
            props={{
              variant: 'success',
              onClick: () => {
                handleSubmit("accepted")
              },
              className: `w-20 rounded-pill ms-3`
            }}
            isSubmitting={isSubmittingAccepted}
          >
            Zaakceptuj
          </RequestSubmitButton>
        </>
      )}
    >
      <CenteredSpinnerTemplate variant={'success'} isPending={isPending}/>
      <div className='hstack'>
        <div className='w-20'>

        </div>
        <div className='w-60'>
          <OrderDescriptionInModal order={order} dataColor='text-success'/>
          <ClientLoan currentLoan={loan}/>

          {!isPending &&
          ClientWorthiness &&
          <ClientCreditWorthiness
              clientCreditWorthiness={ClientWorthiness || {} as ClientCreditWorthinessModel}
          />}

        </div>
        <div className='w-20'>

        </div>
      </div>
    </ModalTemplate>
  );
};

export default LoanFinishOrderModal;
