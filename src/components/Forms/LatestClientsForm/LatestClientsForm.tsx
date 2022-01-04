import React, {useState} from 'react';
import {Form, useFormikContext} from "formik";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import {LatestClientsFormikValues} from "../../../interfaces/FormValues/LatestClientsFormikValues";
import {BsArrowDownSquare, BsArrowUpSquare} from "react-icons/all";

const LatestClientsForm = () => {
  const {setFieldValue,handleSubmit, handleChange} = useFormikContext<LatestClientsFormikValues>()
  const [input,setInput] = useState<number>(1);
  return (
    <Form className='p-2'>
      <div className='container-fluid w-100 '>
        <div className='row '>
          <div className='col d-flex bg-dark p-0'>
            <div className='w-90 d-flex align-items-center pb-2 pt-1'>
              <NumberInput
                labelClassName='d-none'
                containerClass='w-100'
                className='w-100 h-100 fs-5 bg-dark text-primary border-0 m-0 mnh-44px primary-number-input'
                placeholder='Liczba dni do sprawdzenia...'
                name='days'
                onChange={(e) => {
                  const num:number = +e.target.value;
                  if(!(num < 1)){
                    setInput(num);
                    handleChange(e);
                    handleSubmit();
                  }
                }}
              />
            </div>
            <div className='w-10 h-100 pb-2 pt-1 m-0'>
              <BsArrowUpSquare
                className='fs-5 text-primary w-100 m-0 p-0 btn-pointer'
                onClick={()=>{
                  if(input < 1)
                    setInput(1);
                  else{
                    const newVal = input + 1;
                    setInput(newVal);
                    setFieldValue("days",newVal);
                  }
                  handleSubmit();
                }}
              />
              <BsArrowDownSquare
                className='fs-5 text-primary w-100 m-0 p-0 btn-pointer'
                onClick={()=>{
                  if(input > 1){
                    const newVal = input - 1;
                    setInput(newVal);
                    setFieldValue("days",newVal);
                  }
                  else
                    setInput(1)
                  handleSubmit();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LatestClientsForm;