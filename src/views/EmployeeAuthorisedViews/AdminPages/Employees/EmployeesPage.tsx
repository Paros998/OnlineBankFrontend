import React from 'react';
import AuthorisedNavbar from "../../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import employeesBg from "../../../../assets/images/bg-employee-new-client.jpg";
import EmployeesCard from "../../../../components/Cards/Admin/AdminCards/EmployeesCard";

const EmployeesPage = () => {
  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={employeesBg} className=''>
        <div className='d-flex w-100 mh-800px mnh-800px justify-content-between'>
          <EmployeesCard className='w-100'/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default EmployeesPage;