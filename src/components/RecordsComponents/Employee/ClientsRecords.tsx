import React, {FC} from 'react';
import {ClientModel} from "../../../interfaces/DatabaseModels/ClientModel";
import ClientRecord from "./ClientRecord";

interface ClientsRecordsProps{
  Clients: ClientModel[] | [];
  isPending?:boolean;
  handleClick?:(clientId:number|undefined)=>void;
  className?:string;
  id?:number;
}

const ClientsRecords:FC<ClientsRecordsProps> = ({Clients,isPending,handleClick,className,id}) => {
  if(isPending)
    return null;
  if(Clients.length === 0)
    return (
      <p className='text-info fw-bold'>Nie znaleziono klientów</p>
    );
  else return (
    <>
      {
        Clients.map((client, key) => {
            return <ClientRecord key={key} client={client} className={`${className} ${key % 2 === 0 ?  'bg-dark' : 'bg-secondary-dark'} ${client.clientId === id && 'client-active' } `} handleClick={handleClick}/>
          })
      }
    </>
  );

};

export default ClientsRecords;