import React from 'react';
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import TextWithDiamond from "../../../../components/TextWithDiamond/TextWithDiamond";
import { CalendarDay } from "react-bootstrap-icons";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext";
import { ClientModel } from "../../../../interfaces/DatabaseModels/ClientModel";
import { Link } from "react-router-dom";
import ClientMainLayout from "../../../../components/ClientMainLayout/ClientMainLayout";
import { LocationHeaders } from "../../../../enums/LocationHeaders";

const AccountCard = () => {
  const { currentUser } = useCurrentUser<ClientModel>();
  const accountPlaceholder = '-- ---- ---- ---- ---- ----';

  if (currentUser) {
    return (
      <ClientMainLayout location={LocationHeaders.Home}>
        <h6 className='text-end'>Dostępne środki</h6>

        <div className='d-flex justify-content-between'>
          <h2>
            <TextWithDiamond diamondClassName='fs-6'>
              Konto
            </TextWithDiamond>
          </h2>

          <div>
            <h1>{currentUser.balance || 0} PLN</h1>
          </div>
        </div>

        <h6 className='text-secondary-dark'>
          Numer konta: {currentUser.accountNumber || accountPlaceholder}
        </h6>

        <div className='mt-3'>
          <Button
            as={Link as any}
            to='/client/new-transfer'
            className='rounded-pill me-3 fw-bold'
          >
            Przelew
          </Button>

          <Button
            as={Link as any}
            to='/client/history'
            className='rounded-pill fw-bold'
            variant='secondary-light'
          >
            <div className='d-flex align-items-center'>
              <CalendarDay className='fs-4 me-1'/>
              Historia
            </div>
          </Button>
        </div>

        <Container className='m-0 mt-5 p-0 text-start text-secondary-dark text-nowrap'>
          <Row>
            <Col xs={3}>
              <p>Data</p>
            </Col>

            <Col xs={3}>
              <p>Kategoria</p>
            </Col>

            <Col xs={3}>
              <p>Odbiorca | Nadawca</p>
            </Col>

            <Col xs={3} className='text-end'>
              <p>Kwota</p>
            </Col>
          </Row>
        </Container>
      </ClientMainLayout>
    );
  }

  return <Spinner animation='border'/>
};

export default AccountCard;
