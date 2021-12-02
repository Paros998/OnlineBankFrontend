import React, {FC, ReactNode} from 'react';
import CardTemplate from "../CardTemplate";

interface OrdersProps {
  className?:string;
  children?:ReactNode;
}

const PriorityOrdersNotAssigned: FC<OrdersProps> = ({children,className}) => {
  return (
    <CardTemplate header='Priorytetowe zlecenia bez przydziału'
                  className={`text-primary bg-light border-primary bg-opacity-75 ${className}`}
                  headerClassName='text-primary'
                  bodyClassName='thumb-primary'
                  headerDiamondClassName='text-primary'
    >
      {children}
    </CardTemplate>
  );
};

export default PriorityOrdersNotAssigned;