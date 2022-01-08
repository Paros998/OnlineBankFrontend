import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import user from '../../../assets/images/user.svg';
import { ClientModel } from '../../../interfaces/DatabaseModels/ClientModel';

const ClientNavbar = () => {
  const {
    handleLogout,
    currentUser,
  } = useCurrentUser<ClientModel>();

  return (
    <Navbar bg="primary-dark" className="sticky-top ps-5 pe-5 pt-0 pb-0 bx-shadow-dark z-2000">
      <Navbar.Brand className="text-white">
        <Navbar.Brand as={Link} to="/client/home" className=''>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />

          <span className="text-white ms-3">
            Future Bank - Z nami wyruszysz w pewną przyszłość.
          </span>
        </Navbar.Brand>
      </Navbar.Brand>

      <Navbar.Toggle/>

      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link
            as={Link}
            to="/client/account"
            className="p-0 d-flex text-white align-items-center w-250px"
            style={{ maxHeight: 64 }}
          >
            <img alt="" src={user} width={32} height={32} className="me-3"/>

            <span className="fst-normal">
              {currentUser?.fullName}
            </span>
          </Nav.Link>

          <Nav.Link as={Link} to="/login" className='p-0'>
            <Button
              variant="light"
              type="button"
              size='sm'
              className="text-primary"
              onClick={handleLogout}
            >
              Wyloguj
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ClientNavbar;
