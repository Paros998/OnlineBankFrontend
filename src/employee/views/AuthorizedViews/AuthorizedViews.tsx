import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Client from "../../../client/Client";
import RoleRouting from "../../../home/RoleRouting";
import NotFound404 from "../../../components/NotFound404/NotFound404";
import Employee from "../../Employee";
import HomePage from "./Home/HomePage";

const AuthorizedViews = () => {
  return (
    <Router>
      <Switch>
        <Route path='/employee/home' component={HomePage}/>

        <Route path='/employee/login' component={Employee}/>

        <Route path='/client' component={Client}/>

        <Route path='/home' component={RoleRouting}/>

        <Route path='/employee' component={HomePage}/>

        <Route path='/employee/*' component={NotFound404}/>
      </Switch>
    </Router>
  );
};

export default AuthorizedViews;