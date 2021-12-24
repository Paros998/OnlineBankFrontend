import React, { useState } from 'react';
import { Button, Collapse, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CollapseOptions = () => {
  const [viewCollapse, setViewCollapse] = useState(false);
  const [paymentsCollapse, setPaymentsCollapse] = useState(false);

  return (
    <div className='
        d-flex
        flex-column
        justify-content-center
        align-items-center
        w-100
        '
    >
      <section className='w-75'>
        <Button
          variant='light'
          className='text-primary w-100 mt-4 navbar-btn'
          onClick={() => setViewCollapse((prevState => !prevState))}
        >
          Widok
        </Button>

        <Collapse in={viewCollapse}>
          <Container className='text-center p-0'>
            <Row className='mt-3'>
              <Link className='text-light text-decoration-none' to='/client/home'>
                <div className='side-navbar-option'>Strona główna</div>
              </Link>
            </Row>

            <Row>
              <Link className='text-light text-decoration-none' to='/client/history'>
                <div className='side-navbar-option'>Historia</div>
              </Link>
            </Row>
          </Container>
        </Collapse>
      </section>

      <section className='w-75'>
        <Button
          variant='light'
          className='text-primary w-100 mt-4 navbar-btn'
          onClick={() => setPaymentsCollapse((prevState => !prevState))}
        >
          Płatności
        </Button>

        <Collapse in={paymentsCollapse}>
          <Container className='text-center p-0'>
            <Row className='mt-3'>
              <Link className='text-light text-decoration-none' to='/client/new-transfer'>
                <div className='side-navbar-option'>Wykonaj przelew</div>
              </Link>
            </Row>

            <Row>
              <Link className='text-light text-decoration-none' to='/client/cyclical-transfers'>
                <div className='side-navbar-option'>Twoje przelewy cykliczne</div>
              </Link>
            </Row>
          </Container>
        </Collapse>
      </section>

      <Button
        as={Link as any}
        to='/client/account'
        variant='light'
        className='text-primary w-75 mt-4 navbar-btn'
      >
        Konto
      </Button>

      <hr className='text-light w-90 mx-auto'/>
    </div>
  );
};

export default CollapseOptions;
