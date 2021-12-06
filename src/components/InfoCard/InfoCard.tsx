import React, { FC, HTMLAttributes } from 'react';
import { Card } from "react-bootstrap";

const InfoCard: FC<HTMLAttributes<unknown>> = ({ children, className, ...props }) => {
  return (
    <Card
      className={`
        rounded-card-10
        w-100 h-100
        text-center
        d-flex
        text-white
        fs-5
        p-4
        justify-content-center
        align-items-center
        ${className}
      `}
      {...props}
    >
      {children}
    </Card>
  );
};

export default InfoCard;
