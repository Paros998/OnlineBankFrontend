import React from 'react';
import AuthorisedNavbar from "../../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import usersBg from "../../../../assets/images/bg-employee-users.jpg";

const UsersPage = () => {
  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={usersBg}>
        <div className='d-flex w-100 mh-300px mnh-100px justify-content-between'>

        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default UsersPage;