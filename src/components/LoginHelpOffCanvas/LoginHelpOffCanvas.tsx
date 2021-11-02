import React, { FC, useState } from 'react';
import { Button, Offcanvas } from "react-bootstrap";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";
import RemindLoginOrPasswordOffCanvas from "./RemindLoginOrPasswordOffCanvas/RemindLoginOrPasswordOffCanvas";

interface LoginHelpOffCanvasProps {
  showHelpCanvas: boolean;
  handleHelpCanvas: (isShown: boolean) => void;
}

const LoginHelpOffCanvas: FC<LoginHelpOffCanvasProps> = ({ handleHelpCanvas, showHelpCanvas }) => {
  const [ showRemindLoginCanvas, setShowRemindLoginCanvas ] = useState(false);
  const [ showRemindPasswordCanvas, setShowRemindPasswordCanvas ] = useState(false);

  const handleRemindLoginCanvas = (isShown: boolean) => setShowRemindLoginCanvas(isShown);
  const handleRemindPasswordCanvas = (isShown: boolean) => setShowRemindPasswordCanvas(isShown);

  return (
    <Offcanvas
      show={showHelpCanvas}
      onHide={() => handleHelpCanvas(false)}
    >
      <div className='d-flex justify-content-center'>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <TextWithDiamond>
              Pomoc
            </TextWithDiamond>
          </Offcanvas.Title>
        </Offcanvas.Header>
      </div>

      <Offcanvas.Body className='d-flex text-center flex-column justify-content-between'>
        <section>
          <hr className='text-primary w-100 mt-0 '/>

          <h5>Nie pamiętam hasła</h5>
          <Button
            className='w-50'
            onClick={() => handleRemindPasswordCanvas(true)}
          >
            Przypomnij hasło
          </Button>

          <h5 className='mt-5'>Nie pamiętam loginu</h5>
          <Button
            className='w-50'
            onClick={() => handleRemindLoginCanvas(true)}
          >
            Przypomnij login
          </Button>
        </section>

        <section>
          <hr className='text-primary w-100'/>
          <Button
            className='w-50'
            onClick={() => handleHelpCanvas(false)}
          >
            Wstecz
          </Button>
        </section>
      </Offcanvas.Body>

      <RemindLoginOrPasswordOffCanvas
        showRemindLoginCanvas={showRemindLoginCanvas}
        handleRemindLoginCanvas={handleRemindLoginCanvas}
        requestUrl='dupa'
        header='Przypomnij login'
      />

      <RemindLoginOrPasswordOffCanvas
        showRemindLoginCanvas={showRemindPasswordCanvas}
        handleRemindLoginCanvas={handleRemindPasswordCanvas}
        requestUrl='dupa'
        header='Przypomnij hasło'
      />
    </Offcanvas>
  );
};

export default LoginHelpOffCanvas;