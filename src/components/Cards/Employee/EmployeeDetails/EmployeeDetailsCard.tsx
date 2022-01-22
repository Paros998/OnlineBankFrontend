import React, {FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {AppUserModel} from "../../../../interfaces/DatabaseModels/AppUserModel";

interface EmployeeDetailsCardProps{
  className?:string;
  employeeId:number | undefined;
}

const EmployeeDetailsCard:FC<EmployeeDetailsCardProps> = ({className,employeeId}) => {

  const {rawData:Employee,isPending:isPendingEmployee,fetchData:fetchEmployee} = useFetchRawData<EmployeeModel>(`/employees/${employeeId}`);
  const {rawData:EmployeeUser,isPending:isPendingUser,fetchData:fetchEmployeeUser} = useFetchRawData<AppUserModel>(`/users/employee/${employeeId}`);

  return (
    <CardTemplate header={'Dane Pracownika'}
                  className={`text-light' fst-normal bg-dark border-light bg-opacity-75 ${className}`}
                  headerClassName='text-light'
                  bodyClassName='thumb-light'
                  headerDiamondClassName='text-light'
    >
      <div className='container-fluid w-100 '>
        <CenteredSpinnerTemplate variant='light' isPending={isPendingEmployee || isPendingUser}/>

        //TODO showEmployee

      </div>
    </CardTemplate>
  );
};

export default EmployeeDetailsCard;