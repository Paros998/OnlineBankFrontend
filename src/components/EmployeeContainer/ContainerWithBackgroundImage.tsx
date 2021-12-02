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
      <Container className='w-80 me-1 ml-250 ' fluid={true}>
        {children}
      </Container>
    </div>
  );
};

export default ContainerWithBackgroundImage;