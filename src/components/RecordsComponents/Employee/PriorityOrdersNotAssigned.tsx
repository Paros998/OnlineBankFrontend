import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import dayjs from "dayjs";

interface PriorityOrdersProps {
  order:OrderModel;
  className?: string;
}

const PriorityOrdersNotAssigned: FC<PriorityOrdersProps> = ({className,order}) => {
  const {order_Id,orderType,client,createDate} = order;
  const date = dayjs();
  const createdDate = dayjs(createDate);
  const timePassedSinceOrderCreated = dayjs(date.diff(createdDate)).format("DD.HH.mm.ss")
  return (
    <div
      className={`row d-flex rounded-card-10 m-1 mb-2 p-1 text-light w-100  align-items-start ${className}`}>
      <div className='col ms-2 text-truncate'>
        {order_Id}
      </div>
      <div className='col ms-2 text-truncate'>
        {client && client.clientId}
      </div>
      <div className='col ms-2 text-truncate'>
        {orderType}
      </div>
      <div className='col ms-2 text-truncate'>
        {createDate.toLocaleDateString()}
      </div>
      <div className='col ms-2 me-2 text-truncate'>
        {timePassedSinceOrderCreated}
      </div>
    </div>
  );
};

export default PriorityOrdersNotAssigned;