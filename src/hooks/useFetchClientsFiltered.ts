import {useCallback, useEffect, useState} from "react";
import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";
import axios from "axios";
import {toast} from "react-toastify";
import {FilterClientsEmployeesFormikInitialValues} from "../constants/FormikInitialValues/FilterClientsEmployeesFormikInitialValues";
import {appendUrlSearchParams} from "../utils/appendUrlSearchParams";
import {FilterClientsEmployeesFormikValues} from "../interfaces/formik/FilterClientsEmployeesFormikValues";

export function useFetchClientsFiltered() {
  const [clients,setClients] = useState<ClientModel[]>();
  const [isPending,setIsPending] = useState(false);

  const fetchClients = useCallback(
    async (values?:FilterClientsEmployeesFormikValues)=>{
      setIsPending(true);
      let body;

      body = values ? {
        birthDate: values.birthDate ? values.birthDate : "",
        personalNumber_personName: values.personalNumber_personName
      } : {
        birthDate: "",
        personalNumber_personName: FilterClientsEmployeesFormikInitialValues.personalNumber_personName
      };

      try{
        const {data} = await axios.get<ClientModel[]>("/clients/filtered",{
          params: appendUrlSearchParams(body)
        });
        setClients(data);
      }catch (e:any){
        toast.error(e.message)
      }
      setIsPending(false);
    }
    ,[]
  );

  useEffect(()=> {
    fetchClients().catch();
  },[setClients,fetchClients])

  return {clients,fetchClients,isPending};
}