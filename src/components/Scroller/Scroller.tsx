import React, { CSSProperties, FC } from 'react';

const Scroller: FC<CSSProperties> = ({ children, ...props }) => {
  return (
    <div style={{ ...props, overflowY: "scroll" }}>
      {children}
    </div>
  );
};

export default Scroller;
