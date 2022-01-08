import React, {FC, useState} from 'react';
import {useCurrentUser} from "../../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import ClientsOrderModal from "../../../Modal/EmployeeModals/ClientsOrder/ClientsOrderModal";
import {ClientsOrderModalTypes} from "../../../../enums/ClientsOrderModalTypes";
import Equals from 'lodash.isequal';
import {ClientsOrdersSort} from "../../../../enums/ClientsOrdersSort";

interface ClientsOrderProps {
  order: OrderModel;
  fetchOrders: () => Promise<void>;
  fetchClient: () => Promise<void>;
  sortType: ClientsOrdersSort;
}

const ClientsOrder: FC<ClientsOrderProps> = ({order,fetchOrders,fetchClient,sortType}) => {
  const {currentUser} = useCurrentUser<EmployeeModel>();
  const {isActive, employee, orderType, waitingTime} = order;
  const [showModal,setShowModal] = useState<boolean>(false);
  const [modalType,setModalType] = useState<ClientsOrderModalTypes>(ClientsOrderModalTypes.SHOW);

  const getAssignment = (isActive:boolean, employee:EmployeeModel  | undefined | null) => {
    if (!isActive)
      return 'bg-secondary order-secondary'
    else {
      if (!employee)
        return 'bg-warning order-warning';
      else if (!Equals(employee,currentUser))
        return 'bg-primary order-primary';
      else if (Equals(employee,currentUser))
        return 'bg-success order-success';
    }
  }

  const isHidden = (isActive:boolean, employee:EmployeeModel | undefined | null) => {

    if(sortType === ClientsOrdersSort.All)
      return false;
    if(sortType === ClientsOrdersSort.FINISHED)
      return isActive;
    if(sortType === ClientsOrdersSort.MINE)
      return !(Equals(employee, currentUser) && isActive);
    if(sortType === ClientsOrdersSort.FREE)
      return employee;
    if(sortType === ClientsOrdersSort.ASSIGNED)
      return !(!Equals(employee, currentUser) && isActive && employee);

    return false;
  }

  const handleClick = () => {
    setShowModal(true);
    if (!isActive)
      setModalType(ClientsOrderModalTypes.SHOW)
    else{
      if (!employee)
        setModalType(ClientsOrderModalTypes.ASSIGN)
      else if (!Equals(employee,currentUser))
        setModalType(ClientsOrderModalTypes.SHOW_ASSIGNED)
      else if (Equals(employee,currentUser))
        setModalType(ClientsOrderModalTypes.USE)
    }
  }

  return (
    <>
      <ClientsOrderModal
        fetchOrders={fetchOrders}
        order={order}
        setShowModal={setShowModal}
        showModal={showModal}
        modalType={modalType}
        fetchClient={fetchClient}
      />

      <div
        onClick={handleClick}
        className={`row 
                   ${getAssignment(isActive, employee)}
                   d-flex rounded-card-10 m-1 mb-2 p-2 fw-bold text-dark w-100 align-items-center btn-pointer border-dark border-1 border ${isHidden(isActive, employee) && 'd-none'}`}>
        <div className='col text-truncate'>
          {orderType}
        </div>
        <div className='col-5 text-truncate text-end' hidden={!order.isActive}>
          {waitingTime}
        </div>
      </div>
    </>
  );
};

export default ClientsOrder;