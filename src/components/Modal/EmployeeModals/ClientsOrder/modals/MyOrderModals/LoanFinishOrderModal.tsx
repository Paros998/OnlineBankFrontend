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

interface decision {
  label: string;
  value: string;
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
  const {toRepaidOff,basicRateAmount} = loan;

  const {rawData: ClientWorthiness, isPending} =
    useFetchRawData<ClientCreditWorthinessModel>(`/clients/${order.client?.clientId}/credit-worthiness/${loan.initialRatesNumber}`);

  let sumOfBalanceAssessment = 'text-primary';
  let monthlyBalanceAssessment = 'text-primary';

  let suggestedDecision: decision = {
    label: 'text-success',
    value: 'Zaakceptowanie Prośby'
  };

  if(ClientWorthiness){
    const {sumOfBalance,monthlyBalance} = ClientWorthiness;
    if (sumOfBalance > toRepaidOff * 1.2)
      sumOfBalanceAssessment = 'text-success';
    else if (sumOfBalance >= toRepaidOff && sumOfBalance < toRepaidOff * 1.2)
      sumOfBalanceAssessment = 'text-warning';

    if (monthlyBalance > basicRateAmount * 1.2)
      monthlyBalanceAssessment = 'text-success';
    else if (monthlyBalance >= basicRateAmount && monthlyBalance < basicRateAmount * 1.2)
      monthlyBalanceAssessment = 'text-warning';

    if (sumOfBalanceAssessment && monthlyBalanceAssessment === 'text-primary')
      suggestedDecision = {label: 'text-primary', value: 'Odrzucenie Prośby'};
    else if (sumOfBalanceAssessment && monthlyBalanceAssessment === 'text-warning')
      suggestedDecision = {label: 'text-warning', value: 'Możliwa Akceptacja Prośby'};
  }

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
          <ClientCreditWorthiness
              clientCreditWorthiness={ClientWorthiness || {} as ClientCreditWorthinessModel}
              monthlyBalanceAssessment={monthlyBalanceAssessment}
              suggestedDecision={suggestedDecision}
              sumOfBalanceAssessment={sumOfBalanceAssessment}
          />}
        </div>
        <div className='w-20'>

        </div>
      </div>
    </ModalTemplate>
  );
};

export default LoanFinishOrderModal;
