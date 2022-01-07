import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../../components/SideNavbar/SideNavbar";
import ContainerWithBackgroundImage from "../../../components/EmployeeContainer/ContainerWithBackgroundImage";
import ClientAccountDataCard from "../../../components/Cards/Employee/ClientDetails/ClientAccountDataCard";
import ClientDataCard from "../../../components/Cards/Employee/ClientDetails/ClientDataCard";
import ClientOrdersCard from "../../../components/Cards/Employee/ClientDetails/ClientOrdersCard";
import {Button} from "react-bootstrap";
import {useFetchRawData} from "../../../hooks/useFetchRawData";
import {ClientModel} from "../../../interfaces/DatabaseModels/ClientModel";

const ClientDetailsPage = () => {
  const {clientId,orderId}: { clientId: string,orderId: string} = useParams();
  const ID = parseInt(clientId);
  const history = useHistory();

  const {rawData,fetchData} = useFetchRawData<ClientModel>(`/clients/${ID}`);

  const handleBackClick = () => {
    history.push("/employee/clients");
  }

  let client: ClientModel = {
    accountNumber: "unknown",
    balance: 0,
    city: "unknown",
    dateOfBirth: "unknown",
    email: "unknown",
    fullName: "unknown",
    homeAddress: "unknown",
    identificationNumber: "unknown",
    personalNumber: "unknown",
    postalCode: "unknown",
    secCity: "unknown",
    secHomeAddress: "unknown",
    secPostalCode: "unknown"

  };

  if (rawData) {
    client = rawData;
    return (
      <>
        <AuthorisedNavbar/>
        <SideNavbar/>
        <ContainerWithBackgroundImage className='bg-secondary-dark w-100'>
          <div className='d-flex rounded-card-10 bg-dark w-100 text-dark mh-700px mnh-700px '>
            <ClientAccountDataCard className='w-25' client={client}/>
            <ClientDataCard className='w-40' client={client}/>
            <ClientOrdersCard className='w-35 me-2' clientId={ID} fetchClient={fetchData} orderId={orderId}/>
          </div>
          <div className='w-100 pt-3 pe-4'>
            <Button
              className='w-25 rounded-pill position-relative left-40 '
              variant='dark'
              onClick={handleBackClick}
            >
              Wstecz
            </Button>
          </div>

        </ContainerWithBackgroundImage>
      </>
    );
  }

  return null;
};

export default ClientDetailsPage;