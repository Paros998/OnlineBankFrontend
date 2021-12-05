import {useCallback, useEffect, useState} from "react";
import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";
import axios from "axios";
import {toast} from "react-toastify";
import {FilterClientsEmployeesFormikValues} from "../interfaces/FormValues/FilterClientsEmployeesFormikValues";
import {FilterClientsEmployeesFormikInitialValues} from "../constants/FormikInitialValues/FilterClientsEmployeesFormikInitialValues";
import {appendUrlSearchParams} from "../utils/appendUrlSearchParams";

export function useFetchClientsFiltered() {
  const [clients,setClients] = useState<ClientModel[]>();

  const fetchClients = useCallback(
    async (values?:FilterClientsEmployeesFormikValues)=>{
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
    }
    ,[]
  );

  useEffect(()=> {
    fetchClients().catch();
  },[setClients])

  return {clients,fetchClients};
}