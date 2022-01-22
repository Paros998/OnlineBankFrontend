import React, {FC} from 'react';
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import PriorityOrdersNotAssigned from "../PriorityOrdersNotAssigned";
import OrdinaryOrdersNotAssigned from "../OrdinaryOrdersNotAssigned";
import {Roles} from "../../../../enums/Roles";

interface OrdersForEmployeeProps {
  role:Roles;
  orderID:number | undefined;
  handleClick:(orderId:number|undefined)=>void;
  className?:string;
}

const OrdersForEmployee:FC<OrdersForEmployeeProps> = ({role,handleClick,orderID}) => {

  const {rawData:PriorityOrders,isPending:priorityPending,fetchData:fetchPriorityOrders} = useFetchRawData<OrderModel[]>(
    role.toString() === "ADMIN"
      ? `/dictionary/orders/priority`
      : `/dictionary/orders/for-employees/priority`
  );

  const {rawData:Orders,isPending:normalPending,fetchData:fetchOrders} = useFetchRawData<OrderModel[]>(
    role.toString() === "ADMIN"
      ? `/dictionary/orders`
      : `/dictionary/orders/for-employees`
  );

  if(priorityPending && normalPending)
    return (
      <>
        <CenteredSpinnerTemplate variant={'info'} isPending={ priorityPending || normalPending}/>
      </>
    );

  if(PriorityOrders && Orders)
    return  (
      <>
        <PriorityOrdersNotAssigned handleClick={handleClick} Orders={PriorityOrders ?? []} className='rounded-pill text-light bg-primary' orderID={orderID}/>
        <OrdinaryOrdersNotAssigned handleClick={handleClick} Orders={Orders ?? []} className='rounded-pill text-light bg-warning' orderID={orderID} />
      </>
    );

  return null;
};

export default OrdersForEmployee;