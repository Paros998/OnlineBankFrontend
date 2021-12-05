import React, {FC, ReactNode} from 'react';
import CardTemplate from "../CardTemplate";
import {useFetchEmployeeVisits} from "../../../hooks/useFetchEmployeeVisits";
import {Spinner} from "react-bootstrap";
import MyVisits from "../../RecordsComponents/Employee/MyVisits";

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
      <div className='container-fluid w-100 '>
        {children}
        {
          Visits ? (
            Visits.length === 0 ? <p className='text-info fw-bold'>Nie masz żadnych zaplanowanych spotkań.</p>
            : Visits.map((value) => (
              <MyVisits
                visit={value}
              />
            ))
          ) : (
            <Spinner animation={"border"} variant={"info"}/>
          )

        }
      </div>
    </CardTemplate>
  );
};

export default VisitsCard;