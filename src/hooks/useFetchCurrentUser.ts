import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {User} from "../interfaces/User";
import {Roles} from "../enums/Roles";

export function useFetchCurrentUser<T>() {
  const [ currentUser, setCurrentUser ] = useState<T>();
  const [role, setRole] = useState('');
  const [isPending, setIsPending] = useState(false);

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem('JWT_USER_TOKEN');
    if (!token) return;

    const tokenData: User = jwtDecode(token);
    const role = tokenData?.authorities[0].authority;
    const endpoint = role === Roles.RoleClient
      ? `/clients/${tokenData?.userId}`
      : `/employees/${tokenData?.userId}`;

    try {
      setIsPending(true);
      const { data } = await axios.get<T>(endpoint);
      setCurrentUser(data);
      setRole(role);
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  }, []);

  useEffect(() => {
    fetchUser().catch();
  }, [fetchUser]);

  return { currentUser, setCurrentUser, isPending, setIsPending, fetchUser, role };
}
