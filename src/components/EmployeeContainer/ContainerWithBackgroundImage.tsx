import React, {FC, ReactNode} from 'react';
import {Container} from "react-bootstrap";

interface ContainerWithBackgroundImageProps {
  src: string;
  children:ReactNode;
}

const ContainerWithBackgroundImage: FC<ContainerWithBackgroundImageProps> = ({src,children}) => {
  return (
    <div className='min-vh-100 pt-5 ' style={{
      backgroundImage:`url(${src})`,
      backgroundAttachment:"fixed",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"
    }}>
      <Container className='vh-100 w-100 me-1 ml-250 '>
        {children}
      </Container>
    </div>
  );
};

export default ContainerWithBackgroundImage;