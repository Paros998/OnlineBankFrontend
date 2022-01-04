import React, { FC } from 'react';
import { Placeholder } from "react-bootstrap";

interface RecentPaymentsLoadingPlaceholderProps {
  isPending: boolean;
}

const RecentPaymentsLoadingPlaceholder: FC<RecentPaymentsLoadingPlaceholderProps> = ({ isPending }) => {
  if (isPending) {
    return (
      <>
        {
          Array(3).fill(0).map((value, index) => (
            <Placeholder as='p' animation='glow' className='mt-3' key={index}>
              <Placeholder xs={12}/>
            </Placeholder>
          ))
        }
      </>
    );
  }
  return null;
};

export default RecentPaymentsLoadingPlaceholder;
