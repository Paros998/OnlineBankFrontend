import React from 'react';
import { Container, Navbar, Row } from "react-bootstrap";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { Link } from "react-router-dom";
import CollapseOptions from "./CollapseOptions/CollapseOptions";

const ClientSideNavbar = () => {
  dayjs.extend(isLeapYear);
  dayjs.locale('pl');
  require('dayjs/locale/pl');

  const currentDate = dayjs().format('DD/MM/YYYY');
  const dayOfWeek = dayjs().format('dddd').toLocaleUpperCase();

  return (
    <>
      <Navbar
        className='
        bg-primary-dark
        text-light
        position-fixed
        vh-100
        w-180px
        flex-column
        p-0
        justify-content-between
        float-start
        z-1000
        '
      >
        <CollapseOptions/>

        <section className='mb-5 w-75'>
          <Container className='text-center p-0'>
            <Row>
              <Link className='text-light text-decoration-none' to='#'>
                <div className='side-navbar-option'>Regulamin</div>
              </Link>
            </Row>

            <Row>
              <Link className='text-light text-decoration-none' to='#'>
                <div className='side-navbar-option'>FAQ</div>
              </Link>
            </Row>

            <Row>
              <hr className='text-light w-100 mt-1 mb-2'/>
            </Row>

            <Row className='justify-content-center'>
              {dayOfWeek}
            </Row>

            <Row className='justify-content-center'>
              {currentDate}
            </Row>
          </Container>
        </section>
      </Navbar>
    </>
  );
};

export default ClientSideNavbar;
