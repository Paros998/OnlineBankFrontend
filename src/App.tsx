import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Client from "./client/Client";
import { initAxios } from "./utils/initAxios";
import CurrentUserProvider from "./contexts/CurrentClientContext";
import Employee from "./employee/Employee";
import RoleRouting from "./home/RoleRouting";

initAxios();
//TODO better routing
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <RoleRouting/>
        </Route>

        <Route path='/client'>
          <CurrentUserProvider>
            <Client/>
          </CurrentUserProvider>
        </Route>

        <Route path='/employee'>
          <CurrentUserProvider>
            <Employee/>
          </CurrentUserProvider>
        </Route>

        <Route path='*'>
          <Redirect to='/home'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
