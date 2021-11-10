import React, {createContext, FC, ReactNode, useContext} from 'react';
import {CurrentEmployeeContextModel} from "../interfaces/CurrentEmployeeContextModel";
import {useFetchCurrentEmployee} from "../hooks/useFetchCurrentEmployee";

const CurrentEmployeeContext = createContext<CurrentEmployeeContextModel | undefined>(undefined);

export const useCurrentEmployee = () => useContext(CurrentEmployeeContext)!;

interface CurrentEmployeeProviderProps {
  children: ReactNode;
}

const CurrentEmployeeProvider: FC<CurrentEmployeeProviderProps> = ({children}) => {
  const data = useFetchCurrentEmployee();
  const handleLogout = () => {
    localStorage.removeItem('JWT_USER_TOKEN');
    data.setCurrentEmployee(undefined);
  };

  return (
    <CurrentEmployeeContext.Provider value={{ ...data, handleLogout }}>
      {children}
    </CurrentEmployeeContext.Provider>
  );
};

export default CurrentEmployeeProvider;