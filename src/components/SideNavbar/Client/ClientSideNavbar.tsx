import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import { Container, Navbar, Row } from "react-bootstrap";
import CollapseOptions from "./CollapseOptions/CollapseOptions";
import { capitalize } from '../../../utils/capitalize';

const localDateLang = require('moment/locale/pl.js');
const localMoment = moment().locale(localDateLang.toString());

const currentDate = localMoment.format('DD.MM.YYYY');
const dayOfWeek = capitalize(localMoment.format('dddd'));

const ClientSideNavbar = () => {
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
