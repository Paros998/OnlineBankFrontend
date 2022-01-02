import React, { useState } from 'react';
import ClientCardLayout from "../../../components/ClientCardLayout/ClientCardLayout";
import { LocationHeaders } from "../../../enums/LocationHeaders";
import HistoryTable from "./HistoryTable/HistoryTable";
import { useTransfers } from "./hooks/useTransfers";
import { HistorySearchFormikValues } from "../../../interfaces/formik/HistorySearchFormikValues";
import HistorySearchForm from "./HistorySearchForm/HistorySearchForm";
import { useTableProps } from "../../../hooks/useTableProps";
import { useModalState } from "../../../hooks/useModalState";
import { TransferModel } from "../../../interfaces/DatabaseModels/TransferModel";
import TransferDetailsModal from "../../../components/Modal/TransferDetailsModal/TransferDetailsModal";
import { Col, Row } from "react-bootstrap";
import Advertisements from "../../../components/Advertisements/Advertisements";
import HistoryEstimatedPayments from "./HistoryEstimatedPayments/HistoryEstimatedPayments";

const History = () => {
  const [historyParams, setHistoryParams] = useState<HistorySearchFormikValues>({} as HistorySearchFormikValues);
  const { formattedTransfers: transfers, isPending } = useTransfers(historyParams);
  const { toggleVisibility, showModal, entity } = useModalState<TransferModel>();
  const tableProps = useTableProps<TransferModel>(
    { data: transfers || [], isPending },
    'transferId',
    { initialSortBy: 'transferDate' },
    (e: any, row: TransferModel) => toggleVisibility(row),
  );

  return (
    <Row>
      <Col xs={8}>
        <ClientCardLayout location={LocationHeaders.History} style={{ height: '54rem' }}>
          <HistorySearchForm setHistoryParams={setHistoryParams}/>

          <HistoryTable tableProps={tableProps}/>

          <TransferDetailsModal
            showModal={showModal}
            toggleVisibility={toggleVisibility}
            data={entity || {} as TransferModel}
          />
        </ClientCardLayout>
      </Col>

      <Col xs={4} className='mt-5'>
        <Advertisements wrapperClassName='mt-2' />

        <HistoryEstimatedPayments transfers={transfers || []} />
      </Col>
    </Row>
  );
};

export default History;
