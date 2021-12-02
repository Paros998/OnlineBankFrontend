import React, {FC, ReactNode} from 'react';
import CardTemplate from "../CardTemplate";

interface VisitsCardProps{
  children?:ReactNode;
  className?: string;
}

const VisitsCard: FC<VisitsCardProps> = ({children,className}) => {
  return (
    <CardTemplate header={'Moje spotkania z klientami'}
                  className={`text-light fst-normal bg-dark border-light bg-opacity-75 ${className}`}
                  headerClassName='text-info'
                  bodyClassName='thumb-info'
                  headerDiamondClassName='text-info'
    >
      {children}
    </CardTemplate>
  );
};

export default VisitsCard;