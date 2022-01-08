import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import moment from "moment";

interface OrderDescriptionInModalProps{
  className?:string;
  order:OrderModel;
  hideDecision?:boolean;
  dataColor?:string;
}

const OrderDescriptionInModal:FC<OrderDescriptionInModalProps> = ({className,
                                                                    dataColor,
                                                                    children,
                                                                    order,
                                                                    hideDecision}) => {
  const {orderType,client,createDate,isActive,decision,orderingEmployee,employee} = order;

  return (
    <div className={`vstack  ${className}`}>
      <div className='row p-1 mb-2 ms-1 me-1'>
        <span className='col fw-bold text-start'>
          Typ Zlecenia:
        </span>
        <span className={`col text-end  ${dataColor || 'text-light '} `}>
          {orderType}
        </span>
      </div>

      <div className='row p-1 mb-2 ms-1 me-1'>
        <span className='col fw-bold text-start'>
          Stan:
        </span>
        <span className={`col text-end  ${dataColor || 'text-light '} `}>
          {isActive ? "Aktywny" : "Zakończony"}
        </span>
      </div>

      <div className='row p-1 mb-2 ms-1 me-1'>
        <span className='col fw-bold text-start'>
          Data Utworzenia:
        </span>
        <span className={`col text-end  ${dataColor || 'text-light '} `}>
          {moment.utc(createDate).format("yyyy-MM-DD HH:mm:ss")}
        </span>
      </div>

      <div className='row p-1 mb-2 ms-1 me-1' hidden={hideDecision}>
        <span className='col fw-bold text-start'>
          Decyzja:
        </span>
        <span className={`col text-end  ${dataColor || 'text-light '} `}>
          {decision}
        </span>
      </div>

      <div className='row p-1 mb-2 ms-1 me-1' hidden={!client}>
        <span className='col fw-bold text-start'>
          Klient:
        </span>
        <span className={`col text-end  ${dataColor || 'text-light '} `}>
          {client?.clientId + " " + client?.fullName + " " + client?.personalNumber}
        </span>
      </div>

      <div className='row p-1 mb-2 ms-1 me-1' hidden={!orderingEmployee}>
        <span className='col fw-bold text-start'>
          Pracownik:
        </span>
        <span className={`col text-end  ${dataColor || 'text-light '} `}>
          {orderingEmployee?.employeeId + " " + orderingEmployee?.fullName + " " + orderingEmployee?.personalNumber}
        </span>
      </div>

      <div className='row p-1 mb-2 ms-1 me-1' hidden={!employee}>
        <span className='col fw-bold text-start'>
          Pracownik Przypisany:
        </span>
        <span className={`col text-end  ${dataColor || 'text-light '} `}>
          {employee?.employeeId + " " + employee?.fullName + " " + employee?.personalNumber}
        </span>
      </div>

    </div>
  );
};

export default OrderDescriptionInModal;