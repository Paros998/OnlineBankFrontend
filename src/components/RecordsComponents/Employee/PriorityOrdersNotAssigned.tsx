import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import moment from "moment";


interface PriorityOrdersProps {
  order:OrderModel;
  className?: string;
  hideLastCol?:boolean;
  setsFunctions?:{setOrder:(order:OrderModel)=>void , setShowModal:(show:boolean)=>void}
}

const PriorityOrdersNotAssigned: FC<PriorityOrdersProps> = ({className,order,hideLastCol,setsFunctions}) => {
  const {order_Id,orderType,createDate,waitingTime} = order;

  return (
    <div
      onClick={()=>{
        if(setsFunctions){
          setsFunctions.setOrder(order);
          setsFunctions.setShowModal(true);
        }
      }}
      className={`row d-flex fs-normal rounded-card-10 m-1 mb-2 p-2 text-primary fw-bold w-100 align-items-start btn-pointer ${className}`}
    >
      <div className='col-1 text-truncate'>
        {order_Id}
      </div>
      <div className='col  text-truncate text-center'>
        {orderType}
      </div>
      <div className='col text-truncate text-center'>
        {moment.utc(createDate).format("yyyy-MM-DD HH:mm:ss")}
      </div>
      <div className='col-3 ms-2 me-2 text-truncate text-center' hidden={hideLastCol}>
        {waitingTime}
      </div>
    </div>
  );
};

export default PriorityOrdersNotAssigned;