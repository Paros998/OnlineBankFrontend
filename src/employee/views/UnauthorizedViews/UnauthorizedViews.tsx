import React from 'react';
import {Redirect, Route,BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./Login/Login";

const UnauthorizedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
          path='/employee/login'
          component={Login}
        />

        <Route path='*'>
          <Redirect to='/employee/login' />
        </Route>
      </Switch>
    </Router>
  );
};

export default UnauthorizedViews;