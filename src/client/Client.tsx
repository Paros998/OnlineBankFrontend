import React from 'react';
import UnauthorisedViews from "./views/UnauthorisedViews/UnauthorisedViews";
import { useCurrentUser } from "../contexts/CurrentClientContext";
import AuthorisedViews from "./views/AuthorisedViews/AuthorisedViews";

const Client = () => {
  const { currentUser } = useCurrentUser();

  if (currentUser) {
    return <AuthorisedViews />;
  }
  return <UnauthorisedViews />;
};

export default Client;