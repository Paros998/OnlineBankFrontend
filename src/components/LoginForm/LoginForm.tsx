import React, { FC, HTMLAttributes } from 'react';
import { Button, Card } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { Form } from "formik";
import TextInput from "../Inputs/TextInput/TextInput";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";

const LoginForm: FC<HTMLAttributes<any>> = (props) => {
  return (
    <div {...props}>
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Form>
            <Card.Title>
              <TextWithDiamond>
                <h5>Logowanie</h5>
              </TextWithDiamond>
            </Card.Title>

            <Card.Text className='p-2'>
              <div className='bg-primary rounded p-3'>
                <TextInput
                  name='login'
                  label='Login'
                />

                <TextInput
                  name='password'
                  label='Hasło'
                  containerClass='mt-4'
                />
              </div>

              <Button
                className='float-end mt-4 mb-3'
              >
                Dalej
              </Button>

              <hr className='text-primary-dark w-100'/>

              <div className='d-flex justify-content-between align-items-baseline'>
                <TextWithDiamond>
                  <span className='text-wrap'>Problem z logowaniem <ArrowRight/></span>
                </TextWithDiamond>

                <Button
                  className='float-end'
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