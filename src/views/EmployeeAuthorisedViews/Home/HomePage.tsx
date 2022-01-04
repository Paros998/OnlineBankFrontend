import React from 'react';
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";
import ContainerWithBackgroundImage from "../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import homeBg from "../../../assets/images/bg-employee-home.jpg"
import AnnouncementsCard from "../../../components/Cards/Employee/EmployeeHomeCards/AnnouncementsCard";
import VisitsCard from "../../../components/Cards/Employee/EmployeeHomeCards/VisitsCard";
import PriorityOrdersNotAssignedCard from "../../../components/Cards/Employee/EmployeeHomeCards/PriorityOrdersNotAssignedCard";
import SideNavbar from "../../../components/SideNavbar/SideNavbar";
import NotAssignedVisitsCard from "../../../components/Cards/Employee/EmployeeHomeCards/NotAssignedVisitsCard";
import {useCurrentUser} from "../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import {useFetchRawData} from "../../../hooks/useFetchRawData";
import {VisitModel} from "../../../interfaces/DatabaseModels/VisitModel";
import {Roles} from "../../../enums/Roles";
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";

const HomePage = () => {
  const {currentUser,role} = useCurrentUser<EmployeeModel>()
  const employeeId = currentUser?.employeeId;
  const PriorityOrdersUrl = role === Roles.RoleAdmin ? `/dictionary/orders/priority` : `/dictionary/orders/for-employees/priority`;

  const {rawData:Visits,fetchData:EmployeeVisitsFetch,isPending:VisitsPending} = useFetchRawData<VisitModel[]>(`/visits/employee/${employeeId}`);
  const {rawData:PriorityOrders,isPending:PriorityOrdersPending} = useFetchRawData<OrderModel[]>(PriorityOrdersUrl);
  const {rawData:NotAssignedVisits,isPending:NAVisitsPending,fetchData:NotAssignedVisitsFetch} = useFetchRawData<VisitModel[]>("/dictionary/visits/unassigned");

  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={homeBg}>
        <div className='d-flex w-100 mh-300px mnh-100px justify-content-between'>
          <AnnouncementsCard className='w-50'/>
          <VisitsCard className='w-50' Visits={Visits || []} isPending={VisitsPending}/>
        </div>
        <div className='d-flex w-100 mh-500px mnh-300px justify-content-between'>
          <PriorityOrdersNotAssignedCard className='w-100' showLabel Orders={PriorityOrders || []} isPending={PriorityOrdersPending}/>
        </div>
        <div className='d-flex w-100 mh-400px mnh-200px justify-content-between pb-5'>
          <NotAssignedVisitsCard className='w-100'
                                 employeeVisitsFetch={EmployeeVisitsFetch}
                                 notAssignedVisitsFetch={NotAssignedVisitsFetch}
                                 Visits={NotAssignedVisits || []} isPending={NAVisitsPending}/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default HomePage;