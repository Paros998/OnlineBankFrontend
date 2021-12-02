import React, { FC } from 'react';
import { DiamondFill } from "react-bootstrap-icons";

interface HeaderWithDiamondProps {
  headerFontSize?:string;
  diamondClassName?:string;
}

const TextWithDiamond: FC<HeaderWithDiamondProps> = ({ children,headerFontSize,diamondClassName }) => {
  return (
    <div className='d-flex justify-content-center align-items-baseline'>
      <DiamondFill
        className={`text-primary ${diamondClassName}`}
        style={{ fontSize: '10px' }}
      />
      <span className={`ms-1 ${headerFontSize}`}>{children}</span>
    </div>
  );
};

export default TextWithDiamond;