import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import NewVisit from "./NewVisit/NewVisit";
import NotFound404 from "../../components/NotFound404/NotFound404";

const UnauthorisedViews = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={HomePage}
        />

        <Route
          path='/login'
          component={Login}
        />

        <Route
          path='/new-visit'
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
