import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import NotFound404 from "../../../components/NotFound404/NotFound404";

const UnauthorisedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='/client/login'
          component={Login}
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