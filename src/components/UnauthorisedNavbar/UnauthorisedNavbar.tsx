import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import logo from '../../assets/images/logo.png';

const UnauthorisedNavbar = () => (
  <Navbar bg="primary-dark" className='sticky-top'>
    <Container>
      <Navbar.Brand href="/client/home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <span className='text-white ms-3'>
            Future Bank - Z nami wyruszysz w pewną przyszłość.
          </span>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default UnauthorisedNavbar;