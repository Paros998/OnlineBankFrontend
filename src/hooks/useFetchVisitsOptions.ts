import {useEffect, useState} from "react";

import {NewVisitSelectData} from "../interfaces/DatabaseModels/NewVisitSelectData";

import axios from "axios";
import {toast} from "react-toastify";

export function useFetchVisitsOptions(){
  const [data,setData] = useState<NewVisitSelectData>()

  useEffect(()=> {

    const fetchVisitsData = async ()=>{
      try{
        const {data} = await axios.get<NewVisitSelectData>("/rest/visits");
        setData(data);
      }catch (e:any){
        toast.error(e.message)
      }
    };

    fetchVisitsData().catch();
  },[setData])

  return data;
}