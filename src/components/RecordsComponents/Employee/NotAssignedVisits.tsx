import React, {FC} from 'react';
import {VisitModel} from "../../../interfaces/DatabaseModels/VisitModel";

interface NotAssignedVisitsProps{
  visit:VisitModel;

}

const NotAssignedVisits:FC<NotAssignedVisitsProps> = ({visit,children}) => {
  const {visit_id,visitTime,visitDate,isActive,establishment,employee} = visit;
  return (
    <div className={`row rounded-pill p-2 ms-0 bg-primary text-light w-100 align-items-start visitNotAssigned`}>
      <div className='col-1 ms-2 text-truncate text-start'>
        ID: {visit_id}
      </div>
      <div className='col ms-2 text-truncate text-start'>
        Data Wizyty: {visitDate}
      </div>
      <div className='col ms-2 text-truncate text-start'>
        Czas Wizyty: {visitTime}
      </div>
      <div className='col ms-2 text-truncate text-start'>
        Miejsce Spotkania: {establishment}
      </div>
      <div className='col ms-2 text-truncate text-center'>
        Status: {isActive ? "Aktywna" : "Zakończona"}
      </div>
      <div className='col ms-2 me-2 text-truncate text-center'>
        Pracownik: {employee ? employee.fullName : "Żaden"}
      </div>
    </div>
  );
};

export default NotAssignedVisits;