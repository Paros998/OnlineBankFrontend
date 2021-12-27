import React from 'react';
import {Form, useFormikContext} from "formik";
import TextInput from "../../Inputs/TextInput/TextInput";
import DateInput from "../../Inputs/DateInput/DateInput";
import {FilterClientsEmployeesFormikValues} from "../../../interfaces/formik/FilterClientsEmployeesFormikValues";
import dayjs from "dayjs";

const FilterClientsEmployeesForm = () => {
  const {setFieldValue, handleSubmit, handleChange} = useFormikContext<FilterClientsEmployeesFormikValues>()
  return (
    <Form className='p-2'>
      <div className='container-fluid w-100 '>
        <div className='row align-items-start'>
          <div className='col'>
            <TextInput
              labelClassName='d-none'
              name='personalNumber_personName'
              placeholder='Szukaj po peselu/nazwisku'
              className='text-dark w-100 h-100'
              onChange={(e)=>{
                handleChange(e);
                handleSubmit();
              }}
            />
          </div>
          <div className='col'>
            <DateInput
              name='birthDate'
              maxDate={dayjs().toDate()}
              minDate={dayjs("01.01.1900","DD.MM.YYYY").toDate()}
              placeholderText='DD.MM.YYYY'
              className='text-dark h-100 w-100'
              onChange={(date: Date) => {
                setFieldValue("birthDate", date);
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default FilterClientsEmployeesForm;
