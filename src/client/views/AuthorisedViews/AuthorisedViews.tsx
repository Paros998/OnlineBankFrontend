import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoggedHomePage from "./Home/LoggedHomePage";
import AuthorisedNavbar from "../../../components/AuthorisedNavbar/AuthorisedNavbar";

const AuthorisedViews = () => {
  return (
    <>
      <AuthorisedNavbar/>
      <Router>
        <Switch>
          <Route
            path='/client/home'
            component={LoggedHomePage}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AuthorisedViews;