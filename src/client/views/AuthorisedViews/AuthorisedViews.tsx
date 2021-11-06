import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import LoggedHomePage from "./Home/LoggedHomePage";

const AuthorisedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='/client/home'
          component={LoggedHomePage}
        />
      </Switch>
    </Router>
  );
};

export default AuthorisedViews;