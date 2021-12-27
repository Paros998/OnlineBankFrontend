import React from 'react';
import { Col, Row } from "react-bootstrap";
import InfoCard from "../../../components/InfoCard/InfoCard";
import AccountCard from "./AccountCard/AccountCard";
import RecentPayments from "./RecentPayments/RecentPayments";
import Advertisements from "./Advertisements/Advertisements";
import ClientComingPaymentsCard from "../../../components/Cards/ClientComingPaymentsCard/ClientComingPaymentsCard";

const Home = () => {
  return (
    <>
      <Row>
        <Col xs={8}>
          <AccountCard/>
        </Col>

        <Col xs={4}>
          <InfoCard className='bg-info'>
            <h3>
              Witamy w naszym serwisie Future Bank
            </h3>

            Zapewniamy najkorzystniejsze i najwygodniejsze funkcjonalności dla naszego klienta.
            <span className='mt-4'>Życzymy miłego dnia.</span>
          </InfoCard>
        </Col>
      </Row>

      <Row className='pb-5'>
        <Col xs={8}>
          <RecentPayments/>

          <Advertisements />
        </Col>

        <Col xs={4} className='mb-4'>
          <ClientComingPaymentsCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;
