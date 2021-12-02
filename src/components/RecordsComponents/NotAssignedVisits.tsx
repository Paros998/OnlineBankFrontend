import React, {FC} from 'react';
import {VisitModel} from "../../interfaces/VisitModel";

const NotAssignedVisits:FC<VisitModel> = ({visit_id,
                                            visitDate,
                                            visitTime,
                                            establishment,
                                            isActive,
                                            employee}) => {
  return (
    <div className={`d-flex rounded-pill m-1 mb-3 p-2 bg-primary-dark text-light w-100 justify-content-between align-items-center `}>
      <span className='ms-2'>
        ID: {visit_id}
      </span>
      <span className='ms-2'>
        Data Wizyty: {visitDate}
      </span>
      <span className='ms-2'>
        Czas Wizyty: {visitTime}
      </span>
      <span className='ms-2'>
        Miejsce Spotkania: {establishment}
      </span>
      <span className='ms-2'>
        Status: {isActive ? "Aktywna" : "Zakończona"}
      </span>
      <span className='ms-2 me-2'>
        Pracownik: {employee ? employee.fullName : "Żaden"}
      </span>
    </div>
  );
};

export default NotAssignedVisits;