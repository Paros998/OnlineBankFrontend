import React, { FC } from 'react';
import { Card } from "react-bootstrap";
import { LocationHeaders } from "../../enums/LocationHeaders";

interface ClientMainLayoutProps {
  location: LocationHeaders;
}

const ClientMainLayout: FC<ClientMainLayoutProps> = ({ children, location }) => {
  return (
    <>
      <h1>{location}</h1>

      <Card className='rounded-card-10 border-secondary'>
        <Card.Body className='pe-4 ps-4 pt-4 pb-0'>
          {children}
        </Card.Body>
      </Card>
    </>
  );
};

export default ClientMainLayout;
