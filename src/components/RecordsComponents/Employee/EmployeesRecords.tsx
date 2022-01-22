import React, {FC} from 'react';
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import EmployeeRecord from "./EmployeeRecord";

interface EmployeesRecordsProps {
  Employees: EmployeeModel[] | [];
  isPending?:boolean;
  handleClick?:(clientId:number|undefined)=>void;
  id?:number;
  className?:string;
  useKeyAsBg?:boolean;
}

const EmployeesRecords: FC<EmployeesRecordsProps> = ({Employees,isPending,id,handleClick,className,useKeyAsBg}) => {
  if(isPending)
    return null;
  if (Employees.length === 0)
    return (
      <p className='text-light fw-bold '>Nie znaleziono pracowników!.</p>
    );
  else return (
    <>
      {
        Employees.map((employee, key) => {
          return <EmployeeRecord employee={employee} key={key}
                                 className={`${useKeyAsBg && ( key % 2 === 0 ? 'bg-dark' : 'bg-secondary-dark' )} ${employee.employeeId === id && 'client-active' } ${className} `}
                                 id={id}
                                 handleClick={handleClick}/>
        })
      }
    </>
  );
};

export default EmployeesRecords;