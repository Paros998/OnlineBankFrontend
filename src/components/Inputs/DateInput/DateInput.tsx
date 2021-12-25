import React, { FC } from 'react';
import { Form } from "react-bootstrap";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { ErrorMessage, useField } from "formik";
import CustomCalendarInput from "./CustomCalendarInput/CustomCalendarInput";
import dayjs from "dayjs";
import { formatDateWithDayJs } from "../../../utils/formatDateWithDayJs";

interface DateInputProps extends ReactDatePickerProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
}

const DateInput: FC<DateInputProps> = ({ name, label, containerClass, labelClassName, ...props }) => {
  const [field] = useField(name);

  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>

      <ReactDatePicker
        selected={field.value && dayjs(formatDateWithDayJs(field.value)).toDate()}
        dateFormat='dd.MM.yyyy'
        className='border-end-0'
        customInput={
          <CustomCalendarInput
            name={name}
            className={`${props.className} `}
            inputTextClassName={props.className}
          />
        }
        autoComplete='off'
        showPopperArrow={false}
        {...props}
      />

      <ErrorMessage name={field.name}>
        {(errorMessage) => (
          <Form.Control.Feedback type='invalid' className='d-block'>
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </ErrorMessage>
    </Form.Group>
  );
};

export default DateInput;
