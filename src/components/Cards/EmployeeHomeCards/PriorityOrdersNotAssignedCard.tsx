import React, {FC, ReactNode} from 'react';
import CardTemplate from "../CardTemplate";
import {useFetchPriorityOrders} from "../../../hooks/useFetchPriorityOrders";
import {Spinner} from "react-bootstrap";
import PriorityOrdersNotAssigned from "../../RecordsComponents/Employee/PriorityOrdersNotAssigned";

interface OrdersProps {
  className?: string;
  children?: ReactNode;
}

const PriorityOrdersNotAssignedCard: FC<OrdersProps> = ({ className}) => {
  const Orders = useFetchPriorityOrders();


  return (
    <CardTemplate header='Priorytetowe zlecenia bez przydziału'
                  className={`text-primary bg-light border-primary bg-opacity-75 ${className}`}
                  headerClassName='text-primary'
                  bodyClassName='thumb-primary'
                  headerDiamondClassName='text-primary'
                  headerLabel={
                    <div className='container-fluid w-100 '>
                      <div
                        className={`row align-items-start ps-3 pe-3 rounded-card-10 text-primary-dark w-100 `}>
                        <div className='col ms-2'>
                          ID Zlecenia
                        </div>
                        <div className='col ms-1'>
                          ID Klienta
                        </div>
                        <div className='col ms-2'>
                          Typ Zlecenia
                        </div>
                        <div className='col ms-2'>
                          Data
                        </div>
                        <div className='col ms-2'>
                          Czas Oczekiwania(D.H.M.S)
                        </div>
                      </div>
                    </div>}
    >
      <div className='container-fluid w-100 '>
      {
        Orders ? (
          Orders.length === 0 ? <p className='text-primary-dark fw-bold'>Nie ma żadnych nagłych zleceń do wykonania.</p>
            : Orders.map((item, key) => (
              <PriorityOrdersNotAssigned
                order={item}
                className={`${key === 1 && "bg-primary"} ${key === 2 && "bg-warning"} ${key > 2 && "bg-info"}`}
              />
            ))
        ) : (
          <Spinner animation={"border"} variant={"primary"}/>
        )
      }
      </div>
    </CardTemplate>
  );
};

export default PriorityOrdersNotAssignedCard;