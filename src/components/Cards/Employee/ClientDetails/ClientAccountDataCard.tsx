import React, {FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {ClientModel} from "../../../../interfaces/DatabaseModels/ClientModel";
import dayjs from "dayjs";

interface ClientAccountDataCardProps {
  className?: string;
  client: ClientModel;
}

const ClientAccountDataCard: FC<ClientAccountDataCardProps> = ({className, client}) => {
  const {fullName,personalNumber,identificationNumber,dateOfBirth,email,homeAddress,secHomeAddress,secCity,secPostalCode,
  postalCode,city,} = client ;
  return (
    <CardTemplate
      header='Szczegóły Klienta'
      className={`text-dark d-flex bg-secondary fs-5 ${className}`}
      headerClassName='text-dark'
      bodyClassName='text-dark thumb-dark'
      headerDiamondClassName='text-dark'
    >
      <div className='vstack '>
        <span className='fw-bold'>
          Imię i Nazwisko
        </span>
        <span>
          {fullName}
        </span>
        <span className='fw-bold'>
          Pesel
        </span>
        <span>
          {personalNumber}
        </span>
        <span className='fw-bold'>
          Numer Dowodu
        </span>
        <span>
          {identificationNumber}
        </span>
        <hr/>
        <span className='fw-bold'>
          Data Urodzenia
        </span>
        <span>
          {dayjs(dateOfBirth).format("DD.MM.YYYY")}
        </span>
        <span className='fw-bold'>
          Email
        </span>
        <span>
          {email}
        </span>
        <hr/>
        <span className='fw-bold'>
          Adres Zamieszkania
        </span>
        <span>
          {city}
        </span>
        <span>
          {homeAddress}
        </span>
        <span>
           {postalCode}
        </span>
        <span className='fw-bold' hidden={!secCity}>
          Adres Korespondencyjny
        </span>
        <span>
          {secCity}
        </span>
        <span>
          {secHomeAddress}
        </span>
        <span>
           {secPostalCode}
        </span>
      </div>
    </CardTemplate>
  );
};

export default ClientAccountDataCard;