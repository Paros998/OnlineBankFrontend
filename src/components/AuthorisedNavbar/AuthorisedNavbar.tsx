import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useCurrentUser } from "../../contexts/CurrentClientContext";

const AuthorisedNavbar = () => {
  // TODO delete sandbox path when user context will be created
  const { handleLogout } = useCurrentUser();
  return (
    <Navbar bg="primary-dark" className='sticky-top'>
      <Container>
        <Navbar.Brand as={Link} to='/sandbox'>
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
              <Button
                variant='light'
                className='text-primary rounded-3'
                onClick={handleLogout}
              >
                Wyloguj
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthorisedNavbar;