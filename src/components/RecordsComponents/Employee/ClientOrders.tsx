import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import dayjs from "dayjs";

interface PriorityOrdersProps {
  className?: string;
  orders: OrderModel[];
}

const ClientOrders: FC<PriorityOrdersProps> = ({className, orders}) => {
  const date = dayjs().subtract(1, 'day');
  // const createdDate = dayjs(createDate);
  // const timePassedSinceOrderCreated = dayjs(date.diff(createdDate)).format("DD.HH.mm.ss")
  return (
    <div>
      {
        orders.map(({createDate,orderType,order_Id}, key) => (
          <div key={key} className={`row bg-light d-flex rounded-card-10 m-1 mb-2 p-2 fw-bold text-primary-dark w-100 align-items-center btn-pointer`}>
            <div className='col text-truncate'>
              {orderType}
            </div>
            <div className='col-4 text-truncate text-end'>
              {dayjs(date.diff(createDate)).format("DD.HH.mm.ss")}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ClientOrders;