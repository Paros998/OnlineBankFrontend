import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from 'moment';
import CardTemplate from "../../../../components/Cards/CardTemplate";
import { useFetchRawData } from "../../../../hooks/useFetchRawData";
import { CyclicalTransferModel } from "../../../../interfaces/DatabaseModels/CyclicalTransferModel";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../../interfaces/DatabaseModels/ClientModel";
import CenteredSpinner from "../../../../components/CenteredSpinner/CenteredSpinner";
import { ClockFill } from 'react-bootstrap-icons';

const ComingPaymentsCard = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData, isPending } = useFetchRawData<CyclicalTransferModel[]>(
    `cyclical-transfers/coming/client/${currentUser?.clientId}`
  );

  const cyclicalTransfers = rawData ?? [];

  const isCCTLengthNotMax = cyclicalTransfers.length < 3 && cyclicalTransfers.length; // full name of variable is isComingCyclicalTransfersLengthNotMax

  console.log(cyclicalTransfers);

  return (
    <CardTemplate
      header='Nadchodzące płatności'
      headerDiamondClassName='fs-6'
      className='mt-4 w-100 ms-0 h-100 border-secondary'
      bodyClassName={`d-flex flex-column ${cyclicalTransfers.length === 3 && 'justify-content-between'}`}
    >
      <>
        <CenteredSpinner isPending={isPending}/>

        {
          cyclicalTransfers.map((transfer) => (
            <div key={transfer.transferId} className={`text-secondary-dark fw-bold ${isCCTLengthNotMax && 'mb-5'}`}>
              {moment(transfer.reTransferDate).format('DD.MM')}

              <div className='d-flex justify-content-between'>
                {transfer.title}

                <span className='text-end text-black'>
                  {transfer.amount.toFixed(2)} PLN
                </span>
              </div>

              <hr className='text-secondary'/>
            </div>
          ))
        }

        {
          isCCTLengthNotMax && (
            <div className='text-center'>
              <Button
                as={Link as any}
                to='/client/new-transfer'
                className='fw-bold rounded-pill w-75'
              >
                <ClockFill className='mb-1' /> Dodaj nowy przelew cykliczny
              </Button>
            </div>
          )
        }
      </>
    </CardTemplate>
  );
};

export default ComingPaymentsCard;
