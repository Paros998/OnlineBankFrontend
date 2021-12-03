import React from 'react';
import {Spinner} from "react-bootstrap";

const Pending = () => (
  <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
    <Spinner
      animation='border'
      variant='primary'
      style={{ width: '10rem', height: '10rem' }}
    />
  </div>
);

export default Pending;