import React, {FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {Formik} from "formik";
import FilterClientsEmployeesForm from "../../../Forms/FilterClientsEmployeesForm/FilterClientsEmployeesForm";
import dayjs from "dayjs";
import {toast} from "react-toastify";
import ClientRecord from "../../../RecordsComponents/Employee/ClientRecord";
import {FilterClientsEmployeesFormikInitialValues} from "../../../../constants/FormikInitialValues/FilterClientsEmployeesFormikInitialValues";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {ClientModel} from "../../../../interfaces/DatabaseModels/ClientModel";
import {FilterClientsEmployeesFormikValues} from "../../../../interfaces/formik/FilterClientsEmployeesFormikValues";
import {useHistory} from "react-router-dom";
import ClientsRecords from "../../../RecordsComponents/Employee/ClientsRecords";

interface ClientsCardProps {
  className?: string;
  Clients: ClientModel[] | [];
  isPending?: boolean;
  fetchClients: (values: FilterClientsEmployeesFormikValues)=>Promise<void>;
}

const initDateWithDayJs = (date: Date | string) => dayjs(date).format('YYYY-MM-DD');

const ClientsCard: FC<ClientsCardProps> = ({className, Clients, isPending,fetchClients}) => {
  const history = useHistory();

  const handleSubmit = async (values: FilterClientsEmployeesFormikValues) => {
    values.birthDate = values.birthDate && initDateWithDayJs(values.birthDate);
    try {
      await fetchClients(values);
    } catch (e: any) {
      toast.error(`👎 Nie udało się pobrać klientów \n${e?.response?.data?.message}`);
    }
  }

  const handleClick = (clientId:number|undefined) => {
    if(clientId){
      history.push(`/employee/client/${clientId}`);
    }
  }

  return (
    <CardTemplate header={'Filtrowanie'}
                  className={`text-light fst-normal bg-dark border-light bg-opacity-75 ${className}`}
                  headerClassName='text-light'
                  bodyClassName='thumb-light'
                  headerDiamondClassName='text-light'
                  headerLabel={
                    <div className='container-fluid w-100 '>
                      <div className='row align-items-start ms-1'>
                        <div className='col text-truncate'>
                          Pesel
                        </div>
                        <div className='col text-truncate'>
                          Imię i Nazwisko
                        </div>
                        <div className='col text-truncate'>
                          Numer Konta
                        </div>
                        <div className='col text-truncate'>
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
        <ClientsRecords Clients={Clients || []} handleClick={handleClick} useKeyAsBg/>
        <CenteredSpinnerTemplate variant={"light"} isPending={isPending}/>
      </div>
    </CardTemplate>
  );
};

export default ClientsCard;