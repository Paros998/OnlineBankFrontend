import React, {FC} from 'react';
import dayjs from "dayjs";
import {ClientModel} from "../../../interfaces/DatabaseModels/ClientModel";

interface ClientsProps{
  client:ClientModel;
  className?:string;
}

const LatestClientRecord:FC<ClientsProps> = ({client,className}) => {
  const {personalNumber,fullName,dateOfCreation} = client;

  return (
    <div className={`row mnh-35px w-100 align-content-center align-items-start btn-pointer latest-client ${className} `} >
      <div className='col text-truncate text-start'>
        {dayjs(dateOfCreation).format("MM-DD-YYYY")}
      </div>
      <div className='col text-truncate text-start'>
        {dayjs(dateOfCreation).format("HH:mm:ss UTC")}
      </div>
      <div className='col text-truncate text-center'>
        {personalNumber}
      </div>
      <div className='col text-truncate text-end'>
        {fullName}
      </div>
    </div>
  );

};

export default LatestClientRecord;