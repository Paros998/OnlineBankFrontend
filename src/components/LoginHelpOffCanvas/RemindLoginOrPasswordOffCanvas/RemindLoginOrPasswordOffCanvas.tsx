import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import axios from "axios";
import { Button, Offcanvas } from "react-bootstrap";
import TextWithDiamond from "../../TextWithDiamond/TextWithDiamond";
import TextInput from "../../Inputs/TextInput/TextInput";

interface RemindLoginOrPasswordOffCanvasProps {
  showRemindLoginCanvas: boolean;
  handleRemindLoginCanvas: (isShown: boolean) => void;
  header: string;
  requestUrl: string;
}

interface RemindLoginOrPasswordFormikValues {
  email: string;
}

const RemindLoginOrPasswordOffCanvas: FC<RemindLoginOrPasswordOffCanvasProps> = ({
                                                                                   showRemindLoginCanvas,
                                                                                   requestUrl,
                                                                                   header,
                                                                                   handleRemindLoginCanvas
                                                                                 }) => {
  const handleSubmit = async ({ email }: RemindLoginOrPasswordFormikValues) => {
    const auth = {
      username: 'shanodis',
      password: 'Uro1a*wci(tpJI;S"tWV0&Cw9'
    };

    try {
      await axios.get(`users/${email}/login`, {
        headers: {

        },
        auth
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Offcanvas
      show={showRemindLoginCanvas}
      onHide={() => handleRemindLoginCanvas(false)}
      backdropClassName='opacity-0'
    >
      <div className='d-flex justify-content-center'>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <TextWithDiamond>
              {header}
            </TextWithDiamond>
          </Offcanvas.Title>
        </Offcanvas.Header>
      </div>

      <Offcanvas.Body>
        <Formik<RemindLoginOrPasswordFormikValues>
          initialValues={{ email: '' }}
          onSubmit={handleSubmit}
        >
          <Form className='h-100 d-flex text-center flex-column justify-content-between'>
            <section className='text-start'>
              <hr className='text-primary w-100 mt-0 '/>

              <TextInput
                name='email'
                label='Podaj adres e-mail'
              />
            </section>

            <section>
              <Button
                className='w-50'
                type='submit'
              >
                Wyslij
              </Button>

              <hr className='text-primary w-100'/>

              <Button
                className='w-50'
                onClick={() => handleRemindLoginCanvas(false)}
              >
                Wstecz
              </Button>
            </section>
          </Form>
        </Formik>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default RemindLoginOrPasswordOffCanvas;