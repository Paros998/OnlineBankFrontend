import React, {FC} from 'react';
import {VisitModel} from "../../../interfaces/DatabaseModels/VisitModel";
import dayjs from "dayjs";

interface MyVisitsProps {
  className?: string;
  visit:VisitModel;
}

const MyVisits:FC<MyVisitsProps> = ({visit,className,children}) => {
  let today = false;
  const todayDate = dayjs().format('DD.MM.YYYY');
  const date = visit.visitDate;

  date === todayDate && (today = true);
  return (
    <>
      <div
        className={`row bg-dark rounded-card-10 d-flex m-1 mb-3 p-1 w-100 fw-bold fs-5  align-items-start
         ${className} ${today ? 'text-primary' : 'text-light'} ${!visit.isActive && 'd-none'}`}>
        <div className='col ms-1 text-truncate text-center'>
          {dayjs(visit.visitDate).format('YYYY-MM-DD')}
        </div>
        <div className='col ms-1 text-truncate text-center'>
          {visit.visitTime}
        </div>
        <div className='col ms-1 text-truncate text-center'>
          {visit.establishment}
        </div>
      </div>

    </>


  );
};

export default MyVisits;