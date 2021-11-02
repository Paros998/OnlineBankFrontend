import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Client from "./client/Client";
import { initAxios } from "./utils/initAxios";
import NotFound404 from "./components/NotFound404/NotFound404";

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
          path='*'
          component={NotFound404}
        />
      </Switch>
    </Router>
  );
}

export default App;
