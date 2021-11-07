import React from 'react';

import logo from "../../assets/images/logo.png";
import { Container} from "react-bootstrap";
import EntryLevelCard from "../../components/Cards/EntryLevelCard/EntryLevelCard";

const RoleHome = () => {
  return (
    <>
      <div className='bg-dark fixed-top vw-100 h-50 text-white'>
        <Container className='mt-4 min-vw-100 h-75 '>
          <div className='d-flex justify-content-center bg-primary pt-1 pb-1 rounded-pill'>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />

            <span className='text-white ms-3 fs-3'>
              Future Bank - Z nami wyruszysz w pewną przyszłość.
            </span>
          </div>
        </Container>
      </div>
      <div className='bg-primary fixed-bottom vw-100 h-50  '>
      </div>
      <EntryLevelCard/>
    </>
  );
};

export default RoleHome;