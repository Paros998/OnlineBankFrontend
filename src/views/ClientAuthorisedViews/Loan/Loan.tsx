import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientCardLayout from '../../../components/ClientCardLayout/ClientCardLayout';
import { LocationHeaders } from '../../../enums/LocationHeaders';
import NewLoan from './NewLoan/NewLoan';
import ActiveLoan from './ActiveLoan/ActiveLoan';
import LoanProvider from '../../../contexts/LoanContext';

const Loan = () => {
  return (
    <LoanProvider>
      <Row>
        <Col xs={8}>
          <ClientCardLayout location={LocationHeaders.Loan} style={{ height: '45.2rem' }}>
            <NewLoan/>
          </ClientCardLayout>
        </Col>

        <Col xs={4} className="mt-2" style={{ height: '45.2rem' }}>
          <ActiveLoan/>
        </Col>
      </Row>
    </LoanProvider>
  );
};

export default Loan;
