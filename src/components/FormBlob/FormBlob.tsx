import React, { FC, HTMLAttributes } from 'react';
import { Image } from "react-bootstrap";
import blob from '../../assets/images/form-blob.svg';

const FormBlob: FC<HTMLAttributes<never>> = (props) => {
  return (
    <Image
      {...props}
      src={blob}
      className='form-blob'
    />
  );
};

export default FormBlob;
