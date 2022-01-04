import React, {FC} from 'react';
import {ClientModel} from "../../../interfaces/DatabaseModels/ClientModel";
import dayjs from "dayjs";
import {useHistory} from "react-router-dom";

interface ClientsProps{
  client:ClientModel;
  className?:string;
  hover?:string;
}

const ClientRecord:FC<ClientsProps> = ({client,className,hover,children}) => {
  const {personalNumber,fullName,accountNumber,dateOfBirth,clientId} = client;
  const history = useHistory();

  const handleClick = () => {
    if(clientId){
      history.push(`/employee/client/${clientId}`);
    }
  }

  return (
    <div className={`row align-items-start mh-50px fs-5 pb-2 pt-2 btn-pointer client ${className} ${hover}`} onClick={handleClick}>
      <div className='col text-truncate'>
        {personalNumber}
      </div>
      <div className='col text-truncate text-info ms-4'>
        {fullName}
      </div>
      <div className='col text-truncate text-info ms-4'>
        {accountNumber}
      </div>
      <div className='col text-truncate ms-4 '>
        {dayjs(dateOfBirth).format("DD.MM.YYYY")}
      </div>
    </div>
  );
};

export default ClientRecord;