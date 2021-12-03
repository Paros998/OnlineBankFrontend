import React, {FC} from 'react';
import {OrderModel} from "../../interfaces/DatabaseModels/OrderModel";
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
      className={`d-flex rounded-card-10 m-1 mb-2 p-1 text-light w-100 justify-content-between align-items-center ${className}`}>
      <span className='ms-2'>
        {order_Id}
      </span>
      <span className='ms-2'>
        {client && client.clientId}
      </span>
      <span className='ms-2'>
        {orderType}
      </span>
      <span className='ms-2'>
        {createDate.toLocaleDateString()}
      </span>
      <span className='ms-2 me-2'>
        {timePassedSinceOrderCreated}
      </span>
    </div>
  );
};

export default PriorityOrdersNotAssigned;