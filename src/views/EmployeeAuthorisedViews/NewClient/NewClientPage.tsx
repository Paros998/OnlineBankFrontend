import React from 'react';
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../components/EmployeeContainer/ContainerWithBackgroundImage";

import NewClientCard from "../../../components/Cards/Employee/EmployeeNewClientCards/NewClientCard";

const NewClientPage = () => {
  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage className='bg-secondary-dark' >
          <div className='d-flex w-100 mh-800px mnh-750px justify-content-between '>
            <NewClientCard className='w-100'/>
          </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default NewClientPage;