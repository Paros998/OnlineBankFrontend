import React from 'react';
import UnauthorisedViews from "./views/UnauthorisedViews/UnauthorisedViews";

const Client = () => {
  // TODO if statement to check if user is authorised or not
  return (
    <UnauthorisedViews />
  );
};

export default Client;