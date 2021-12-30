import React, { FC, HTMLAttributes } from 'react';
import { Card } from "react-bootstrap";
import { LocationHeaders } from "../../enums/LocationHeaders";

interface ClientMainLayoutProps extends HTMLAttributes<never> {
  location: LocationHeaders;
  cardClassName?: string;
}

const ClientCardLayout: FC<ClientMainLayoutProps> = ({ children, location, cardClassName, ...props }) => {
  return (
    <>
      <h1>{location}</h1>

      <Card {...props} className={`rounded-card-10 border-secondary ${cardClassName}`}>
        <Card.Body className='p-4'>
          {children}
        </Card.Body>
      </Card>
    </>
  );
};

export default ClientCardLayout;
