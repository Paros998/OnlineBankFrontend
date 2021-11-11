import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnLogout from "../../components/OnLogout/OnLogout";

const ClientAuthorisedViews = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/client/home'>
            chujów sto
          </Route>

          <Route path='*'>
            <OnLogout />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default ClientAuthorisedViews;
