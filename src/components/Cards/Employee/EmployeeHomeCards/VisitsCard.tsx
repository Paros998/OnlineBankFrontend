import React, {FC, ReactNode} from 'react';
import CardTemplate from "../../CardTemplate";
import MyVisits from "../../../RecordsComponents/Employee/MyVisits";
import {VisitModel} from "../../../../interfaces/DatabaseModels/VisitModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";

interface VisitsCardProps{
  children?:ReactNode;
  className?: string;
  Visits: VisitModel[] | [];
  isPending?: boolean;
}

const VisitsCard: FC<VisitsCardProps> = ({children,className,Visits,isPending}) => {
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
            Visits.length === 0 ? <p className='text-info fw-bold'>Nie masz żadnych zaplanowanych spotkań.</p>
            : Visits.map((value,key) => (
              <MyVisits
                visit={value}
                key={key}
              />
            ))

        }
        <CenteredSpinnerTemplate variant={"info"} isPending={isPending}/>
      </div>
    </CardTemplate>
  );
};

export default VisitsCard;