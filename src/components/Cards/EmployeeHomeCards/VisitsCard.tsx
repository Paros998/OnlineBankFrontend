import React, {FC, ReactNode} from 'react';
import CardTemplate from "../CardTemplate";
import {useFetchEmployeeVisits} from "../../../hooks/useFetchEmployeeVisits";
import {Spinner} from "react-bootstrap";
import MyVisits from "../../RecordsComponents/MyVisits";

interface VisitsCardProps{
  children?:ReactNode;
  className?: string;
}

const VisitsCard: FC<VisitsCardProps> = ({children,className}) => {
  const Visits = useFetchEmployeeVisits();
  return (
    <CardTemplate header={'Moje spotkania z klientami'}
                  className={`text-light fst-normal bg-dark border-info bg-opacity-75 ${className}`}
                  headerClassName='text-info'
                  bodyClassName='thumb-info'
                  headerDiamondClassName='text-info'
    >
      {children}
      {
        Visits ? (
          Visits.map(({visit_id,visitTime,visitDate,isActive,
                        establishment,employee}) => (
            <MyVisits
              visit_id={visit_id}
              visitDate={visitDate}
              visitTime={visitTime}
              establishment={establishment}
              isActive={isActive}
              employee={employee}
            />
          ))
        ) : (
          <Spinner animation={"border"} variant={"info"}/>
        )

      }
    </CardTemplate>
  );
};

export default VisitsCard;