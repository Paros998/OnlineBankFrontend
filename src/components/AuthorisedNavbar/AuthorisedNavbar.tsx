import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";

type AuthorisedNavbarProps = {
  type?: string;
};

const AuthorisedNavbar = (props: AuthorisedNavbarProps) => {
  // TODO delete sandbox path when user context will be created
  return (
    <Navbar bg="primary-dark" className='sticky-top pt-0 pb-0 bx-shadow-black z-1000'>
      <Container className='pt-1 pb-1'>
        <Navbar.Brand as={Link} to='/home'>
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
              props.type === 'employee'
                ? <Nav.Link as={Link} to='/employee/login' className='me-2 '>
                  <Button
                    variant='light'
                    type='button'
                    className='text-primary btn-outline-dark rounded-pill'
                  >
                    Wyloguj
                  </Button>
                </Nav.Link>

                : <Nav.Link as={Link} to='/client/login' className='me-2'>
                  <Button
                    variant='outline-light'
                    type='button'
                  >
                    Wyloguj
                  </Button>
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
};

export default AuthorisedNavbar;