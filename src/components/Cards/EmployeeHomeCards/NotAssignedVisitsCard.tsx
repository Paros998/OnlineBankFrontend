import React, {FC} from 'react';
import {Spinner} from "react-bootstrap";
import CardTemplate from "../CardTemplate";
import {useFetchVisitsNotAssigned} from "../../../hooks/useFetchVisitsNotAssigned";
import NotAssignedVisits from "../../RecordsComponents/NotAssignedVisits";

interface NotAssignedVisitsCardProps {
  className?:string
}

const NotAssignedVisitsCard:FC<NotAssignedVisitsCardProps> = ({className}) => {
  const Visits = useFetchVisitsNotAssigned();

  return (
    <CardTemplate header={'Wizyty klientów do przypisania'}
                  className={`text-light bg-secondary border-dark bg-opacity-75 ${className}`}
                  headerClassName='text-dark'
                  bodyClassName='thumb-dark'
                  headerDiamondClassName='text-dark'
    >
      {
        Visits ? (
          Visits.map(({visit_id,visitTime,visitDate,isActive,
                        establishment,employee}) => (
            <NotAssignedVisits
              visit_id={visit_id}
              visitDate={visitDate}
              visitTime={visitTime}
              establishment={establishment}
              isActive={isActive}
              employee={employee}/>
          ))
        ) : (
          <Spinner animation={"border"} variant={"light"}/>
        )
      }
    </CardTemplate>
  );
};

export default NotAssignedVisitsCard;