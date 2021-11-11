import React, { useState } from 'react';
import { Formik } from 'formik';
import { Image } from "react-bootstrap";
import UnauthorisedNavbar from "../../../components/UnauthorisedNavbar/UnauthorisedNavbar";
import bgLogin2 from '../../../assets/images/bg-client-login2.jpg';
import bgLogin1 from '../../../assets/images/bg-client-login1.jpeg';
import LoginForm from "../../../components/LoginForm/LoginForm";
import { LoginFormikValues } from "../../../interfaces/LoginFormikValues";
import Footer from "../../../components/Footer/Footer";
import LoginHelpOffCanvas from "../../../components/LoginHelpOffCanvas/LoginHelpOffCanvas";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { User } from "../../../interfaces/User";
import { appendUrlSearchParams } from "../../../utils/appendUrlSearchParams";
import { Roles } from "../../../enums/Roles";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { CurrentUserContextModel } from "../../../interfaces/CurrentUserContextModel";

const formikValues: LoginFormikValues = {
  username: '',
  password: '',
};

const Login = () => {
  const [ showHelpCanvas, setShowHelpCanvas ] = useState(false);
  const history = useHistory();
  const currentUser = useCurrentUser<CurrentUserContextModel<unknown>>();

  const handleHelpCanvas = (isShown: boolean) => setShowHelpCanvas(isShown);

  const handleSubmit = async (values: LoginFormikValues) => {
    const loginParams = appendUrlSearchParams(values);
    try {
      const response = await axios.post(`/login`, loginParams);

      if (response.status === 200) {
        const token = response.headers["authorization"];
        const user: User = jwtDecode(token);
        const role = user.authorities[0].authority;

        toast.success("👍 Success");
        axios.defaults.headers.common['Authorization'] = token;
        localStorage.setItem("JWT_USER_TOKEN", token);

        if (role === Roles.RoleClient) {
          history.push('/client/home');
        } else {
          history.push('/employee/home');
        }
        await currentUser?.fetchUser();
      }
    } catch (e: any) {
      toast.error(`👎 Nie udało się zalogować \n${e?.response?.data?.message}`);
    }
  }

  return (
    <>
      <UnauthorisedNavbar
        type='client'
      />
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
            type='client'
          />
        </Formik>
      </div>

      <Footer/>

      <LoginHelpOffCanvas
        showHelpCanvas={showHelpCanvas}
        handleHelpCanvas={handleHelpCanvas}
        type='client'
      />
    </>
  );
};

export default Login;
