import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.svg"

import {useCurrentUser} from "../../contexts/CurrentClientContext";
import {useCurrentEmployee} from "../../contexts/CurrentEmployeeContext";
import ClientNavbar from "./Client/ClientNavbar";
import EmployeeNavbar from "./Employee/EmployeeNavbar'";

type AuthorisedNavbarProps = {
  type?: string;
};

const AuthorisedNavbar = (props: AuthorisedNavbarProps) => {
  return (
    props.type === 'client' ? <ClientNavbar/> : <EmployeeNavbar/>
  )
};

export default AuthorisedNavbar;