import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import PriorityOrderNotAssigned from "./PriorityOrderNotAssigned";

interface PriorityOrdersNotAssignedProps {
  Orders: OrderModel[] | [];
  handleClick:(orderId:number|undefined)=>void;
  className?:string;
  isPending?:boolean;
  orderID?:number | undefined;
}

const PriorityOrdersNotAssigned:FC<PriorityOrdersNotAssignedProps> = ({Orders,className,handleClick,isPending,orderID}) => {
  if(isPending)
    return null;

  if(!isPending && Orders.length === 0)
    return (
      <p className='text-primary fw-bold'>Nie znaleziono priorytetowych zleceń do przypisania</p>
    );

  return (
    <>
      {
        Orders?.map((item, key) => {
          return <PriorityOrderNotAssigned
            key={key}
            order={item}
            className={`order-primary ${className} ${ orderID === item.order_Id ? 'order-active' : ''}`}
            handleClick={()=>{handleClick(item.order_Id)}}
          />
        })
      }
    </>
  );

};

export default PriorityOrdersNotAssigned;