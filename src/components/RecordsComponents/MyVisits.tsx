import React, {useState} from 'react';
import {VisitModel} from "../../interfaces/VisitModel";
import dayjs from "dayjs";

interface MyVisitsProps {
  className?: string;
}

const MyVisits = (visit: VisitModel, props: MyVisitsProps) => {
  let today = false;
  const todayDate = dayjs().format('DD.MM.YYYY');
  const date = visit.visitDate;

  date === todayDate && (today = true);
  return (
    <>
      <div
        className={`d-flex m-1 mb-3 p-1 w-100 fw-bold fs-5 justify-content-between align-items-center
         ${props.className} ${today ? 'text-primary' : 'text-light'} ${!visit.isActive && 'd-none'}`}>
        <span className='ms-1'>
          {visit.visitDate}
        </span>
        <span className='ms-1'>
          {visit.visitTime}
        </span>
        <span className='ms-1'>
          {visit.establishment}
        </span>
      </div>
      <hr className='mt-1 text-light w-100'/>
    </>


  );
};

export default MyVisits;