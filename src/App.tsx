import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Client from "./client/Client";
import { initAxios } from "./utils/initAxios";
import CurrentUserProvider from "./contexts/CurrentClientContext";
import Employee from "./employee/Employee";

initAxios();

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/client/home'>
          <CurrentUserProvider>
            <Client/>
          </CurrentUserProvider>
        </Route>

        <Route path='*'>
          <Redirect to='/client/home'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
