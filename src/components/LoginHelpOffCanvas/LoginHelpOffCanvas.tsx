import React, {FC, useState} from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";
import RemindLoginOrPasswordOffCanvas from "./RemindLoginOrPasswordOffCanvas/RemindLoginOrPasswordOffCanvas";

interface LoginHelpOffCanvasProps {
  showHelpCanvas: boolean;
  handleHelpCanvas: (isShown: boolean) => void;
  type: string;
}

const LoginHelpOffCanvas: FC<LoginHelpOffCanvasProps> = ({handleHelpCanvas, showHelpCanvas, type}) => {
  const [showRemindLoginCanvas, setShowRemindLoginCanvas] = useState(false);
  const [showRemindPasswordCanvas, setShowRemindPasswordCanvas] = useState(false);

  const handleRemindLoginCanvas = (isShown: boolean) => setShowRemindLoginCanvas(isShown);
  const handleRemindPasswordCanvas = (isShown: boolean) => setShowRemindPasswordCanvas(isShown);

  return (
    <Offcanvas
      show={showHelpCanvas}
      onHide={() => handleHelpCanvas(false)}
    >
        <div className={`d-flex justify-content-center ${type === 'employee' ? 'bg-dark text-white' : 'bg-light'} `}>
          <Offcanvas.Header>
            <Offcanvas.Title>
              <TextWithDiamond
              headerFontSize='fs-4'
              >
                Pomoc
              </TextWithDiamond>
            </Offcanvas.Title>
          </Offcanvas.Header>
        </div>

        <Offcanvas.Body className={`d-flex text-center flex-column justify-content-between 
        ${type === 'employee' ? 'bg-dark text-white' : 'bg-light'}`}>
          <section>
            <hr className='text-primary w-100 mt-0 '/>

            <h5>Nie pamiętam hasła</h5>
            <Button
              className='w-50 fw-bold rounded-pill'
              onClick={() => handleRemindPasswordCanvas(true)}
            >
              Resetuj hasło
            </Button>

            <h5 className='mt-5'>Nie pamiętam loginu</h5>
            <Button
              className='w-50 fw-bold rounded-pill'
              onClick={() => handleRemindLoginCanvas(true)}
            >
              Przypomnij login
            </Button>
          </section>

          <section>
            <hr className='text-primary w-100'/>
            <Button
              className='w-50 fw-bold rounded-pill'
              onClick={() => handleHelpCanvas(false)}
            >
              Wstecz
            </Button>
          </section>
        </Offcanvas.Body>

        <RemindLoginOrPasswordOffCanvas
          showRemindLoginCanvas={showRemindLoginCanvas}
          handleHelpCanvas={handleHelpCanvas}
          handleRemindLoginCanvas={handleRemindLoginCanvas}
          requestUrl='login'
          header='Przypomnij login'
          type={type}
        />

        <RemindLoginOrPasswordOffCanvas
          showRemindLoginCanvas={showRemindPasswordCanvas}
          handleHelpCanvas={handleHelpCanvas}
          handleRemindLoginCanvas={handleRemindPasswordCanvas}
          requestUrl='password'
          header='Resetuj hasło'
          type={type}
        />
    </Offcanvas>
);
};

export default LoginHelpOffCanvas;
