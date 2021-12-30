import React from 'react';
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../../interfaces/DatabaseModels/ClientModel";
import { useFetchRawData } from "../../../../hooks/useFetchRawData";
import { TransferModel } from "../../../../interfaces/DatabaseModels/TransferModel";
import RecentPaymentsLoadingPlaceholder from "./RecentPaymentsLoadingPlaceholder/RecentPaymentsLoadingPlaceholder";
import { useModalState } from "../../../../hooks/useModalState";
import { transferCategoryClassNames } from "../../../../constants/transferCategoryClassNames";
import { amountColor } from "../../../../constants/amountColor";
import TransferDetailsModal from "../../../../components/Modal/TransferDetailsModal/TransferDetailsModal";

dayjs.extend(isLeapYear);
dayjs.locale('pl');

const RecentPayments = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const { rawData: transfers, isPending } = useFetchRawData<TransferModel[]>(
    `/transfers/recent/client/${currentUser?.clientId}`
  );
  const { showModal, toggleVisibility, entity } = useModalState<TransferModel>();

  return (
    <>
      {
        transfers?.map((transfer) => (
          <Card
            className='mt-3 pe-4 ps-4 border-secondary recent-payment'
            onClick={() => toggleVisibility(transfer)}
            key={transfer.transferId}
          >
            <Container className='m-0 p-0 text-start text-nowrap w-100'>
              <Row>
                <Col xs={3}>
                  <span className='fw-bold'>
                    {dayjs(transfer.transferDate).format('DD.MM.YYYY')}
                  </span>
                </Col>

                <Col xs={3}>
                  <span className={`fw-bold ${transferCategoryClassNames[transfer.category]}`}>
                    {transfer.category}
                  </span>
                </Col>

                <Col xs={3}>
                  <span className='fw-bold'>
                    {transfer.receiver_sender}
                  </span>
                </Col>

                <Col xs={3} className='text-end'>
                  <span className={`fw-bold ${amountColor[transfer.type]}`}>
                    {transfer.amount} PLN
                  </span>
                </Col>
              </Row>
            </Container>
          </Card>
        ))
      }

      <TransferDetailsModal
        showModal={showModal}
        toggleVisibility={toggleVisibility}
        data={entity || {} as TransferModel}
      />

      <RecentPaymentsLoadingPlaceholder isPending={isPending}/>
    </>
  );
};

export default RecentPayments;
