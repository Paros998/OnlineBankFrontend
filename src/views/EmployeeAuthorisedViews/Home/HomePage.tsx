import React from 'react';
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";
import ContainerWithBackgroundImage from "../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import homeBg from "../../../assets/images/bg-employee-home.jpg"
import AnnouncementsCard from "../../../components/Cards/EmployeeHomeCards/AnnouncementsCard";
import VisitsCard from "../../../components/Cards/EmployeeHomeCards/VisitsCard";
import PriorityOrdersNotAssigned from "../../../components/Cards/EmployeeHomeCards/PriorityOrdersNotAssigned";
import SideNavbar from "../../../components/SideNavbar/SideNavbar";
import NotAssignedVisitsCard from "../../../components/Cards/EmployeeHomeCards/NotAssignedVisitsCard";

const HomePage = () => {
  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={homeBg}>
        <div className='d-flex w-100 mh-300px mnh-100px justify-content-between'>
          <AnnouncementsCard className='w-50'/>
          <VisitsCard className='w-50'/>
        </div>
        <div className='d-flex w-100 mh-500px mnh-300px justify-content-between'>
          <PriorityOrdersNotAssigned className='w-100'>

          </PriorityOrdersNotAssigned>
        </div>
        <div className='d-flex w-100 mh-400px mnh-200px justify-content-between'>
          <NotAssignedVisitsCard className='w-100'/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default HomePage;