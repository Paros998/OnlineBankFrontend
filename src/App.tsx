import React from 'react';
import { initAxios } from "./utils/initAxios";
import CurrentUserProvider from "./contexts/CurrentUserContext";
import Views from "./views/Views";
import { ToastContainer } from "react-toastify";
import { ToasterProps } from "./constants/ToasterProps";

initAxios();

function App() {
  return (
    <>
      <CurrentUserProvider>
        <Views/>
      </CurrentUserProvider>

      <ToastContainer {...ToasterProps}/>
    </>
  );
}

export default App;
