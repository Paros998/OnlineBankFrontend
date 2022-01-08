import React, {FC} from 'react';
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import EmployeeRecord from "./EmployeeRecord";

interface EmployeesRecordsProps {
  Employees: EmployeeModel[] | [];
  isPending?:boolean;
}

const EmployeesRecords: FC<EmployeesRecordsProps> = ({Employees,isPending}) => {
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
          return <EmployeeRecord employee={employee} key={key} className={key % 2 === 0 ? 'bg-dark' : 'bg-secondary-dark'}/>
        })
      }
    </>
  );
};

export default EmployeesRecords;