import React from 'react';
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import clientsBg from "../../../assets/images/bg-employee-login.jpg"
import ClientsCard from "../../../components/Cards/EmployeeClientsPageCards/ClientsCard";
import LastCreatedClients from "../../../components/Cards/EmployeeClientsPageCards/LastCreatedClients";

const ClientsPage = () => {
  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={clientsBg}>
        <div className='d-flex w-100 mh-800px mnh-400px justify-content-between'>
          <ClientsCard className='w-60 '/>
          <LastCreatedClients className='w-40'/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default ClientsPage;