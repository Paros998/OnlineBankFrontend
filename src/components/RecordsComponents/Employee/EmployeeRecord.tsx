import React, {FC} from 'react';
import {EmployeeModel} from "../../../interfaces/DatabaseModels/EmployeeModel";
import dayjs from "dayjs";
import {useHistory} from "react-router-dom";


interface EmployeeRecordProps{
  employee:EmployeeModel;
  className?:string;
}

const EmployeeRecord:FC<EmployeeRecordProps> = ({employee,className}) => {
  const {personalNumber,dateOfBirth,fullName,employeeId} = employee;
  const history = useHistory();
  return (
    <div
      className={`btn-pointer employee-primary row align-items-start text-light p-2 rounded-pill my-1 ${className}`}
      onClick={()=>{
        history.push(`/employee/admin/employees/${employeeId}`);
      }}
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