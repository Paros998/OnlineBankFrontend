import React, {Dispatch, FC, SetStateAction} from 'react';
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import {ClientsOrderModalTypes} from "../../../../enums/ClientsOrderModalTypes";
import AssignOrderModal from "./modals/AssignOrderModal";
import AssignedOrderModal from './modals/AssignedOrderModal';
import MyOrderModal from "./modals/MyOrderModal";
import FinishedOrderModal from "./modals/FinishedOrderModal";

interface ClientsOrderModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>
  showModal: boolean;
  order?: OrderModel;
  fetchOrders: () => Promise<void>;
  fetchClient: () => Promise<void>;
  modalType: ClientsOrderModalTypes;
  isPending?: boolean;
}

const ClientsOrderModal: FC<ClientsOrderModalProps> = ({
                                                         order,
                                                         setShowModal,
                                                         showModal,
                                                         modalType,
                                                         fetchOrders,
                                                         fetchClient,
                                                         isPending
                                                       }) => {
  if (!showModal)
    return null;

  if (order) {
    if (modalType === ClientsOrderModalTypes.ASSIGN)
      return <AssignOrderModal setShowModal={setShowModal} showModal={showModal} order={order}
                               fetchOrders={fetchOrders}/>;
    else if (modalType === ClientsOrderModalTypes.SHOW)
      return <FinishedOrderModal setShowModal={setShowModal} showModal={showModal} order={order}/>;
    else if (modalType === ClientsOrderModalTypes.SHOW_ASSIGNED)
      return <AssignedOrderModal setShowModal={setShowModal} showModal={showModal} order={order}/>;
    else if (modalType === ClientsOrderModalTypes.USE)
      return <MyOrderModal setShowModal={setShowModal} showModal={showModal} order={order} fetchClient={fetchClient}
                           fetchOrders={fetchOrders}/>;
  }

  return null

};

export default ClientsOrderModal;