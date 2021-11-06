import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import NotFound404 from "../../../components/NotFound404/NotFound404";
import HomePage from "./HomePage/HomePage";
import NewVisit from "./NewVisit/NewVisit";
import Home from "../AuthorisedViews/Home/Home";


const UnauthorisedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/client/home'
          component={HomePage}
        />

        <Route
          path='/client/login'
          component={Login}
        />

        <Route
          path='/client/new-visit'
          component={NewVisit}
        />

        <Route
          path='/client/sandbox'
          component={Home}
        />

        <Route path='/client/*' component={NotFound404}/>
      </Switch>
    </Router>
  );
};

export default UnauthorisedViews;