import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.scss'
import reportWebVitals from './reportWebVitals';
import {ToastContainer} from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='colored'
    >

    </ToastContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
