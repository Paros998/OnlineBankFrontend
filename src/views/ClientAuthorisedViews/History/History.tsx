import React from 'react';
import ClientCardLayout from '../../../components/ClientCardLayout/ClientCardLayout';
import { LocationHeaders } from '../../../enums/LocationHeaders';
import HistoryTable from './HistoryTable/HistoryTable';
import HistorySearchForm from './HistorySearchForm/HistorySearchForm';
import { Col, Row } from 'react-bootstrap';
import Advertisements from '../../../components/Advertisements/Advertisements';
import HistoryEstimatedPayments from './HistoryEstimatedPayments/HistoryEstimatedPayments';
import HistoryProvider from '../../../contexts/HistoryContext';

const History = () => (
  <HistoryProvider>
    <Row>
      <Col xs={8}>
        <ClientCardLayout location={LocationHeaders.History} style={{ height: '54rem' }}>
          <HistorySearchForm/>

          <HistoryTable/>
        </ClientCardLayout>
      </Col>

      <Col xs={4} className="mt-5">
        <Advertisements wrapperClassName="mt-2"/>

        <HistoryEstimatedPayments/>
      </Col>
    </Row>
  </HistoryProvider>
);

export default History;
