import React, {FC, ReactNode} from 'react';
import CardTemplate from "../CardTemplate";
import {useFetchPriorityOrders} from "../../../hooks/useFetchPriorityOrders";
import MyVisits from "../../RecordsComponents/MyVisits";
import {Spinner} from "react-bootstrap";
import PriorityOrdersNotAssigned from "../../RecordsComponents/PriorityOrdersNotAssigned";
import dayjs from "dayjs";

interface OrdersProps {
  className?: string;
  children?: ReactNode;
}

const PriorityOrdersNotAssignedCard: FC<OrdersProps> = ({children, className}) => {
  const Orders = useFetchPriorityOrders();


  return (
    <CardTemplate header='Priorytetowe zlecenia bez przydziału'
                  className={`text-primary bg-light border-primary bg-opacity-75 ${className}`}
                  headerClassName='text-primary'
                  bodyClassName='thumb-primary'
                  headerDiamondClassName='text-primary'
                  headerLabel={
                    <div
                      className={`d-flex ps-3 pe-3 rounded-card-10 text-primary-dark w-100 justify-content-between align-items-center`}>
                      <span className='ms-2'>
                        ID Zlecenia
                      </span>
                      <span className='ms-1'>
                        ID Klienta
                      </span>
                      <span className='ms-2'>
                        Typ Zlecenia
                      </span>
                      <span className='ms-2'>
                        Data
                      </span>
                      <span className='ms-2'>
                        Czas Oczekiwania(D.H.M.S)
                      </span>
                    </div>}
    >

      {
        Orders ? (
          Orders.length === 0 ? <p className='text-info'>Nie ma żadnych nagłych zleceń do wykonania.</p>
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

    </CardTemplate>
  );
};

export default PriorityOrdersNotAssignedCard;