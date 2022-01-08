import React from 'react';
import { Col, Row } from "react-bootstrap";
import InfoCard from "../../../components/InfoCard/InfoCard";
import AccountCard from "./AccountCard/AccountCard";
import RecentPayments from "./RecentPayments/RecentPayments";
import Advertisements from "../../../components/Advertisements/Advertisements";
import ComingPaymentsCard
  from "./ComingPaymentsCard/ComingPaymentsCard";


const Home = () => {
  return (
    <>
      <Row>
        <Col xs={8}>
          <AccountCard/>
        </Col>

        <Col xs={4} className='mt-5'>
          <InfoCard className='bg-info mt-2 h-100'>
            <h3>
              Witamy w naszym serwisie Future Bank
            </h3>

            Zapewniamy najkorzystniejsze i najwygodniejsze funkcjonalności dla naszego klienta.
            <span className='mt-4'>Życzymy miłego dnia.</span>
          </InfoCard>
        </Col>
      </Row>

      <Row>
        <Col xs={8}>
          <RecentPayments/>

          <Advertisements wrapperClassName='mt-5' />
        </Col>

        <Col xs={4} className='mb-4'>
          <ComingPaymentsCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;
