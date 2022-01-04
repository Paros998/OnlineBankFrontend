import React from 'react';
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import PriorityOrdersNotAssignedCard
  from "../../../components/Cards/Employee/EmployeeHomeCards/PriorityOrdersNotAssignedCard";
import OrdinaryOrdersNotAssignedCard
  from "../../../components/Cards/Employee/EmployeeOrdersCards/OrdinaryOrdersNotAssignedCard";
import MyOrdersNotFinishedCard from "../../../components/Cards/Employee/EmployeeOrdersCards/MyOrdersNotFinishedCard";
import MyOrdersDoneCard from "../../../components/Cards/Employee/EmployeeOrdersCards/MyOrdersDoneCard";
import {Roles} from "../../../enums/Roles";
import {useFetchRawData} from "../../../hooks/useFetchRawData";
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import {useCurrentUser} from "../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";

const OrdersPage = () => {
  const {currentUser,role} = useCurrentUser<EmployeeModel>();

  const PriorityOrdersUrl = role === Roles.RoleAdmin ? `/dictionary/orders/priority` : `/dictionary/orders/for-employees/priority`;
  const OrdersUrl = role === Roles.RoleAdmin ? `/dictionary/orders` : `/dictionary/orders/for-employees`;
  const MyOrdersUrl = `/orders/employee/${currentUser?.employeeId}/active`;
  const MyOrdersFinishedUrl = `/orders/employee/${currentUser?.employeeId}/inactive`;

  const {rawData:PriorityOrders,isPending:priorityPending,fetchData:fetchPriorityOrders} = useFetchRawData<OrderModel[]>(PriorityOrdersUrl);
  const {rawData:Orders,isPending:normalPending,fetchData:fetchOrders} = useFetchRawData<OrderModel[]>(OrdersUrl);
  const {rawData:MyOrders,isPending:myOrdersPending,fetchData:fetchMyOrders} = useFetchRawData<OrderModel[]>(MyOrdersUrl);
  const {rawData:MyOrdersFinished,isPending:myOrdersFinishedPending} = useFetchRawData<OrderModel[]>(MyOrdersFinishedUrl);

  return (
    <>
      <AuthorisedNavbar />
      <SideNavbar/>
      <ContainerWithBackgroundImage className='bg-secondary-dark blob-primary' >
        <div className='d-flex w-100 mh-400px mnh-400px justify-content-between'>
          <PriorityOrdersNotAssignedCard Orders={PriorityOrders || []} className='w-50 bg-dark' isPending={priorityPending} showLabel fetchMyOrders={fetchMyOrders} fetchPriorities={fetchPriorityOrders}/>
          <MyOrdersNotFinishedCard Orders={MyOrders || []} className='w-50' isPending={myOrdersPending} />
        </div>
        <div className='d-flex w-100 mh-400px mnh-400px justify-content-between'>
          <OrdinaryOrdersNotAssignedCard Orders={Orders || []} className='w-50' isPending={normalPending} fetchOrdinary={fetchOrders} fetchMyOrders={fetchMyOrders}/>
          <MyOrdersDoneCard Orders={MyOrdersFinished || []} className='w-50' isPending={myOrdersFinishedPending}/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default OrdersPage;