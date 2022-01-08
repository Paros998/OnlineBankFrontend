import React, {FC, useState} from 'react';
import {Formik} from "formik";
import {FilterClientsEmployeesFormikValues} from "../../../../interfaces/formik/FilterClientsEmployeesFormikValues";
import {FilterClientsEmployeesFormikInitialValues} from "../../../../constants/FormikInitialValues/FilterClientsEmployeesFormikInitialValues";
import FilterClientsEmployeesForm from "../../../Forms/FilterClientsEmployeesForm/FilterClientsEmployeesForm";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import CardTemplate from "../../CardTemplate";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import EmployeesRecords from "../../../RecordsComponents/Employee/EmployeesRecords";
import moment from "moment";

interface EmployeesCardProps{
  className?:string;
}

const EmployeesCard:FC<EmployeesCardProps> = ({className}) => {
  const [values] = useState<FilterClientsEmployeesFormikValues>({
    birthDate: "",
    personalNumber_personName: ""
  });

  const {rawData:Employees,isPending,fetchData:fetchEmployees} = useFetchRawData<EmployeeModel[]>(`/employees/filtered`,values);

  const handleSubmit = async (values:FilterClientsEmployeesFormikValues)=> {
    values.birthDate = moment(values.birthDate).isValid() ? moment(values.birthDate).format("YYYY-MM-DD") : "";
    await fetchEmployees(values);
  }

  return (
    <CardTemplate header={'Filtrowanie'}
                  className={`text-dark' fst-normal bg-primary-dark border-dark bg-opacity-75 ${className}`}
                  headerClassName='text-dark'
                  bodyClassName='thumb-dark'
                  headerDiamondClassName='text-dark'
                  headerLabel={
                    <div className='container-fluid w-100 '>
                      <div className='row align-items-start ms-1'>
                        <div className='col text-truncate'>
                          Pesel
                        </div>
                        <div className='col text-truncate'>
                          Imię i Nazwisko
                        </div>
                        <div className='col text-truncate text-center'>
                          Id. Pracownika
                        </div>
                        <div className='col text-truncate text-end me-4'>
                          Data Urodzenia
                        </div>
                      </div>
                    </div>}
                  headerBody={
                    <Formik<FilterClientsEmployeesFormikValues>
                      initialValues={FilterClientsEmployeesFormikInitialValues}
                      onSubmit={handleSubmit}
                    >
                      <FilterClientsEmployeesForm/>
                    </Formik>
                  }
    >
      <div className='container-fluid w-100 '>
        <CenteredSpinnerTemplate variant={"dark"} isPending={isPending}/>
        <EmployeesRecords Employees={Employees || []} isPending={isPending}/>
      </div>
    </CardTemplate>
  );
};

export default EmployeesCard;