import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

import {VisitModel} from "../interfaces/DatabaseModels/VisitModel";
import {User} from "../interfaces/User";
import jwtDecode from "jwt-decode";
import {Roles} from "../enums/Roles";

export function useFetchVisitsNotAssigned() {
  const [data,setData] = useState<VisitModel[]>();

  useEffect(()=> {

    const fetchVisitsNotAssigned = async ()=>{
      const token = localStorage.getItem('JWT_USER_TOKEN');
      if (!token) return;

      const tokenData: User = jwtDecode(token);
      const role = tokenData?.authorities[0].authority;

      if (role !== (Roles.RoleAdmin || Roles.RoleEmployee))
        return;

      try{
        const {data} = await axios.get<VisitModel[]>("/dictionary/visits/unassigned");
        setData(data);
      }catch (e:any){
        toast.error(e.message)
      }
    };

    fetchVisitsNotAssigned().catch();
  },[setData])

  return data;

}