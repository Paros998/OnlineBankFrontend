import React, {FC, ReactNode} from 'react';
import {Container} from "react-bootstrap";

interface ContainerWithBackgroundImageProps {
  src: string;
  children:ReactNode;
}

const ContainerWithBackgroundImage: FC<ContainerWithBackgroundImageProps> = ({src,children}) => {
  return (
    <div className='vh-100' style={{
      backgroundImage:`url(${src})`,
      backgroundAttachment:"fixed",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"
    }}>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default ContainerWithBackgroundImage;