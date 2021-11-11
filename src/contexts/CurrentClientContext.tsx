import { Context, createContext, FC, ReactNode, useContext } from "react";
import { CurrentUserContextModel } from "../interfaces/CurrentUserContextModel";
import { useFetchCurrentUser } from "../hooks/useFetchCurrentUser";
import { ClientModel } from "../interfaces/ClientModel";
import { EmployeeModel } from "../interfaces/EmployeeModel";

const CurrentClientContext = createContext<CurrentUserContextModel<ClientModel> | undefined>(undefined);
const CurrentUserContext = createContext<CurrentUserContextModel<EmployeeModel | ClientModel> | undefined>(undefined);

export function useCurrentUser<T>() {
  return useContext((CurrentUserContext as unknown) as Context<CurrentUserContextModel<T>>)!;
}
// (MyContext as unknown) as React.Context<MyContextData<Item>>

interface CurrentUserProviderProps {
  children: ReactNode;
}

function CurrentUserProvider<T>({ children }: CurrentUserProviderProps) {
  const data = useFetchCurrentUser<T>();
  const handleLogout = () => {
    localStorage.removeItem('JWT_USER_TOKEN');
    data.setCurrentUser(undefined);
  };

  return (
    <CurrentClientContext.Provider value={{ ...data, handleLogout }}>
      {children}
    </CurrentClientContext.Provider>
  );
}

export default CurrentUserProvider;