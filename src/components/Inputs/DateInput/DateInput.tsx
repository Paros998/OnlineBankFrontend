import React, {FC} from 'react';
import {Form} from "react-bootstrap";
import ReactDatePicker, {ReactDatePickerProps} from "react-datepicker";
import {useField} from "formik";
import CustomCalendarInput from "./CustomCalendarInput/CustomCalendarInput";

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

      <ReactDatePicker
        selected={new Date(field.value)}
        dateFormat='dd.MM.yyyy'
        customInput={<CustomCalendarInput name={props.name} />}
        showPopperArrow={false}
        {...props}
      />
    </Form.Group>
  );
};

export default DateInput;
