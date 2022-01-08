import React, { FC, HTMLAttributes } from 'react';
import { Card } from "react-bootstrap";
import { LocationHeaders } from "../../enums/LocationHeaders";

interface ClientMainLayoutProps extends HTMLAttributes<never> {
  location: LocationHeaders;
  cardClassName?: string;
  cardBodyClassName?: string;
}

const ClientCardLayout: FC<ClientMainLayoutProps> = ({
  children,
  location,
  cardClassName,
  cardBodyClassName,
  ...props
}) => {
  return (
    <>
      <h1>{location}</h1>

      <Card {...props} className={`rounded-card-10 border-secondary ${cardClassName}`}>
        <Card.Body className={`p-4 ${cardBodyClassName}`}>
          {children}
        </Card.Body>
      </Card>
    </>
  );
};

export default ClientCardLayout;
