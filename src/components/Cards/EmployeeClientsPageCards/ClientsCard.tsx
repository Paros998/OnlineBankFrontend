import React, {FC} from 'react';
import CardTemplate from "../CardTemplate";
import {Formik} from "formik";
import {FilterClientsEmployeesFormikValues} from "../../../interfaces/formik/FilterClientsEmployeesFormikValues";
import FilterClientsEmployeesForm from "../../Forms/FilterClientsEmployeesForm/FilterClientsEmployeesForm";
import dayjs from "dayjs";
import {useFetchClientsFiltered} from "../../../hooks/useFetchClientsFiltered";
import {toast} from "react-toastify";
import {Spinner} from "react-bootstrap";
import ClientRecord from "../../RecordsComponents/Employee/ClientRecord";
import {FilterClientsEmployeesFormikInitialValues} from "../../../constants/FormikInitialValues/FilterClientsEmployeesFormikInitialValues";

interface ClientsCardProps {
  className?: string;
}

const initDateWithDayJs = (date: Date | string) => dayjs(date).format('YYYY-MM-DD');

const ClientsCard: FC<ClientsCardProps> = ({className}) => {

  const {fetchClients, clients} = useFetchClientsFiltered();

  const handleSubmit = async (values: FilterClientsEmployeesFormikValues) => {
    values.birthDate = values.birthDate && initDateWithDayJs(values.birthDate);
    try {
      await fetchClients(values);
    } catch (e: any) {
      toast.error(`👎 Nie udało się pobrać klientów \n${e?.response?.data?.message}`);
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
        {
          clients ? (
            clients.length === 0 ? <p className='text-info fw-bold'>Nie znaleziono klientów</p>
              : clients.map((client,key) => (
                <ClientRecord
                  client={client}
                  className={key % 2 === 0 ? 'bg-dark' : 'bg-secondary-dark'}
                />
              ))

          ) : (
            <Spinner animation={"border"} variant={"light"}/>
          )
        }
      </div>
    </CardTemplate>
  );
};

export default ClientsCard;
