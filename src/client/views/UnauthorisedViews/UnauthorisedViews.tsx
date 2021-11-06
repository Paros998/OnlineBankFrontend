import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import NewVisit from "./NewVisit/NewVisit";
import Home from "../AuthorisedViews/Home/Home";


const UnauthorisedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
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

        <Route path='*'>
          <Redirect to='/client/home' />
        </Route>
      </Switch>
    </Router>
  );
};

export default UnauthorisedViews;