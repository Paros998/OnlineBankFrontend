import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientCardLayout from '../../../components/ClientCardLayout/ClientCardLayout';
import { LocationHeaders } from '../../../enums/LocationHeaders';
import Advertisements from '../../../components/Advertisements/Advertisements';
import InfoCard from '../../../components/InfoCard/InfoCard';
import EditClientAccordions from './EditClientAccordions/EditClientAccordions';
import ManageClientCreditCards from './ManageClientCreditCards/ManageClientCreditCards';

const Account = () => {
  return (
    <Row>
      <Col xs={8} className='h-100'>
        <ClientCardLayout location={LocationHeaders.Account}>
          <Row>
            <Col xs={7}>
              <EditClientAccordions/>
            </Col>

            <Col xs={5}>
              <h5 className="text-center">Dostępne karty płatnicze</h5>
              <ManageClientCreditCards />
            </Col>
          </Row>
        </ClientCardLayout>
      </Col>

      <Col xs={4} className="mt-5 account-info-layout">
        <Advertisements wrapperClassName="mt-2"/>

        <InfoCard className="mt-4 bg-warning h-40">
          <section>
            <h3>Uwaga dotycząca edycji konta</h3>

            <article>
              Użytkownik edytując dane konta nie zatwierdza zmian,
              lecz wysyła prośbę do pracownika o zatwierdzenie edytowanych
              zmian w koncie i danych logowania.
            </article>
          </section>
        </InfoCard>

        <InfoCard className="mt-4 bg-warning h-40">
          <section>
            <h3>Uwaga dotycząca kart kredytowych</h3>

            <article>
              Użytkownik może mieć maksymalnie 3 karty kredytowe
              przypisane jednocześnie do numeru rachunku.
            </article>
          </section>
        </InfoCard>
      </Col>
    </Row>
  );
};

export default Account;
