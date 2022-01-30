import React, {FC} from 'react';
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import dayjs from "dayjs";

interface EmployeeRecordProps{
  employee:EmployeeModel;
  className?:string;
  handleClick?:(clientId:number|undefined)=>void;
  id?:number;
}

const EmployeeRecord:FC<EmployeeRecordProps> = ({employee,className,id,handleClick}) => {
  const {personalNumber,dateOfBirth,fullName,employeeId} = employee;
  return (
    <div
      className={`btn-pointer employee-primary row align-items-start text-light p-2 rounded-pill my-1 ${className}`}
      onClick={()=>{
        if (handleClick) {
          handleClick(employeeId)
        }}}
    >
      <span className='col text-truncate'>
        {personalNumber}
      </span>
      <span className='col text-truncate'>
        {fullName}
      </span>
      <span className='col text-truncate text-center'>
        {employeeId}
      </span>
      <span className='col text-truncate text-end'>
        {dayjs(dateOfBirth).format("DD.MM.YYYY")}
      </span>
    </div>
  );
};

export default EmployeeRecord;