import React, { FC } from 'react';
import { useFetchRawData } from '../../../../hooks/useFetchRawData';
import { OrderModel } from '../../../../interfaces/DatabaseModels/OrderModel';
import CardTemplate from '../../CardTemplate';
import CenteredSpinnerTemplate from '../../../CenteredSpinner/CenteredSpinnerTemplate';
import PriorityOrderNotAssigned from '../../../RecordsComponents/Employee/PriorityOrderNotAssigned';

interface EmployeeOrdersCardProps{
  className?: string;
  employeeId: number | undefined;
}

const EmployeeOrdersCard:FC<EmployeeOrdersCardProps> = ({ employeeId,className }) => {
  const { rawData: activeOrders, isPending: isPendingActive } = useFetchRawData<OrderModel[]>(`/orders/employee/${employeeId}/active`);
  const { rawData: inactiveOrders, isPending: isPendingInactive } = useFetchRawData<OrderModel[]>(`/orders/employee/${employeeId}/inactive`);

  const isDataPending = isPendingActive || isPendingInactive;

  return (
    <CardTemplate
      header='Zlecenia Pracownika'
      className={`text-secondary-dark' fst-normal bg-light border-secondary-dark bg-opacity-75 ${className}`}
      headerClassName='text-secondary-dark'
      bodyClassName='thumb-secondary-dark'
      headerDiamondClassName='text-secondary-dark'
    >
      <div className='container-fluid w-100 '>
        <CenteredSpinnerTemplate variant='light' isPending={isDataPending}/>
          {
            activeOrders?.length === 0 ? <p className='text-success fw-bold'>Brak aktywnych zleceń do wykonania!</p>
              : activeOrders?.map((item, key) => (
                <PriorityOrderNotAssigned
                  key={key}
                  order={item}
                  className='bg-success text-dark align-items-center order-success'
                />
              ))
          }

          {
            inactiveOrders?.length === 0 ? <p className='text-secondary fw-bold'>Brak historii zleceń!</p>
              : inactiveOrders?.map((item, key) => (
                <PriorityOrderNotAssigned
                  key={key}
                  order={item}
                  className='bg-secondary text-dark align-items-center order-secondary'
                  hideLastCol={true}
                />
              ))
          }
      </div>
    </CardTemplate>
  );
};

export default EmployeeOrdersCard;
