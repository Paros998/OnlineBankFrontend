import React from 'react';
import { Placeholder } from "react-bootstrap";

const RecentPaymentsLoadingPlaceholder = () => {
  return (
    <>
      {
        Array(3).fill(0).map(() => (
          <Placeholder as='p' animation='glow' className='mt-3'>
            <Placeholder xs={12}/>
          </Placeholder>
        ))
      }
    </>
  );
};

export default RecentPaymentsLoadingPlaceholder;
