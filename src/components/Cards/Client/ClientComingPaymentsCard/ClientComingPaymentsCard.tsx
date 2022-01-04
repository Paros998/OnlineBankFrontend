import React from 'react';
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import CardTemplate from "../../CardTemplate";
import { useFetchRawData } from "../../../../hooks/useFetchRawData";
import { CyclicalTransferModel } from "../../../../interfaces/DatabaseModels/CyclicalTransferModel";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../../interfaces/DatabaseModels/ClientModel";
import CenteredSpinner from "../../../CenteredSpinner/CenteredSpinner";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

dayjs.extend(isLeapYear);
dayjs.locale('pl');

const ClientComingPaymentsCard = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData: cyclicalTransfers, isPending } = useFetchRawData<CyclicalTransferModel[]>(
    `cyclical-transfers/coming/client/${currentUser?.clientId}`
  );

  return (
    <CardTemplate
      header='Nadchodzące płatności'
      headerDiamondClassName='fs-6'
      className='mt-4 w-100 ms-0 h-100 border-secondary'
      bodyClassName='d-flex flex-column justify-content-between'
    >
      <>
        {
          cyclicalTransfers?.map((transfer) => (
            <div key={transfer.transferId} className='text-secondary-dark fw-bold'>
              {dayjs(transfer.reTransferDate).format('DD.MM.YYYY')}

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
          !cyclicalTransfers?.length && (
            <div className='text-center'>
              <Button
                as={Link as any}
                to='/client/cyclical-transfers'
                className='fw-bold'
              >
                Dodaj nowy przelew cykliczny
              </Button>
            </div>
          )
        }

        <CenteredSpinner isPending={isPending}/>
      </>
    </CardTemplate>
  );
};

export default ClientComingPaymentsCard;
