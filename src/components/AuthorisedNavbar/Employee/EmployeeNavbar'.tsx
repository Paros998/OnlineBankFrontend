import React from 'react';
import {useCurrentEmployee} from "../../../contexts/CurrentEmployeeContext";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.svg";

const EmployeeNavbar = () => {
  const redirect = '/employee/profile';
  const redirectLogin = '/employee/login';

  const {handleLogout, currentEmployee} = useCurrentEmployee();
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
            <Nav.Link as={Link} to={redirect} className='me-5 p-0 d-flex text-white align-items-center w-250px '
                      style={{maxHeight: 64}}>
              <img alt='' src={user} width={32} height={32} className='me-3 '/>
              <span className='fst-normal'>{currentEmployee?.fullName}</span>
            </Nav.Link>

            <Nav.Link as={Link} to={redirectLogin} className='me-2 p-0'>
              <Button
                variant='light'
                type='button'
                className='text-primary btn-outline-dark rounded-pill '
                onClick={handleLogout}
              >
                Wyloguj
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className='bg-dark w-25 h-100 pt-1 pb-1 me-0'>
        <span className='text-white mx-auto fs-3'>
          Serwis Pracownika
        </span>
      </Container>
    </Navbar>
  );
};

export default EmployeeNavbar;