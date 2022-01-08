import React, {FC} from 'react';
import CardTemplate from "../../../CardTemplate";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";
import ClientOrders from "../../../../RecordsComponents/Employee/ClientOrders";
import {useFetchRawData} from "../../../../../hooks/useFetchRawData";
import {OrderModel} from "../../../../../interfaces/DatabaseModels/OrderModel";

interface ClientsOrdersWithoutModalProps {
  clientId: number;
  fetchClient: () => Promise<void>;
  className?:string;
}

const ClientsOrdersWithoutModal:FC<ClientsOrdersWithoutModalProps> = ({fetchClient,clientId,className}) => {

  const {rawData: Orders, isPending, fetchData: fetchOrders} = useFetchRawData<OrderModel[]>(`orders/client/${clientId}`)

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
        orders={Orders || []}
        fetchOrders={fetchOrders}
        fetchClient={fetchClient}
      />

    </CardTemplate>
  );
};

export default ClientsOrdersWithoutModal;