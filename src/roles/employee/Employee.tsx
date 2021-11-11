import React from 'react';
import UnauthorizedViews from "./views/UnauthorizedViews/UnauthorizedViews";
import AuthorizedViews from "./views/AuthorizedViews/AuthorizedViews";
import {useCurrentEmployee} from "../../contexts/CurrentEmployeeContext";
import Pending from "../../components/Pending/Pending";


const Employee = () => {
  const { currentEmployee, isPending } = useCurrentEmployee();

  if (isPending) {
    return <Pending />;
  }

  if (currentEmployee) {
    return <AuthorizedViews />;
  }
  return <UnauthorizedViews />;

};

export default Employee;