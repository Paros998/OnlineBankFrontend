import React from 'react';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import RoleHome from "./views/RoleHome";
import Employee from "../employee/Employee";
import Client from "../client/Client";
const RoleRouting = () => {

  return (
    <Router>
      <Switch>
        <Route
          path='/home'
          component={RoleHome}
        />

        <Route path='/client' component={Client}/>

        <Route path='/employee' component={Employee}/>

        <Route path='*' component={RoleHome}/>
      </Switch>
    </Router>
  );
};

export default RoleRouting;