import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ClientModel } from "../interfaces/ClientModel";
import { Roles } from "../enums/Roles";
import { TokenData } from "../interfaces/TokenData";
import jwtDecode from "jwt-decode";
import { User } from "../interfaces/User";

export const useFetchCurrentClient = () => {
  const [ currentUser, setCurrentUser ] = useState<ClientModel>();

  // TODO add is pending
  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem('JWT_USER_TOKEN');
    if (!token) {
      return;
    }

    const tokenData: User = jwtDecode(token);

    try {
      const { data } = await axios.get<ClientModel>(`/clients/${tokenData?.userId}`);
      setCurrentUser(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchUser().catch();
  }, []);

  return { currentUser, fetchUser };
};