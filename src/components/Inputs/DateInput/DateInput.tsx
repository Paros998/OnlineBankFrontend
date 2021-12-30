import React, { FC } from 'react';
import moment from "moment";
import { Form } from "react-bootstrap";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { ErrorMessage, useField } from "formik";
import CustomCalendarInput from "./CustomCalendarInput/CustomCalendarInput";
import dayjs from "dayjs";
import ReadonlyInput from "../ReadonlyInput/ReadonlyInput";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(isLeapYear);
dayjs.locale('pl');

interface DateInputProps extends ReactDatePickerProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  hasIcon?: boolean;
  valueFormat?: string;
}

const DateInput: FC<DateInputProps> = ({ name, label, containerClass, readOnly, labelClassName, valueFormat, ...props }) => {
  const [field] = useField(name);

  const formattedSelectedDate = moment(field.value, valueFormat).toDate();

  if (!readOnly) {
    return (
      <Form.Group className={containerClass}>
        <Form.Label className={labelClassName}>{label}</Form.Label>

        <ReactDatePicker
          selected={field.value && formattedSelectedDate}
          dateFormat='dd.MM.yyyy'
          customInput={
            <CustomCalendarInput
              name={name}
              className={`${props.className} `}
              hasIcon={props.hasIcon}
              inputTextClassName={props.className}
            />
          }
          autoComplete='off'
          showPopperArrow={false}
          {...props}
        />

        <ErrorMessage name={field.name}>
          {
            (errorMessage) => (
              <Form.Control.Feedback type='invalid' className='d-block'>
                {errorMessage}
              </Form.Control.Feedback>
            )
          }
        </ErrorMessage>
      </Form.Group>
    );
  }

  return (
    <ReadonlyInput
      value={moment(field.value, 'DD.MM.YYYY').format('DD.MM.YYYY')}
      label={label}
    />
  );
};

export default DateInput;
