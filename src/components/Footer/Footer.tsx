import React from 'react';
import { Container } from "react-bootstrap";

type FooterProps = {
  positionClass?: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className={`bg-secondary ${props.positionClass}`}>
      <Container className='w-100 text-white'>
        ©2021 Future Bank sp. z o.o.
      </Container>
    </footer>
  );
};

export default Footer;