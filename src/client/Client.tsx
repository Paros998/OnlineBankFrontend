import React from 'react';
import UnauthorisedViews from "./views/UnauthorisedViews/UnauthorisedViews";
import { useCurrentUser } from "../contexts/CurrentClientContext";
import AuthorisedViews from "./views/AuthorisedViews/AuthorisedViews";
import Pending from "../components/Pending/Pending";

const Client = () => {
  const { currentUser, isPending } = useCurrentUser();

  if (isPending) {
    return <Pending />;
  }

  if (currentUser) {
    return <AuthorisedViews />;
  }

  return <UnauthorisedViews />;
};

export default Client;