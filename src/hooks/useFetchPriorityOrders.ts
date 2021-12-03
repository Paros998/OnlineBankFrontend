import {useEffect, useState} from "react";
import {OrderModel} from "../interfaces/DatabaseModels/OrderModel";
import {User} from "../interfaces/User";
import jwtDecode from "jwt-decode";
import {Roles} from "../enums/Roles";
import axios from "axios";
import {toast} from "react-toastify";

export function useFetchPriorityOrders(){
  const [data,setData] = useState<OrderModel[]>();

  useEffect(()=>{
    const fetchPriorityOrders = async ()=> {
      const token = localStorage.getItem('JWT_USER_TOKEN');
      if (!token) return;

      const tokenData: User = jwtDecode(token);
      const role = tokenData?.authorities[0].authority;

      if (role !== (Roles.RoleAdmin || Roles.RoleEmployee))
        return;

      const requestUrl = role === Roles.RoleAdmin ? "priority" : "for-employees/priority";

      try {
        const {data} = await axios.get<OrderModel[]>(`/dictionary/orders/${requestUrl}`);
        setData(data);
      } catch (e: any) {
        toast.error(e.message)
      }
    };
    fetchPriorityOrders().catch();
  },[setData])

  return data;
}