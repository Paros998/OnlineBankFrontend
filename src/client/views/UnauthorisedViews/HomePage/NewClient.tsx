import React from 'react';
import {Button} from "react-bootstrap";
import TextWithDiamond from "../../../../components/TextWithDiamond/TextWithDiamond";
import {BsArrowRight} from "react-icons/all";

const NewClient = () => {
  return (
    <div className='justify-content-between mt-5 d-flex align-items-center mb-5'>
      <div className='rounded-card-10 bg-light border border-primary text-dark w-auto h-50 p-2 '>
        <div className='align-middle '>
          <TextWithDiamond>
            <span className='fs-5 '>
              Nie jesteś klientem naszego banku?
            </span>
          </TextWithDiamond>
        </div>
        <div className='mt-2 text-center fw-light'>
          To żaden kłopot. Umów się już dziś na spotkanie w jednej z naszych placówek.
        </div>
      </div>

      <BsArrowRight size='80'  className='text-primary w-75'/>

      <Button variant='primary' size={"lg"} href='/client/new-visit' className='rounded-pill mh-50px w-250px btn-primary-hover' >
        Wizyta Czeka
      </Button>
    </div>
  );
};

export default NewClient;