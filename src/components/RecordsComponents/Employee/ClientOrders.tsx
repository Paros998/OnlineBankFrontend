import React, {FC} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import dayjs from "dayjs";
import {useCurrentUser} from "../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import ClientsOrder from "./ModalComponents/ClientsOrder";

interface PriorityOrdersProps {
  className?: string;
  orders: OrderModel[];
  fetchOrders: () => Promise<void>;
  fetchClient: () => Promise<void>;
}

const ClientOrders: FC<PriorityOrdersProps> = ({className, orders,fetchOrders,fetchClient}) => {

  return (
    <>
      <div className='mw-100 text-light text-center rounded-card-10 bg-dark'>
        <span className='fw-bold'>
          Legenda przynależności i stanu zleceń
        </span>
        <div className='row '>
          <div className='col hstack justify-content-start ms-5'>
            <div className='rounded-circle bg-success my-auto me-1' style={{width:'20px',height:'20px'}}/>
            <span >
               Moje zlecenie
            </span>
          </div>
          <div className='col hstack justify-content-start'>
            <div className='rounded-circle bg-secondary my-auto me-1' style={{width:'20px',height:'20px'}}/>
            <span >
              Zakończone
            </span>
          </div>
        </div>
        <div className='row '>
          <div className='col hstack justify-content-start ms-5'>
            <div className='rounded-circle bg-primary my-auto me-1' style={{width:'20px',height:'20px'}}/>
            <span >
              Inny pracownik
            </span>
          </div>
          <div className='col hstack justify-content-start'>
            <div className='rounded-circle bg-warning my-auto me-1' style={{width:'20px',height:'20px'}}/>
            <span >
              Wolne
            </span>
          </div>
        </div>
      </div>
      <hr/>

      <div>
        {
          orders.map((order, key) => (
            <ClientsOrder order={order} key={key} fetchOrders={fetchOrders} fetchClient={fetchClient}/>
          ))
        }
      </div>
    </>
  );
};

export default ClientOrders;