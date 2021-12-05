import React from 'react';
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.svg";
import { ClientModel } from "../../../interfaces/DatabaseModels/ClientModel";

const ClientNavbar = () => {
  const { handleLogout, currentUser } = useCurrentUser<ClientModel>();

  return (
    <Navbar bg="primary-dark" className='sticky-top pt-0 pb-0 bx-shadow-dark z-1000'>
      <Container className='pt-1 pb-1 ms-xxl-5 me-xxl-5 justify-content-between'>
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
            <Nav.Link
              as={Link}
              to='/client/account'
              className='me-5 p-0 d-flex text-white align-items-center w-250px'
              style={{ maxHeight: 64 }}
            >
              <img alt='' src={user} width={32} height={32} className='me-3'/>

              <span className='fst-normal'>
                {currentUser?.fullName}
              </span>
            </Nav.Link>

            <Nav.Link as={Link} to='/login' className='me-2 p-0'>
              <Button
                variant='light'
                type='button'
                className='text-primary rounded-card-10'
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

export default ClientNavbar;
