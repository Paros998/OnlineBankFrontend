import { Context, createContext, ReactNode, useContext } from "react";
import { CurrentUserContextModel } from "../interfaces/CurrentUserContextModel";
import { useFetchCurrentUser } from "../hooks/useFetchCurrentUser";

const CurrentUserContext = createContext<any>(undefined);

export function useCurrentUser<T>() {
  return useContext(CurrentUserContext as Context<CurrentUserContextModel<T>>);
}

interface CurrentUserProviderProps {
  children: ReactNode;
}

function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const data = useFetchCurrentUser();

  const handleLogout = () => {
    localStorage.removeItem('JWT_USER_TOKEN');
    data.setCurrentUser(undefined);
  };

  return (
    <CurrentUserContext.Provider value={{ ...data, handleLogout }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;
