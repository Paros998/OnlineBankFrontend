import React from 'react';
import {useCurrentUser} from "../../contexts/CurrentUserContext";
import {Roles} from "../../enums/Roles";
import ClientNavbar from "./Client/ClientNavbar";
import EmployeeNavbar from "./Employee/EmployeeNavbar";

const AuthorisedNavbar = () => {
  const user = useCurrentUser<unknown>();
  const role = user.role;

  if (role === Roles.RoleClient)
    return <ClientNavbar/>

  if (role === Roles.RoleEmployee )
    return <EmployeeNavbar/>

  return <EmployeeNavbar/>
};

export default AuthorisedNavbar;
