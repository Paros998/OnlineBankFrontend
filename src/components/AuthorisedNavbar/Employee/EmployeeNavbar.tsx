import React from 'react';
import {Button, Container, Nav, Navbar, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.svg";
import {useCurrentUser} from "../../../contexts/CurrentUserContext";
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import {Roles} from "../../../enums/Roles";

const EmployeeNavbar = () => {
  const redirect = '/employee/profile';
  const redirectLogin = '/login';

  const { handleLogout, currentUser,role } = useCurrentUser<EmployeeModel>();

  return (
    <Navbar bg="primary-dark" className='sticky-top pt-0 pb-0 bx-shadow-dark z-1000'>
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
              {
                currentUser ?
                  <span className='fst-normal'>
                    {currentUser?.fullName}
                  </span>
                  : <Spinner animation={"border"} variant={"dark"}/>
              }

            </Nav.Link>

            <Nav.Link as={Link} to={redirectLogin} className='me-2 p-0'>
              <Button
                variant='light'
                type='button'
                className='text-primary rounded-card-10 '
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
          {role === Roles.RoleEmployee ? "Serwis Pracownika" : "Serwis Administratora"}
        </span>
      </Container>
    </Navbar>
  );
};

export default EmployeeNavbar;
