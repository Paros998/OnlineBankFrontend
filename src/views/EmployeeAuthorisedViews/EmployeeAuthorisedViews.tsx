import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Home/HomePage";
import ClientsPage from "./Clients/ClientsPage";
import NewClientPage from "./NewClient/NewClientPage";
import OrdersPage from "./Orders/OrdersPage";

import ClientDetailsPage from "./Clients/ClientDetailsPage";
import ManagementPage from "./AdminPages/Management/ManagementPage";
import EmployeesPage from "./AdminPages/Employees/EmployeesPage";
import EmployeeDetailsPage from "./AdminPages/Employees/EmployeeDetailsPage";

const EmployeeAuthorisedViews = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/employee/home' component={HomePage}/>
          <Route path='/employee/clients' component={ClientsPage}/>
          <Route path='/employee/client/:clientId/:orderId?' component={ClientDetailsPage} />
          <Route path='/employee/new-client' component={NewClientPage}/>
          <Route path='/employee/orders' component={OrdersPage}/>
          <Route path='/employee/admin/employees' component={EmployeesPage}/>
          <Route path='/employee/admin/employee/:employeeId/:orderId?' component={EmployeeDetailsPage}/>
          <Route path='/employee/admin/manage' component={ManagementPage}/>
          <Route path='*' component={HomePage}/>
        </Switch>
      </Router>
    </>
  );
};

export default EmployeeAuthorisedViews;
