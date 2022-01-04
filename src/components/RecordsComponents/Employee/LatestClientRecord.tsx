import React, {FC} from 'react';
import dayjs from "dayjs";
import {ClientModel} from "../../../interfaces/DatabaseModels/ClientModel";
import {useHistory} from "react-router-dom";

interface ClientsProps{
  client:ClientModel;
  className?:string;
}

const LatestClientRecord:FC<ClientsProps> = ({client,className}) => {
  const {personalNumber,fullName,dateOfCreation,clientId} = client;
  const history = useHistory();

  const handleClick = () => {
    if(clientId){
      history.push(`/employee/client/${clientId}`)
    }
  }

  return (
    <div className={`row mnh-35px w-100 align-content-center align-items-start btn-pointer latest-client ${className} `} onClick={handleClick}>
      <div className='col text-truncate text-start'>
        {dayjs(dateOfCreation).format("DD.MM.YYYY")}
      </div>
      <div className='col text-truncate text-start'>
        {dayjs(dateOfCreation).format("HH:mm:ss UTC")}
      </div>
      <div className='col text-truncate text-center'>
        {personalNumber}
      </div>
      <div className='col text-truncate text-start'>
        {fullName}
      </div>
    </div>
  );

};

export default LatestClientRecord;