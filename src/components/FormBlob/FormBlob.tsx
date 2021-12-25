import React, { FC, HTMLAttributes } from 'react';
import { Image } from "react-bootstrap";
import blob from '../../assets/images/form-blob.svg';

const FormBlob: FC<HTMLAttributes<never>> = (props) => {
  return (
    <Image
      {...props}
      className='position-absolute'
      src={blob}
      width='100%'
      height='100%'
    />
  );
};

export default FormBlob;
