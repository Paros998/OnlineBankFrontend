import React from 'react';
import { Navbar, NavLink } from "react-bootstrap";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { Link } from "react-router-dom";
import CollapseOptions from "./CollapseOptions/CollapseOptions";

dayjs.extend(isLeapYear);
dayjs.locale('pl');

const ClientSideNavbar = () => {
  const currentDate = dayjs().format('DD/MM/YYYY');
  const dayOfWeek = dayjs().format('dddd').toLocaleUpperCase();

  return (
    <>
      <Navbar
        className='
        bg-primary-dark
        text-light
        position-fixed
        vh-100
        w-180px
        flex-column
        p-0
        justify-content-between
        float-start
        '
      >
        <CollapseOptions />

        <div className='mb-5 w-100'>
          <div className='flex-column text-center'>
            <NavLink className='text-light' as={Link} to='/#procedures'>
              Regulamin
            </NavLink>

            <NavLink className='text-light' as={Link} to='/#faq'>
              FAQ
            </NavLink>
          </div>

          <div className='w-100 text-center pb-2 d-flex flex-column'>
            <hr className='text-light w-90 mx-auto mb-1'/>
            <span>{dayOfWeek}</span>
            <span>{currentDate}</span>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default ClientSideNavbar;
