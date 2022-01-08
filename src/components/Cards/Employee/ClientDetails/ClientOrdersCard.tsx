import React, {FC} from 'react';
import ClientsOrdersWithModal from "./ClientsOrdersWithModal/ClientsOrdersWithModal";
import ClientsOrdersWithoutModal from "./ClientsOrdersWithoutModal/ClientsOrdersWithoutModal";

interface ClientOrdersCardProps {
  className?: string;
  clientId: number;
  fetchClient: () => Promise<void>;
  orderId?: string;
}

const ClientOrdersCard: FC<ClientOrdersCardProps> = ({className, clientId, fetchClient, orderId}) => {
  if (orderId) {
    return <ClientsOrdersWithModal fetchClient={fetchClient} clientId={clientId} orderId={orderId} className={className}/>
  } else {
    return <ClientsOrdersWithoutModal fetchClient={fetchClient} clientId={clientId} className={className}/>
  }
};

export default ClientOrdersCard;