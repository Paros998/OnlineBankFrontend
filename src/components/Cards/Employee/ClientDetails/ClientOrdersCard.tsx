import React, {FC} from 'react';
import ClientsOrdersWithModal from "./ClientsOrdersWithModal/ClientsOrdersWithModal";
import ClientsOrdersWithoutModal from "./ClientsOrdersWithoutModal/ClientsOrdersWithoutModal";

interface ClientOrdersCardProps {
  className?: string;
  clientId: number;
  fetchClient: () => Promise<void>;
  orderId?: string;
  fetchCreditCards: ()=>Promise<void>;
}

const ClientOrdersCard: FC<ClientOrdersCardProps> = ({className, clientId, fetchClient, orderId,fetchCreditCards}) => {
  if (orderId) {
    return <ClientsOrdersWithModal fetchClient={fetchClient} clientId={clientId} orderId={orderId} className={className} fetchCreditCards={fetchCreditCards}/>
  } else {
    return <ClientsOrdersWithoutModal fetchClient={fetchClient} clientId={clientId} className={className} fetchCreditCards={fetchCreditCards}/>
  }
};

export default ClientOrdersCard;