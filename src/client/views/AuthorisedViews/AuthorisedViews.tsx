import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NotFound404 from "../../../components/NotFound404/NotFound404";
import LoggedHomePage from "./Home/LoggedHomePage";

const AuthorisedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='/client/logged/home'
          component={LoggedHomePage}
        />
        <Route
          path='*'
          component={NotFound404}
        />
      </Switch>
    </Router>
  );
};

export default AuthorisedViews;