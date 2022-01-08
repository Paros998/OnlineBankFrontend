import React, {Dispatch, FC, SetStateAction} from 'react';
import ModalTemplate from "../../../../ModalTemplate";
import OrderDescriptionInModal from "../../../../../RecordsComponents/Employee/OrderDescriptionInModal";
import {OrderModel} from "../../../../../../interfaces/DatabaseModels/OrderModel";

interface OrdinaryFinishOrderModalProps {
  setShowModal:Dispatch<SetStateAction<boolean>>
  showModal:boolean;
  order:OrderModel;
}

const OrdinaryFinishOrderModal:FC<OrdinaryFinishOrderModalProps> = ({setShowModal,order,showModal}) => {
  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      title={'Zlecenie numer: ' + order?.order_Id}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-secondary bg-dark text-light rounded-card-10 '
      }}
      headerDiamondClassName='text-secondary '
      headerClassName='justify-content-center'
      footerClassName='d-none'
      bodyClassName='justify-content-center text-center'
    >
      <OrderDescriptionInModal order={order} dataColor='text-secondary'/>
    </ModalTemplate>
  );
};

export default OrdinaryFinishOrderModal;