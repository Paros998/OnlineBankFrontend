import React from 'react';
import {Button, Navbar, NavLink} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

const EmployeeSideNavbar = () => {
  dayjs.extend(isLeapYear);
  require('dayjs/locale/pl');
  dayjs.locale('pl');

  const currentDate = dayjs().format('DD/MM/YYYY');
  const dayOfWeek = dayjs().format('dddd').toLocaleUpperCase();

  const{pathname} = useLocation();
  return (
    <Navbar className=' bg-dark text-light position-fixed vh-100 w-200px ps-1  border-end flex-column p-0 justify-content-between overflow-scroll z-1000'>

      <div className='flex-column p-0 pt-1 mt-3 '>
        <NavLink as={Link} to='/employee/home' className='p-1' >
          <Button
            className='rounded-card-10 btn-light btn-light-hover w-160px h-50px'
            disabled={pathname === '/employee/home'}
          >
            Panel Główny
          </Button>
        </NavLink>

        <NavLink as={Link} to='/employee/clients' className='p-1'>
          <Button
            className='rounded-card-10 btn-light btn-light-hover w-160px h-50px'
            disabled={pathname === '/employee/clients'}
          >
            Klienci
          </Button>
        </NavLink>

        <NavLink as={Link} to='/employee/new-client' className='p-1'>
          <Button
            className='rounded-card-10 btn-light btn-light-hover w-160px h-50px'
            disabled={pathname === '/employee/new-client'}
          >
            Nowy klient
          </Button>
        </NavLink>

        <NavLink as={Link} to='/employee/orders' className='p-1'>
          <Button
            className='rounded-card-10 btn-light btn-light-hover w-160px h-50px'
            disabled={pathname === '/employee/orders'}
          >
            Zlecenia
          </Button>
        </NavLink>
        <hr className='text-light w-90 mx-auto'/>
      </div>

      <div className='mb-5 w-100'>
        <div className='flex-column text-center'>
          <NavLink className='text-light ' as={Link} to='/#procedures'>
            Regulamin
          </NavLink>
          <NavLink className='text-light ' as={Link} to='/#faq'>
            FAQ
          </NavLink>
        </div>

        <div className='w-100 text-center pb-2 d-flex flex-column'>
          <hr className='text-light w-90 mx-auto mb-1'/>
          <span >{dayOfWeek}</span>
          <span >{currentDate}</span>
        </div>

      </div>

    </Navbar>
  );
};

export default EmployeeSideNavbar;