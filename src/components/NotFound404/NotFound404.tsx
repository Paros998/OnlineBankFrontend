import React from 'react';
import { EmojiFrown } from "react-bootstrap-icons";

const NotFound404 = () => {
  return (
    <main className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <EmojiFrown
        className='text-primary'
        style={{ fontSize: '68px' }}
      />
      <h1>Not Found <span className='text-primary'>404</span></h1>
    </main>
  );
};

export default NotFound404;