import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const UnauthorisedNavbar = () => (
  <Navbar bg="primary-dark" className='sticky-top'>
    <Container>
      <Navbar.Brand as={Link} to='/client/home'>
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

      <Navbar.Toggle aria-controls="nav" />

      <Navbar.Collapse id="nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to='/client/home'>
            <span className='text-white'>Strona główna</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default UnauthorisedNavbar;