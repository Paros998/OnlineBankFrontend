import {Form, Formik} from 'formik';
import React, {FC} from 'react';
import axios from "axios";
import {Button, Offcanvas} from "react-bootstrap";
import TextWithDiamond from "../../TextWithDiamond/TextWithDiamond";
import TextInput from "../../Inputs/TextInput/TextInput";
import SubmitButton from "../../SubmitButton/SubmitButton";
import {toast} from "react-toastify";
import {appendUrlSearchParams} from "../../../utils/appendUrlSearchParams";


interface RemindLoginOrPasswordOffCanvasProps {
  showRemindLoginCanvas: boolean;
  handleRemindLoginCanvas: (isShown: boolean) => void;
  handleHelpCanvas: (isShown: boolean) => void;
  header: string;
  requestUrl: string;
  type:string;
}

interface RemindLoginOrPasswordFormikValues {
  email: string;
}

const RemindLoginOrPasswordOffCanvas:
  FC<RemindLoginOrPasswordOffCanvasProps> = ({
                                               showRemindLoginCanvas,
                                               handleHelpCanvas,
                                               requestUrl,
                                               header,
                                               handleRemindLoginCanvas,
                                               type
                                             }) => {
  const handleSubmit = async ({email}: RemindLoginOrPasswordFormikValues) => {
    try {
      await axios.patch(`users/${requestUrl}`, undefined,{params:{
        email:email
        }} );
      handleRemindLoginCanvas(false)
      handleHelpCanvas(false)
    } catch (e:any) {
      toast.error(e?.response?.data?.message)
    }
  }

  return (
    <Offcanvas
      show={showRemindLoginCanvas}
      onHide={() => handleRemindLoginCanvas(false)}
      backdropClassName='opacity-0'
    >
      <div className={`d-flex justify-content-center ${type === 'employee' ? 'bg-dark text-white' : 'bg-light'} `}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <TextWithDiamond
            headerFontSize='fs-4'
            >
              {header}
            </TextWithDiamond>
          </Offcanvas.Title>
        </Offcanvas.Header>
      </div>

      <Offcanvas.Body className={`d-flex text-center flex-column justify-content-between 
        ${type === 'employee' ? 'bg-dark text-white' : 'bg-light'}`}>
        <Formik<RemindLoginOrPasswordFormikValues>
          initialValues={{email: ''}}
          onSubmit={handleSubmit}
        >
          <Form className='h-100 d-flex text-center flex-column justify-content-between'>
            <section className='text-start'>
              <hr className='text-primary w-100 mt-0 '/>

              <TextInput
                name='email'
                label='Podaj adres e-mail'
                labelClassName='fs-5'
                className={`fs-5 ${type === 'employee' ? 'bg-dark text-white border-light ' : 'bg-light border-dark'}`}
              />
            </section>

              <section>
                <SubmitButton className='w-50 fs-5'>
                  Wyslij
                </SubmitButton>

                <hr className='text-primary w-100'/>

              <Button
                className='w-50 fs-5'
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
