import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnLogout from "../../components/OnLogout/OnLogout";
import AuthorisedNavbar from "../../components/AuthorisedNavbar/AuthorisedNavbar";
import SideNavbar from "../../components/SideNavbar/SideNavbar";


const ClientAuthorisedViews = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/client/home'>
            <AuthorisedNavbar/>
            <SideNavbar/>
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
