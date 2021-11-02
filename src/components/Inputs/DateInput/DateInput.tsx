import React, {FC, useState} from 'react';
import {Form, FormControlProps} from "react-bootstrap";
import ReactDatePicker from "react-datepicker";

interface DateInputProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
}

const DateInput: FC<DateInputProps> = ({ label, containerClass, labelClassName,...props}) => {
const [value,setValue] = useState(new Date());
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>

      <ReactDatePicker className='select-date w-100 btn ' minDate={new Date()} onChange={((date:Date) => setValue(date))} selected={value}/>

    </Form.Group>
  );
};

export default DateInput;