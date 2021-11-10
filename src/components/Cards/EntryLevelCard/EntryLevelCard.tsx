import React, {FC} from 'react';
import CardTemplate from "../CardTemplate";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const EntryLevelCard = () => {
  return (
    <CardTemplate header='Wybierz Serwis'
                  className='text-white position-absolute top-50 start-50 translate-middle z-2000 rounded-card-10 bg-secondary-dark' >
      <div className='mx-auto pb-3'>
        <Link to={'/client'} >
          <Button variant='primary' size='lg' className='w-250px mb-2'>
            Aplikacja Klienta
          </Button>
        </Link>
        <Link to={'/employee'}>
          <Button variant='dark' size='lg' className='w-250px'>
            Aplikacja Pracownika
          </Button>
        </Link>
      </div>
    </CardTemplate>
  );
};

export default EntryLevelCard;