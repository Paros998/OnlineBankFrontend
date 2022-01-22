import React, {FC} from 'react';
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import CardTemplate from "../../CardTemplate";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";

interface EmployeeOrdersCardProps{
  className?:string;
  employeeId:number | undefined;
}

const EmployeeOrdersCard:FC<EmployeeOrdersCardProps> = ({employeeId,className}) => {

  const {rawData:ActiveOrders,fetchData:fetchActiveOrder,isPending:isPendingActive} = useFetchRawData<OrderModel[]>(`/orders/employee/${employeeId}/active`);
  const {rawData:InactiveOrders,fetchData:fetchInactiveOrder,isPending:isPendingInactive} = useFetchRawData<OrderModel[]>(`/orders/employee/${employeeId}/inactive`);

  return (
    <CardTemplate header={'Zlecenia Pracownika'}
                  className={`text-secondary-dark' fst-normal bg-light border-secondary-dark bg-opacity-75 ${className}`}
                  headerClassName='text-secondary-dark'
                  bodyClassName='thumb-secondary-dark'
                  headerDiamondClassName='text-secondary-dark'
    >
      <div className='container-fluid w-100 '>
        <CenteredSpinnerTemplate variant='light' isPending={isPendingInactive || isPendingActive}/>
        //TODO show Orders

      </div>
    </CardTemplate>
  );
};

export default EmployeeOrdersCard;