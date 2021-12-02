import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";

const EmployeeAuthorisedViews = () => {
  return (
    <>

      <Router>
        <Switch>
          <Route path='/employee/home' component={HomePage}/>
        </Switch>
      </Router>
    </>
  );
};

export default EmployeeAuthorisedViews;
