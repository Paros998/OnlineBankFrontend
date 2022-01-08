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
import {CreditCardModel} from "../../../interfaces/DatabaseModels/CreditCardModel";

const ClientDetailsPage = () => {
  const {clientId,orderId}: { clientId: string,orderId: string} = useParams();
  const ID = parseInt(clientId);
  const history = useHistory();

  const {rawData:ClientData,fetchData:fetchClient} = useFetchRawData<ClientModel>(`/clients/${ID}`);
  const {rawData:ClientCreditCards,fetchData:fetchCreditCards,isPending} = useFetchRawData<CreditCardModel[]>(`credit-cards/client/${clientId}`);

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

  let creditCards:CreditCardModel[] = [];

  if (ClientData && ClientCreditCards) {
    client = ClientData;
    creditCards = ClientCreditCards
    return (
      <>
        <AuthorisedNavbar/>
        <SideNavbar/>
        <ContainerWithBackgroundImage className='bg-secondary-dark '>
          <div className='d-flex rounded-card-10 bg-dark w-100 text-dark mh-700px mnh-700px '>
            <ClientAccountDataCard className='w-25' client={client}/>
            <ClientDataCard className='w-40' client={client} clientCreditCards={creditCards } fetchCreditCards={fetchCreditCards} isPending={isPending}/>
            <ClientOrdersCard className='w-35 me-2' clientId={ID} fetchClient={fetchClient} orderId={orderId} fetchCreditCards={fetchCreditCards}/>
          </div>
          <div className='w-90 pe-4 mnh-200px align-items-center d-flex'>
            <Button
              className='w-25 rounded-pill mx-auto my-auto'
              variant='secondary'
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