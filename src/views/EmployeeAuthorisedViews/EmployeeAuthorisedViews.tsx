import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./Home/HomePage";
import ClientsPage from "./Clients/ClientsPage";

const EmployeeAuthorisedViews = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/employee/home' component={HomePage}/>
          <Route path='/employee/clients' component={ClientsPage}/>
        </Switch>
      </Router>
    </>
  );
};

export default EmployeeAuthorisedViews;
