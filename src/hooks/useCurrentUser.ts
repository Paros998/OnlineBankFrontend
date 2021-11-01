import {useCallback, useState} from "react";
import axios from "axios";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();
  // TODO create fetch current user
  const fetchUser = useCallback(async () => {
    try {
      const { data } = await axios.get(``)
    } catch (e) {
      console.error(e);
    }
  }, []);
};