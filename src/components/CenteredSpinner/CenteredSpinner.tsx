import React, { FC } from 'react';
import { Spinner } from "react-bootstrap";

interface CenteredSpinnerProps {
  isPending?: unknown;
}

const CenteredSpinner: FC<CenteredSpinnerProps> = ({ isPending }) => {
  if (isPending) {
    return (
      <div className='d-flex justify-content-center align-items-center h-100'>
        <Spinner variant='primary' animation='border'/>
      </div>
    );
  }

  return null;

};

export default CenteredSpinner;
