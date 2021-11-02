import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import NotFound404 from "../../../components/NotFound404/NotFound404";
import HomePage from "./HomePage/HomePage";
import NewVisit from "./NewVisit/NewVisit";


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
          path='*'
          component={NotFound404}
        />
      </Switch>
    </Router>
  );
};

export default UnauthorisedViews;