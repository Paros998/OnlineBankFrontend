import React from 'react';
import {useCurrentUser} from "../contexts/CurrentUserContext";
import {Roles} from "../enums/Roles";
import ClientAuthorisedViews from "./ClientAuthorisedViews/ClientAuthorisedViews";
import EmployeeAuthorisedViews from "./EmployeeAuthorisedViews/EmployeeAuthorisedViews";
import UnauthorisedViews from "./UnauthorisedViews/UnauthorisedViews";
import Pending from "../components/Pending/Pending";

const Views = () => {
  const user = useCurrentUser<unknown>();

  const isClient = user?.role === Roles.RoleClient;
  const isEmployee = user?.role === Roles.RoleEmployee;
  const isAdmin = user?.role === Roles.RoleAdmin;

  if (user?.isPending) {
    return <Pending />;
  }

  if (user?.currentUser && isClient) {
    return <ClientAuthorisedViews />;
  }

  if (user?.currentUser && (isEmployee || isAdmin)) {
    return <EmployeeAuthorisedViews />;
  }

  return <UnauthorisedViews />;
};

export default Views;
