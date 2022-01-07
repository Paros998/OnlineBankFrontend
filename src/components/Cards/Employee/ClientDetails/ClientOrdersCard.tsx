import React, {FC, useState} from 'react';
import CardTemplate from "../../CardTemplate";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {OrderModel} from "../../../../interfaces/DatabaseModels/OrderModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import ClientOrders from "../../../RecordsComponents/Employee/ClientOrders";
import ClientsOrderModal from "../../../Modal/EmployeeModals/ClientsOrder/ClientsOrderModal";
import {ClientsOrderModalTypes} from "../../../../enums/ClientsOrderModalTypes";
import dayjs from "dayjs";
import {OrderTypes} from "../../../../enums/OrderTypes";

interface ClientOrdersCardProps {
  className?: string;
  clientId: number;
  fetchClient: () => Promise<void>;
  orderId?: string;
}

const ClientOrdersCard: FC<ClientOrdersCardProps> = ({className, clientId, fetchClient, orderId}) => {

  const {
    rawData: Orders,
    isPending,
    fetchData: fetchOrders
  } = useFetchRawData<OrderModel[]>(`orders/client/${clientId}`)
  const {rawData: Order, isPending: isPendingOrder} = useFetchRawData<OrderModel>(`/orders/${orderId}`);
  const [showModal, setShowModal] = useState<boolean>(true);

  if (orderId) {
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
  } else {
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
  }
};

export default ClientOrdersCard;