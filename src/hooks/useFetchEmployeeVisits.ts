import {useEffect, useState} from "react";
import {VisitModel} from "../interfaces/VisitModel";
import {User} from "../interfaces/User";
import jwtDecode from "jwt-decode";
import {Roles} from "../enums/Roles";
import axios from "axios";
import {toast} from "react-toastify";
import {useFetchCurrentUser} from "./useFetchCurrentUser";
import {EmployeeModel} from "../interfaces/EmployeeModel";

export function useFetchEmployeeVisits(){
  const [data,setData] = useState<VisitModel[]>();
  const {currentUser} = useFetchCurrentUser<EmployeeModel>();

  useEffect(()=> {

    const fetchMyVisits = async ()=>{
      const token = localStorage.getItem('JWT_USER_TOKEN');
      if (!token) return;

      const tokenData: User = jwtDecode(token);
      const role = tokenData?.authorities[0].authority;

      if (role !== (Roles.RoleAdmin || Roles.RoleEmployee))
        return;
      if(!currentUser)
        return;
      try{
        const {data} = await axios.get<VisitModel[]>(`/visits/employee/${currentUser.employeeId}`);
        setData(data);
      }catch (e:any){
        toast.error(e.message)
      }
    };

    fetchMyVisits().catch();
  },[setData])

  return data;

}