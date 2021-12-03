import React from 'react';
import {useCurrentUser} from "../../contexts/CurrentUserContext";
import {Roles} from "../../enums/Roles";
import ClientSideNavbar from "./Client/ClientSideNavbar";
import EmployeeSideNavbar from "./Employee/EmployeeSideNavbar";
import AdminSideNavbar from "./Admin/AdminSideNavbar";

const SideNavbar = () => {

  const user = useCurrentUser<unknown>();
  const role = user.role;

  if (role === Roles.RoleClient)
    return <ClientSideNavbar/>;

  if (role === Roles.RoleEmployee)
    return <EmployeeSideNavbar/>;

  return <AdminSideNavbar/>;

}
export default SideNavbar;