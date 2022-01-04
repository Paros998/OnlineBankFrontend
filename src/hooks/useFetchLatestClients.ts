import {useCallback, useEffect, useState} from "react";
import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";
import axios from "axios";
import {toast} from "react-toastify";
import {LatestClientsFormikValues} from "../interfaces/formik/LatestClientsFormikValues";

export function useFetchLatestClients() {
  const [clients,setClients] = useState<ClientModel[]>();
  const [isPending,setIsPending] = useState(false);

  const fetchLatestClients = useCallback(
    async (values?:LatestClientsFormikValues)=>{
      setIsPending(true);
      try{
        const days = (values && values.days >= 1) ? values.days : 1;
        const {data} = await axios.get<ClientModel[]>(`/clients/latest/${days}`,);
        setClients(data);
      }catch (e:any){
        toast.error(e.message)
      }
      setIsPending(false);
    }
    ,[]
  );

  useEffect(()=> {
    fetchLatestClients().catch();
  },[setClients,fetchLatestClients])

  return {clients,fetchLatestClients,isPending};
}