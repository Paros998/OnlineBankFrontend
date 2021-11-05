import React, {FC} from 'react';
import {Form} from "react-bootstrap";
import ReactDatePicker, {ReactDatePickerProps} from "react-datepicker";
import {useField} from "formik";

interface DateInputProps extends ReactDatePickerProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
}

const DateInput: FC<DateInputProps> = ({ label, containerClass, labelClassName,...props}) => {
const [field] = useField(props.name);
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>

      <ReactDatePicker className='select-date w-100 btn select ' selected={new Date(field.value)} {...props} />

    </Form.Group>
  );
};

export default DateInput;