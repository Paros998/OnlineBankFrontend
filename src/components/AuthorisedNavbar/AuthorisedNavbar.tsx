import React from 'react';
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
