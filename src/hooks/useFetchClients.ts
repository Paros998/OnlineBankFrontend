import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {ClientModel} from "../interfaces/DatabaseModels/ClientModel";

export function useFetchClients(){
  const [data,setData] = useState<ClientModel[]>();

  useEffect(()=> {

    const fetchClients = async ()=>{

      try{
        const {data} = await axios.get<ClientModel[]>("/dictionary/clients");
        setData(data);
      }catch (e:any){
        toast.error(e.message)
      }
    };

    fetchClients().catch();
  },[setData])

  return data;

}