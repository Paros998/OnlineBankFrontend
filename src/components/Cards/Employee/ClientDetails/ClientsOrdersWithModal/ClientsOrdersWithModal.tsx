import React, {FC, useState} from 'react';
import CardTemplate from "../../../CardTemplate";
import ClientsOrderModal from "../../../../Modal/EmployeeModals/ClientsOrder/ClientsOrderModal";
import {ClientsOrderModalTypes} from "../../../../../enums/ClientsOrderModalTypes";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";
import ClientOrders from "../../../../RecordsComponents/Employee/ClientOrders";
import {useFetchRawData} from "../../../../../hooks/useFetchRawData";
import {OrderModel} from "../../../../../interfaces/DatabaseModels/OrderModel";

interface ClientsOrdersWithModalProps {
  clientId: number;
  fetchClient: () => Promise<void>;
  className?:string;
  orderId: string;
}

const ClientsOrdersWithModal:FC<ClientsOrdersWithModalProps> = ({fetchClient,clientId,className,orderId}) => {

  const {rawData: Orders, isPending, fetchData: fetchOrders} = useFetchRawData<OrderModel[]>(`orders/client/${clientId}`)

  const {rawData: Order, isPending: isPendingOrder} = useFetchRawData<OrderModel>(`/orders/${orderId}`);

  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <CardTemplate
      header='Prośby klienta'
      className={`text-primary bg-taupe fst-normal ${className}`}
      headerClassName='text-primary-dark'
      bodyClassName='text-primary-dark thumb-primary-dark '
      headerDiamondClassName='text-primary-dark'
    >
      <ClientsOrderModal
        setShowModal={setShowModal}
        showModal={showModal}
        order={Order}
        fetchOrders={fetchOrders}
        fetchClient={fetchClient}
        modalType={ClientsOrderModalTypes.USE}
        isPending={isPendingOrder}
      />

      <CenteredSpinnerTemplate
        variant='primary-dark'
        isPending={isPending}
      />

      <ClientOrders
        orders={Orders || []}
        fetchOrders={fetchOrders}
        fetchClient={fetchClient}/>

    </CardTemplate>
  );
};

export default ClientsOrdersWithModal;