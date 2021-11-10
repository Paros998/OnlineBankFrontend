import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { User } from "../interfaces/User";
import {EmployeeModel} from "../interfaces/EmployeeModel";

export const useFetchCurrentEmployee = () => {
  const [ currentEmployee, setCurrentEmployee ] = useState<EmployeeModel>();
  const [isPending, setIsPending] = useState(false);

  const fetchEmployee = useCallback(async () => {
    const token = localStorage.getItem('JWT_USER_TOKEN');
    if (!token) return;

    const tokenData: User = jwtDecode(token);

    try {
      setIsPending(true);
      const { data } = await axios.get<EmployeeModel>(`/employees/${tokenData?.userId}`);
      setCurrentEmployee(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployee().catch();
  }, []);

  return { currentEmployee, setCurrentEmployee, isPending, setIsPending, fetchEmployee };
};