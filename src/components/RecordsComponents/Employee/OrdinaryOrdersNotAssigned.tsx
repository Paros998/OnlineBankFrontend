import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import PriorityOrderNotAssigned from "./PriorityOrderNotAssigned";

interface OrdinaryOrdersNotAssignedProps {
  Orders: OrderModel[] | [];
  handleClick:(orderId:number|undefined)=>void;
  className?:string;
  isPending?:boolean;
  orderID?:number | undefined;
}

const OrdinaryOrdersNotAssigned:FC<OrdinaryOrdersNotAssignedProps> = ({Orders,orderID,handleClick,className,isPending}) => {
  if(isPending)
    return null;

  if(!isPending && Orders.length === 0)
    return (
      <p className='text-warning fw-bold'>Nie znaleziono zwykłych zleceń do przypisania</p>
    );

  return (
    <>
      {
        Orders?.map((item, key) => {
          return <PriorityOrderNotAssigned
            key={key}
            order={item}
            className={`order-warning ${className} ${ orderID === item.order_Id ? 'order-active' : ''}`}
            handleClick={()=>{handleClick(item.order_Id)}}
          />
        })
      }
    </>
  );

};

export default OrdinaryOrdersNotAssigned;