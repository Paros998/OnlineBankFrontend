import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from 'moment';
import CardTemplate from "../../CardTemplate";
import { useFetchRawData } from "../../../../hooks/useFetchRawData";
import { CyclicalTransferModel } from "../../../../interfaces/DatabaseModels/CyclicalTransferModel";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../../interfaces/DatabaseModels/ClientModel";
import CenteredSpinner from "../../../CenteredSpinner/CenteredSpinner";

const ClientComingPaymentsCard = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData, isPending } = useFetchRawData<CyclicalTransferModel[]>(
    `cyclical-transfers/coming/client/${currentUser?.clientId}`
  );

  const cyclicalTransfers = rawData ?? [];

  return (
    <CardTemplate
      header='Nadchodzące płatności'
      headerDiamondClassName='fs-6'
      className='mt-4 w-100 ms-0 h-100 border-secondary'
      bodyClassName={`d-flex flex-column ${cyclicalTransfers?.length === 3 && 'justify-content-between'}`}
    >
      <>
        <CenteredSpinner isPending={isPending}/>

        {
          cyclicalTransfers.map((transfer) => (
            <div key={transfer.transferId} className='text-secondary-dark fw-bold'>
              {moment(transfer.reTransferDate).format('DD.MM')}

              <div className='d-flex justify-content-between'>
                {transfer.title}

                <span className='text-end text-black'>
                  {transfer.amount} PLN
                </span>
              </div>

              <hr className='text-secondary'/>
            </div>
          ))
        }

        {
          cyclicalTransfers.length < 3 && cyclicalTransfers.length && (
            <div className='text-center'>
              <Button
                as={Link as any}
                to='/client/new-transfer'
                className='fw-bold'
              >
                Dodaj nowy przelew cykliczny
              </Button>
            </div>
          )
        }
      </>
    </CardTemplate>
  );
};

export default ClientComingPaymentsCard;
