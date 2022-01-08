import React, {FC, useState} from 'react';
import {OrderModel} from "../../../interfaces/DatabaseModels/OrderModel";
import ClientsOrder from "./ModalComponents/ClientsOrder";
import {Dropdown} from "react-bootstrap";
import {ClientsOrdersSort} from "../../../enums/ClientsOrdersSort";

interface PriorityOrdersProps {
  className?: string;
  orders: OrderModel[];
  fetchOrders: () => Promise<void>;
  fetchClient: () => Promise<void>;
}

const ClientOrders: FC<PriorityOrdersProps> = ({className, orders,fetchOrders,fetchClient}) => {
  const [sortType,setSortType] = useState<ClientsOrdersSort>(ClientsOrdersSort.All);
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

        <Dropdown className='w-100 d-flex mt-2 pb-2 ' drop='end'>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className='rounded-pill mx-auto'>
            Filtruj
          </Dropdown.Toggle>

          <Dropdown.Menu className='bg-transparent rounded-card-10 border-0 p-0 m-0 mt-1' >
            <Dropdown.Item
              onClick={()=>{setSortType(ClientsOrdersSort.All)}}
              active
              className='order-info bg-info text-light rounded-pill border-1 border-dark border '
            >
              Wszystkie
            </Dropdown.Item>
            <Dropdown.Item
              onClick={()=>{setSortType(ClientsOrdersSort.FINISHED)}}
              className='order-secondary bg-secondary text-light rounded-pill border-1 border-dark border'
            >
              Zakończone
            </Dropdown.Item>
            <Dropdown.Item
              onClick={()=>{setSortType(ClientsOrdersSort.FREE)}}
              className='order-warning bg-warning text-light rounded-pill border-1 border-dark border'
            >
              Wolne
            </Dropdown.Item>
            <Dropdown.Item
              onClick={()=>{setSortType(ClientsOrdersSort.MINE)}}
              className='order-success bg-success text-light rounded-pill border-1 border-dark border'
            >
              Moje
            </Dropdown.Item>
            <Dropdown.Item
              onClick={()=>{setSortType(ClientsOrdersSort.ASSIGNED)}}
              className='order-primary bg-primary text-light rounded-pill border-1 border-dark border'
            >
              Przypisane
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
      <hr/>

      <div>
        {
          orders.map((order, key) => (
            <ClientsOrder order={order} key={key} fetchOrders={fetchOrders} fetchClient={fetchClient} sortType={sortType}/>
          ))
        }
      </div>
    </>
  );
};

export default ClientOrders;