import React, {useState} from 'react';
import UnauthorisedNavbar from "../../../../components/UnauthorisedNavbar/UnauthorisedNavbar";
import Footer from "../../../../components/Footer/Footer";
import LoginHelpOffCanvas from "../../../../components/LoginHelpOffCanvas/LoginHelpOffCanvas";
import {useHistory} from "react-router-dom";

import {LoginFormikValues} from "../../../../interfaces/LoginFormikValues";
import LoginForm from "../../../../components/LoginForm/LoginForm";
import {Formik} from "formik";
import {useCurrentUser} from "../../../../contexts/CurrentClientContext";
import {appendUrlSearchParams} from "../../../../utils/appendUrlSearchParams";
import axios from "axios";
import {User} from "../../../../interfaces/User";
import jwtDecode from "jwt-decode";
import {Roles} from "../../../../enums/Roles";
import {toast} from "react-toastify";

const formikValues: LoginFormikValues = {
  username: '',
  password: '',
};

const Login = () => {
  const [ showHelpCanvas, setShowHelpCanvas ] = useState(false);

  const history = useHistory();
  const { fetchUser } = useCurrentUser();

  const handleHelpCanvas = (isShown: boolean) => setShowHelpCanvas(isShown);

  const handleSubmit = async (values: LoginFormikValues) => {
    const loginParams = appendUrlSearchParams(values);
    try {
      const response = await axios.post(`/login`, loginParams);

      if (response.status === 200) {
        const token = response.headers["authorization"];
        const user: User = jwtDecode(token);

        const userId = user.userId;
        const role = user.authorities[0].authority;

        if (role === Roles.RoleAdmin || role === Roles.RoleEmployee) {
          toast.success("👍 Success");
          axios.defaults.headers.common['Authorization'] = token;
          localStorage.setItem("JWT_USER_TOKEN", token);
          await fetchUser({ userId, role });
          history.push('/');
          window.location.reload();
        } else {
          toast.info(`👀 Redirecting to the right login site!`);
          history.push('/client/login');
        }
      }
    } catch (e: any) {
      toast.error(`👎 Nie udało się zalogować \n${e?.response?.data?.message}`);
    }
  }

  return (
    <>
      <UnauthorisedNavbar
        type='employee'
      />
      <div className='vh-100 bg-employee-login'>
        <Formik<LoginFormikValues>
          initialValues={formikValues}
          onSubmit={handleSubmit}
        >
          <LoginForm
            className='d-flex h-75 justify-content-center align-items-center'
            handleHelpCanvas={handleHelpCanvas}
            type='employee'
          />
        </Formik>
      </div>

      <Footer />

      <LoginHelpOffCanvas
        showHelpCanvas={showHelpCanvas}
        handleHelpCanvas={handleHelpCanvas}
        type='employee'
      />
    </>
  );
};

export default Login;