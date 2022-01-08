import React, {Dispatch, FC, SetStateAction} from 'react';
import ModalTemplate from "../../../../ModalTemplate";
import OrderDescriptionInModal from "../../../../../RecordsComponents/Employee/OrderDescriptionInModal";
import {OrderModel} from "../../../../../../interfaces/DatabaseModels/OrderModel";
import ModalSubmitButton from "../../../../../SubmitButton/ModalSubmitButton";

interface OrdinaryFinishOrderModalProps {
  setShowModal:Dispatch<SetStateAction<boolean>>
  isSubmittingDenied:boolean;
  isSubmittingAccepted:boolean;
  handleSubmit:(value:string)=>Promise<void>;
  showModal:boolean;
  order:OrderModel;
}

const OrdinaryFinishOrderModal:FC<OrdinaryFinishOrderModalProps> = ({setShowModal,order,showModal,handleSubmit,isSubmittingAccepted,isSubmittingDenied}) => {
  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      title={'Zlecenie numer:' + order?.order_Id}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-success bg-dark text-light'
      }}
      headerDiamondClassName='text-success '
      headerClassName='justify-content-center'
      footerClassName='justify-content-center'
      bodyClassName='justify-content-center text-center'
      footerChildren={(
        <>
          <ModalSubmitButton
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
          </ModalSubmitButton>
          <ModalSubmitButton
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
          </ModalSubmitButton>
        </>
      )}
    >
      <OrderDescriptionInModal order={order} dataColor={'text-success'}/>
    </ModalTemplate>
  );
};

export default OrdinaryFinishOrderModal;