import React from 'react';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./Login/Login";
import NotFound404 from "../../../components/NotFound404/NotFound404";
import RoleRouting from "../../../home/RoleRouting";
import Client from "../../../client/Client";

const UnauthorizedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='/employee/login'
          component={Login}
        />

        <Route path='/client' component={Client}/>

        <Route path='/home' component={RoleRouting}/>

        <Route path='/employee' component={Login}/>

        <Route path='/employee/*' component={NotFound404}/>
      </Switch>
    </Router>
  );
};

export default UnauthorizedViews;