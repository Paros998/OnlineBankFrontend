import React from 'react';
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import clientsBg from "../../../assets/images/bg-employee-login.jpg"
import ClientsCard from "../../../components/Cards/Employee/EmployeeClientsPageCards/ClientsCard";
import LastCreatedClients from "../../../components/Cards/Employee/EmployeeClientsPageCards/LastCreatedClients";
import {useFetchLatestClients} from "../../../hooks/useFetchLatestClients";
import {useFetchRawData} from "../../../hooks/useFetchRawData";
import {ClientModel} from "../../../interfaces/DatabaseModels/ClientModel";
import {useFetchClientsFiltered} from "../../../hooks/useFetchClientsFiltered";

const ClientsPage = () => {
  const {fetchLatestClients,clients:LatestClients,isPending:latestClientsPending} = useFetchLatestClients();
  const {fetchClients,clients,isPending} = useFetchClientsFiltered();

  return (
    <>
      <AuthorisedNavbar/>
      <SideNavbar/>
      <ContainerWithBackgroundImage src={clientsBg}>
        <div className='d-flex w-100 mh-800px mnh-600px justify-content-between'>
          <ClientsCard className='w-60 ' Clients={clients || []} isPending={isPending} fetchClients={fetchClients}/>
          <LastCreatedClients className='w-40' Clients={LatestClients || []} fetchLatestClients={fetchLatestClients} isPending={latestClientsPending}/>
        </div>
      </ContainerWithBackgroundImage>
    </>
  );
};

export default ClientsPage;