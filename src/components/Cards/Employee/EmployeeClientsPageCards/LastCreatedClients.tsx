import React, {FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {Formik} from "formik";
import {toast} from "react-toastify";
import LatestClientsForm from "../../../Forms/LatestClientsForm/LatestClientsForm";
import LatestClientRecord from "../../../RecordsComponents/Employee/LatestClientRecord";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import {ClientModel} from "../../../../interfaces/DatabaseModels/ClientModel";
import {LatestClientsFormikValues} from "../../../../interfaces/formik/LatestClientsFormikValues";

interface LastCreatedClientsProps {
  className?: string;
  Clients: ClientModel[] | [];
  isPending?: boolean;
  fetchLatestClients: (values: LatestClientsFormikValues)=>Promise<void>;
}

const formikValues: LatestClientsFormikValues = {
  days: 1
}

const LastCreatedClients: FC<LastCreatedClientsProps> = ({className, Clients, isPending,fetchLatestClients}) => {

  const handleSubmit = async (values: LatestClientsFormikValues) => {
    try {
      await fetchLatestClients(values);
    } catch (e: any) {
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
          isPending || (
          Clients.length === 0 ? <p className='text-info fw-bold'>W ostatnich dniach nie utworzono nowych klientów.</p>
            : Clients.map((value, key) => (
              <LatestClientRecord
                key={key}
                className='bg-dark text-light m-1 rounded-pill fs-6'
                client={value}
              />
            )))
        }
        <CenteredSpinnerTemplate variant={"dark"} isPending={isPending}/>
      </div>
    </CardTemplate>
  );
};

export default LastCreatedClients;