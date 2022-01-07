import React, {Dispatch, FC, SetStateAction} from 'react';
import {OrderModel} from "../../../../../interfaces/DatabaseModels/OrderModel";
import OrderDescriptionInModal from "../../../../RecordsComponents/Employee/OrderDescriptionInModal";
import ModalTemplate from "../../../ModalTemplate";

interface ShowAssignedOrderModalProps {
  setShowModal:Dispatch<SetStateAction<boolean>>
  showModal:boolean;
  order:OrderModel;
}

const AssignedOrderModal:FC<ShowAssignedOrderModalProps> = ({setShowModal,order,showModal}) => {
  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      title={'Zlecenie numer: ' + order?.order_Id}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-primary bg-dark text-light rounded-card-10 '
      }}
      headerDiamondClassName='text-primary '
      headerClassName='justify-content-center'
      footerClassName='d-none'
      bodyClassName='justify-content-center text-center'
    >
      <OrderDescriptionInModal order={order} dataColor='text-primary'/>
    </ModalTemplate>
  );
};

export default AssignedOrderModal;