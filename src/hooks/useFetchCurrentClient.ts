import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ClientModel } from "../interfaces/ClientModel";
import jwtDecode from "jwt-decode";
import { User } from "../interfaces/User";

export const useFetchCurrentClient = () => {
  const [ currentUser, setCurrentUser ] = useState<ClientModel>();
  const [isPending, setIsPending] = useState(false);

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem('JWT_USER_TOKEN');
    if (!token) return;

    const tokenData: User = jwtDecode(token);

    try {
      setIsPending(true);
      const { data } = await axios.get<ClientModel>(`/clients/${tokenData?.userId}`);
      setCurrentUser(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  }, []);

  useEffect(() => {
    fetchUser().catch();
  }, []);

  return { currentUser, setCurrentUser, isPending, setIsPending, fetchUser };
};