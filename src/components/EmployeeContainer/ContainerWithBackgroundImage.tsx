import React, {FC, ReactNode} from 'react';
import {Container} from "react-bootstrap";

interface ContainerWithBackgroundImageProps {
  src?: string;
  className?: string;
  children?:ReactNode;
}

const ContainerWithBackgroundImage: FC<ContainerWithBackgroundImageProps> = ({src,className,children}) => {
  return (
    <div className={`my-container ${className} `} style={{
      backgroundImage:`url(${src})`,
      backgroundAttachment:"fixed",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      backgroundPosition: "center",
    }}>
      <Container className='h-100 pt-3 pe-4 pl-240 pb-5' fluid={true}>
        {children}
      </Container>
    </div>
  );
};

export default ContainerWithBackgroundImage;