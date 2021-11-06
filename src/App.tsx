import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Client from "./client/Client";
import { initAxios } from "./utils/initAxios";
import Employee from "./employee/Employee";

initAxios();

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/client'
          component={Client}
        />
        <Route
          path='/employee'
          component={Employee}
        />

        <Route path='*'>
          <Redirect to='/client' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
