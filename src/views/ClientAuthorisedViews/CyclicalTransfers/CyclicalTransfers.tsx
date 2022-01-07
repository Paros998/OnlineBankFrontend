import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientCardLayout from '../../../components/ClientCardLayout/ClientCardLayout';
import { LocationHeaders } from '../../../enums/LocationHeaders';
import Advertisements from '../../../components/Advertisements/Advertisements';
import CyclicalTransferTable from './CyclicalTransferTable/CyclicalTransferTable';
import CyclicalEstimatedPayments from './CyclicalEstimatedPayments/CyclicalEstimatedPayments';
import CyclicalTransferSearchForm from './CyclicalTransferSearchForm/CyclicalTransferSearchForm';
import CyclicalTransferProvider from '../../../contexts/CyclicalTransferContext';

const CyclicalTransfers = () => (
  <CyclicalTransferProvider>
    <Row>
      <Col xs={8}>
        <ClientCardLayout location={LocationHeaders.CyclicalTransfers} style={{ height: '54rem' }}>
          <CyclicalTransferSearchForm/>

          <CyclicalTransferTable/>
        </ClientCardLayout>
      </Col>

      <Col xs={4} className="mt-5">
        <Advertisements wrapperClassName="mt-2"/>

        <CyclicalEstimatedPayments/>
      </Col>
    </Row>
  </CyclicalTransferProvider>
);

export default CyclicalTransfers;
