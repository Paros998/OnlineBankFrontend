import React, {useState} from 'react';
import UnauthorisedNavbar from "../../../../components/UnauthorisedNavbar/UnauthorisedNavbar";
import Footer from "../../../../components/Footer/Footer";
import LoginHelpOffCanvas from "../../../../components/LoginHelpOffCanvas/LoginHelpOffCanvas";
import {useHistory} from "react-router-dom";

const Login = () => {
  const [ showHelpCanvas, setShowHelpCanvas ] = useState(false);
  const history = useHistory();

  const handleHelpCanvas = (isShown: boolean) => setShowHelpCanvas(isShown);

  return (
    <>
      <UnauthorisedNavbar/>
      <div className='vh-100'>

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