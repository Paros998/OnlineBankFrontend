import React, { useState } from 'react';
import { Formik, FormikValues } from 'formik';
import { Image } from "react-bootstrap";
import UnauthorisedNavbar from "../../../../components/UnauthorisedNavbar/UnauthorisedNavbar";
import bgLogin1 from '../../../../assets/images/bg-login1.jpg';
import bgLogin2 from '../../../../assets/images/bg-login2.jpg';
import LoginForm from "../../../../components/LoginForm/LoginForm";
import { LoginFormikValues } from "../../../../interfaces/LoginFormikValues";
import Footer from "../../../../components/Footer/Footer";
import LoginHelpOffCanvas from "../../../../components/LoginHelpOffCanvas/LoginHelpOffCanvas";

const formikValues: LoginFormikValues = {
  login: '',
  password: '',
};

const handleSubmit = (values: FormikValues) => {
  console.log(values);
}

const Login = () => {
  const [ showHelpCanvas, setShowHelpCanvas ] = useState(false);
  const handleHelpCanvas = (isShown: boolean) => setShowHelpCanvas(isShown);
  return (
    <>
      <UnauthorisedNavbar/>

      <div className='position-relative vh-100'>
        <Image
          src={bgLogin1}
          className='start-50 w-50 vh-100 position-absolute'
        />

        <Image
          src={bgLogin2}
          className='w-50 vh-100 position-absolute'
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

      <Footer/>

      <LoginHelpOffCanvas
        showHelpCanvas={showHelpCanvas}
        handleHelpCanvas={handleHelpCanvas}
      />
    </>
  );
};

export default Login;