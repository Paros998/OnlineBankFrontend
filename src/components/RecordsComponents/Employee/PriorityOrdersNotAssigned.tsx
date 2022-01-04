import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import dayjs from "dayjs";

interface PriorityOrdersProps {
  order:OrderModel;
  className?: string;
  hideLastCol?:boolean;
  setsFunctions?:{setOrder:(order:OrderModel)=>void , setShowModal:(show:boolean)=>void}
}

const PriorityOrdersNotAssigned: FC<PriorityOrdersProps> = ({className,order,hideLastCol,setsFunctions}) => {
  const {order_Id,orderType,client,createDate} = order;

  const utc = require('dayjs/plugin/utc');
  dayjs.extend(utc);
  const date = dayjs().subtract(1,'day')
  const createdDate = dayjs(createDate);
  const timePassedSinceOrderCreated = dayjs(date.diff(createdDate)).format("DD.HH.mm.ss")
  return (
    <div
      onClick={()=>{
        if(setsFunctions){
          setsFunctions.setOrder(order);
          setsFunctions.setShowModal(true);
        }
      }}
      className={`row d-flex rounded-card-10 m-1 mb-2 p-2 text-primary fw-bold w-100 align-items-start btn-pointer ${className}`}
    >
      <div className='col-1 text-truncate'>
        {order_Id}
      </div>
      <div className='col  text-truncate text-center'>
        {orderType}
      </div>
      <div className='col text-truncate text-center'>
        {createDate}
      </div>
      <div className='col ms-2 me-2 text-truncate text-center' hidden={hideLastCol}>
        {timePassedSinceOrderCreated}
      </div>
    </div>
  );
};

export default PriorityOrdersNotAssigned;