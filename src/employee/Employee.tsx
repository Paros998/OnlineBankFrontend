import React from 'react';
import UnauthorizedViews from "./views/UnauthorizedViews/UnauthorizedViews";
import {useCurrentUser} from "../contexts/CurrentClientContext";
import AuthorizedViews from "./views/AuthorizedViews/AuthorizedViews";


const Employee = () => {
  const { currentUser } = useCurrentUser();

  if (currentUser) {
    return <AuthorizedViews />;
  }
  return <UnauthorizedViews />;

};

export default Employee;