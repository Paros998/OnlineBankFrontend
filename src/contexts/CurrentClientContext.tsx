import { createContext, FC, ReactNode, useContext } from "react";
import { CurrentClientContextModel } from "../interfaces/CurrentClientContextModel";
import { useFetchCurrentClient } from "../hooks/useFetchCurrentClient";

const CurrentClientContext = createContext<CurrentClientContextModel | undefined>(undefined);

export const useCurrentUser = () => useContext(CurrentClientContext)!;

interface CurrentUserProviderProps {
  children: ReactNode;
}

const CurrentUserProvider: FC<CurrentUserProviderProps> = ({ children }) => {
  const data = useFetchCurrentClient();
  return (
    <CurrentClientContext.Provider value={{ ...data }}>
      {children}
    </CurrentClientContext.Provider>
  );
}

export default CurrentUserProvider;