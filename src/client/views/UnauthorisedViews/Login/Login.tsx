import React, {FC, useState} from 'react';
import { Formik, FormikValues } from 'formik';
import { Image } from "react-bootstrap";
import UnauthorisedNavbar from "../../../../components/UnauthorisedNavbar/UnauthorisedNavbar";
import bgLogin1 from '../../../../assets/images/bg-happy.jpeg';
import bgLogin2 from '../../../../assets/images/bg-login1.jpg';
import LoginForm from "../../../../components/LoginForm/LoginForm";
import { LoginFormikValues } from "../../../../interfaces/LoginFormikValues";
import Footer from "../../../../components/Footer/Footer";
import LoginHelpOffCanvas from "../../../../components/LoginHelpOffCanvas/LoginHelpOffCanvas";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";

const formikValues: LoginFormikValues = {
  username: '',
  password: '',
};

const Login = () => {
  const [ showHelpCanvas, setShowHelpCanvas ] = useState(false);

  const history = useHistory();

  const handleHelpCanvas = (isShown: boolean) => setShowHelpCanvas(isShown);

  const handleSubmit = async (values: LoginFormikValues) => {

    const loginParams = new URLSearchParams();
    loginParams.append('username',`${values.username}`);
    loginParams.append('password',`${values.password}`);

    try {
      const response = await axios.post(`/login`,loginParams,{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      if(response.status === 200){
        toast.success("👍 Success");
        history.push("/client/home");
      }
    } catch (e:any) {
      toast.error(`👎 ${e.response.data.message}`);
    }
  }

  return (
    <>
      <UnauthorisedNavbar/>
      <div className='position-relative vh-100'>
        <Image
          src={bgLogin1}
          className='start-50 w-50 min-vh-100 position-absolute top-left-0'
        />

        <Image
          src={bgLogin2}
          className='w-50 h-100 position-absolute top-left-0'
        />

        <Formik<LoginFormikValues>
          initialValues={formikValues}
          onSubmit={handleSubmit}
        >
          <LoginForm
            className='d-flex h-75 justify-content-center align-items-center'
            handleHelpCanvas={handleHelpCanvas}
          />
        </Formik>
      </div>

      <Footer />

      <LoginHelpOffCanvas
        showHelpCanvas={showHelpCanvas}
        handleHelpCanvas={handleHelpCanvas}
      />
    </>
  );
};

export default Login;