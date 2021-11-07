import React, { FC, HTMLAttributes } from 'react';
import { Button, Card } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { Form } from "formik";
import TextInput from "../Inputs/TextInput/TextInput";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";


interface LoginFormProps extends HTMLAttributes<any> {
  handleHelpCanvas: (isShown: boolean) => void;
  type: string;
}

const LoginForm: FC<LoginFormProps> = ({ handleHelpCanvas,type ,...props }) => {
  return (
    <div {...props}>
      <Card style={{ width: '22rem' }} className={`rounded-card-10 ${type === 'employee' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <Card.Body>
          <Form>
            <Card.Title>
              <TextWithDiamond
              headerFontSize='fs-5'
              >
                <h5>Logowanie</h5>
              </TextWithDiamond>
            </Card.Title>

            <Card.Text className='p-2'>
              <div className='bg-primary rounded-card-10 p-3'>
                <TextInput
                  name='username'
                  label='Login'
                  placeholder='Wpisz login'
                  labelClassName='text-white'
                  className='text-dark text-center'
                />

                <TextInput
                  name='password'
                  type='password'
                  label='Hasło'
                  placeholder='Wprowadź hasło'
                  labelClassName='text-white'
                  containerClass='mt-4 mb-3 '
                  className='text-dark text-center'
                />
              </div>

              <div className='vstack mx-auto col-md-5'>
                <Button
                  className='mt-3 rounded-pill fs-5'
                  type='submit'
                >
                  Zaloguj
                </Button>
              </div>

              <hr className='text-primary-dark w-100'/>

              <div className='d-flex justify-content-between align-items-baseline'>
                <TextWithDiamond
                headerFontSize='fs-6'
                >
                  <span className='text-wrap'>
                    Problem z logowaniem <ArrowRight/>
                  </span>
                </TextWithDiamond>

                <Button
                  className='float-end rounded-pill fs-5'
                  onClick={() => handleHelpCanvas(true)}
                >
                  Pomoc
                </Button>
              </div>
            </Card.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;