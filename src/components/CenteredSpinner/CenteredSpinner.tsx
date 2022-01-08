import React, { FC } from 'react';
import { Spinner } from "react-bootstrap";

interface CenteredSpinnerProps {
  isPending?: unknown;
  className?: string;
}

const CenteredSpinner: FC<CenteredSpinnerProps> = ({ isPending, className }) => {
  if (isPending) {
    return (
      <div className={`d-flex justify-content-center align-items-center h-100 ${className}`}>
        <Spinner variant='primary' animation='border'/>
      </div>
    );
  }

  return null;

};

export default CenteredSpinner;
