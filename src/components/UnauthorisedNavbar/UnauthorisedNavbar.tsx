import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";

type UnauthorisedNavbarProps = {
  type?: string;
};

const UnauthorisedNavbar = (props: UnauthorisedNavbarProps) => (
  <Navbar bg="primary-dark" className='sticky-top pt-0 pb-0 bx-shadow-black z-1000'>
    <Container className='pt-1 pb-1'>
      <Navbar.Brand as={Link} to='/'>
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

      <Navbar.Toggle aria-controls="nav"/>

      <Navbar.Collapse id="nav">
        <Nav className="ms-auto">
          {
            props.type === "client"
              && <Nav.Link as={Link} to='/' className='me-2'>
              <span className='text-white'>Strona główna</span>
            </Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Container>
    {
      props.type === "employee"
        && <Container className='bg-dark w-25 h-100 pt-1 pb-1 me-0'>
            <span className='text-white mx-auto fs-3'>
              Serwis Pracownika
            </span>
        </Container>
    }
  </Navbar>
);

export default UnauthorisedNavbar;
