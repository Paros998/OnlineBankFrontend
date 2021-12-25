import {useCallback, useEffect, useState} from "react";
import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";
import axios from "axios";
import {toast} from "react-toastify";
import {LatestClientsFormikValues} from "../interfaces/formik/LatestClientsFormikValues";

export function useFetchLatestClients() {
  const [clients,setClients] = useState<ClientModel[]>();

  const fetchLatestClients = useCallback(
    async (values?:LatestClientsFormikValues)=>{
      try{
        const days = (values && values.days >= 0) ? values.days : 0;
        const {data} = await axios.get<ClientModel[]>(`/clients/latest/${days}`,);
        setClients(data);
      }catch (e:any){
        toast.error(e.message)
      }
    }
    ,[]
  );

  useEffect(()=> {
    fetchLatestClients().catch();
  },[setClients,fetchLatestClients])

  return {clients,fetchLatestClients};
}
