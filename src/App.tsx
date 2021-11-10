import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Client from "./roles/client/Client";
import { initAxios } from "./utils/initAxios";
import CurrentUserProvider from "./contexts/CurrentClientContext";
import Employee from "./roles/employee/Employee";
import RoleRouting from "./home/RoleRouting";
import CurrentEmployeeProvider from "./contexts/CurrentEmployeeContext";

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
          <CurrentEmployeeProvider>
            <Employee/>
          </CurrentEmployeeProvider>
        </Route>

        <Route path='*'>
          <Redirect to='/home'/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
