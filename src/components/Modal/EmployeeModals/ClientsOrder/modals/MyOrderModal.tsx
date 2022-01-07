import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {OrderModel} from "../../../../../interfaces/DatabaseModels/OrderModel";
import OrderDescriptionInModal from "../../../../RecordsComponents/Employee/OrderDescriptionInModal";
import ModalTemplate from "../../../ModalTemplate";
import ModalSubmitButton from "../../../../SubmitButton/ModalSubmitButton";
import axios from "axios";
import {toast} from "react-toastify";


interface MyOrderModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>
  fetchClient: () => Promise<void>;
  fetchOrders: () => Promise<void>;
  showModal: boolean;
  order: OrderModel;
}

const MyOrderModal: FC<MyOrderModalProps> = ({setShowModal, showModal, order,fetchOrders,fetchClient}) => {
  const [isSubmittingDenied, setIsSubmittingDenied] = useState<boolean>(false);
  const [isSubmittingAccepted, setIsSubmittingAccepted] = useState<boolean>(false);

  const handleSubmit = async (decision: string) => {

    decision === 'denied' ? setIsSubmittingDenied(true) : setIsSubmittingAccepted(true);

    const params = {
      params: {
        decision: decision
      }
    }
    try {
      await axios.put(`/orders/${order.order_Id}`, {}, params);
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
    await fetchClient();
    await fetchOrders();
    decision === 'denied' ? setIsSubmittingDenied(false) : setIsSubmittingAccepted(false);
    setShowModal(false);
  }

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

export default MyOrderModal;