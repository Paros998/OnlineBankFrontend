import React, {FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import ClientOrders from "../../../RecordsComponents/Employee/ClientOrders";

interface ClientOrdersCardProps {
  className?:string;
  clientId:number;
}

const ClientOrdersCard:FC<ClientOrdersCardProps> = ({className,clientId}) => {

  const {rawData,isPending} = useFetchRawData<OrderModel[]>(`orders/client/${clientId}`)

  return (
    <CardTemplate
      header='Prośby klienta'
      className={`text-primary bg-taupe fst-normal ${className}`}
      headerClassName='text-primary-dark'
      bodyClassName='text-primary-dark thumb-primary-dark '
      headerDiamondClassName='text-primary-dark'
    >
      <CenteredSpinnerTemplate
        variant='primary-dark'
        isPending={isPending}
      />

      <ClientOrders
        orders={rawData || []}
      />

    </CardTemplate>
  );
};

export default ClientOrdersCard;