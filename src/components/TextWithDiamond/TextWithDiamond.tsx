import React, { FC } from 'react';
import { DiamondFill } from "react-bootstrap-icons";

interface HeaderWithDiamondProps {
  // Maybe something will appear hear
}

const TextWithDiamond: FC<HeaderWithDiamondProps> = ({ children }) => {
  return (
    <div className='d-flex justify-content-center align-items-baseline'>
      <DiamondFill
        className='text-primary'
        style={{ fontSize: '10px' }}
      />
      <span className='ms-1'>{children}</span>
    </div>
  );
};

export default TextWithDiamond;