import React, {FC} from 'react';
import {Spinner} from "react-bootstrap";
import CardTemplate from "../CardTemplate";
import {Formik} from "formik";
import {LatestClientsFormikValues} from "../../../interfaces/FormValues/LatestClientsFormikValues";
import {toast} from "react-toastify";
import LatestClientsForm from "../../Forms/LatestClientsForm/LatestClientsForm";
import {useFetchLatestClients} from "../../../hooks/useFetchLatestClients";
import LatestClientRecord from "../../RecordsComponents/Employee/LatestClientRecord";

interface LastCreatedClientsProps {
  className?:string;
}

const formikValues:LatestClientsFormikValues = {
  days: 0
}

const LastCreatedClients:FC<LastCreatedClientsProps> = ({className}) => {

  const {fetchLatestClients, clients} = useFetchLatestClients();

  const handleSubmit = async (values:LatestClientsFormikValues) => {
    try {
      await fetchLatestClients(values);
    }catch (e:any){
      toast.error(e.response.data.message)
    }
  }

  return (
    <CardTemplate header={'Ostatnio utworzone konta'}
                  className={`text-dark fst-normal bg-danger border-light bg-opacity-75 ${className}`}
                  headerClassName='text-dark'
                  bodyClassName='thumb-dark pe-1 ps-1'
                  headerDiamondClassName='text-dark'
                  headerBody={
                    <Formik<LatestClientsFormikValues>
                      initialValues={formikValues}
                      onSubmit={handleSubmit}
                    >
                      <LatestClientsForm/>
                    </Formik>
                  }

    >
      <div className='container-fluid w-100 p-0'>
      {
        clients ? (
          clients.length === 0 ? <p className='text-info fw-bold'>W ostatnich dniach nie utworzono nowych klientów.</p>
            : clients.map((value,key) => (
              <LatestClientRecord
                className='bg-dark text-light m-1 rounded-pill fs-6'
                client={value}
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

export default LastCreatedClients;