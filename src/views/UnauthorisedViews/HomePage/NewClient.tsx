import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import TextWithDiamond from "../../../components/TextWithDiamond/TextWithDiamond";
import {BsArrowRight} from "react-icons/all";

const NewClient = () => {
  return (
    <div className='justify-content-between mt-5 d-flex align-items-center mb-5'>
      <div className='rounded-card-10 bg-light border border-primary text-dark w-auto h-50 p-2 '>
        <div className='align-middle '>
          <TextWithDiamond
          headerFontSize='fs-5'
          >
            <span className='fs-6' style={{ fontWeight: 500 }}>
              Nie jesteś klientem naszego banku?
            </span>
          </TextWithDiamond>
        </div>
        <div className='mt-2 text-center fw-light'>
          To żaden kłopot. Umów się już dziś na spotkanie w jednej z naszych placówek.
        </div>
      </div>

      <BsArrowRight size='80' className='text-primary w-75'/>

      <Link to='/new-visit' className='text-decoration-none font-color-light'>
        <Button variant='primary' size={"lg"} className='rounded-pill mh-50px w-250px btn-primary-hover'>
          Wizyta Czeka
        </Button>
      </Link>
    </div>
  );
};

export default NewClient;
