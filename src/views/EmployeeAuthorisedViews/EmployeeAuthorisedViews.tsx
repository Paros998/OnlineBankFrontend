import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Home/HomePage";
import ClientsPage from "./Clients/ClientsPage";
import NewClientPage from "./NewClient/NewClientPage";
import OrdersPage from "./Orders/OrdersPage";
import UsersPage from "./AdminPages/Users/UsersPage";
import ClientDetailsPage from "./Clients/ClientDetailsPage";

const EmployeeAuthorisedViews = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/employee/home' component={HomePage}/>
          <Route path='/employee/clients' component={ClientsPage}/>
          <Route path='/employee/client/:clientId' component={ClientDetailsPage} />
          <Route path='/employee/new-client' component={NewClientPage}/>
          <Route path='/employee/orders' component={OrdersPage}/>
          <Route path='/employee/admin/users' component={UsersPage}/>
          <Route path='*' component={HomePage}/>
        </Switch>
      </Router>
    </>
  );
};

export default EmployeeAuthorisedViews;
