import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {OrderModel} from "../../../../../interfaces/DatabaseModels/OrderModel";
import axios from "axios";
import {toast} from "react-toastify";
import {OrderTypes} from "../../../../../enums/OrderTypes";
import LoanFinishOrderModal from "./MyOrderModals/LoanFinishOrderModal";
import OrdinaryFinishOrderModal from "./MyOrderModals/OrdinaryFinishOrderModal";


interface MyOrderModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>
  fetchClient: () => Promise<void>;
  fetchOrders: () => Promise<void>;
  showModal: boolean;
  order: OrderModel;
}

const MyOrderModal: FC<MyOrderModalProps> = ({setShowModal, showModal, order, fetchOrders, fetchClient}) => {
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
      toast.success("Zlecenie zostało wykonane pomyślnie!");
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
    await fetchClient();
    await fetchOrders();
    decision === 'denied' ? setIsSubmittingDenied(false) : setIsSubmittingAccepted(false);
    setShowModal(false);
  }

  if (order.orderType === OrderTypes.LoanRequest)
    return <LoanFinishOrderModal
      setShowModal={setShowModal}
      showModal={showModal}
      order={order}
      handleSubmit={handleSubmit}
      isSubmittingAccepted={isSubmittingAccepted}
      isSubmittingDenied={isSubmittingDenied}/>
  else
    return <OrdinaryFinishOrderModal
      setShowModal={setShowModal}
      isSubmittingDenied={isSubmittingDenied}
      isSubmittingAccepted={isSubmittingAccepted}
      handleSubmit={handleSubmit}
      showModal={showModal}
      order={order}
    />
};

export default MyOrderModal;