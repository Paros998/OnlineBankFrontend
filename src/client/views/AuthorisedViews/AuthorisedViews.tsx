import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";

const AuthorisedViews = () => {
  return (
    <Router>
      <Switch>
        <Route path='/sandbox' component={Home} />
      </Switch>
    </Router>
  );
};

export default AuthorisedViews;