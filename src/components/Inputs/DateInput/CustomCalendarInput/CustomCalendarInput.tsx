import React, { forwardRef } from 'react';
import {FormControl, FormControlProps, InputGroup} from "react-bootstrap";
import {CalendarDate} from "react-bootstrap-icons";
import { useField } from "formik";

interface CustomCalendarInputProps extends FormControlProps {
  name: string;
  inputTextClassName?: string;
  hasIcon?: boolean;
}

const CustomCalendarInput = forwardRef(({inputTextClassName, name, hasIcon, ...props}: CustomCalendarInputProps, ref) => {
  const [field] = useField(name);

  return (
    <InputGroup className='is-invalid'>
      <FormControl
        {...field}
        {...props}
        ref={ref}
      />

      {
        hasIcon && (
          <InputGroup.Text className={`bg-white fs-4 ${inputTextClassName}`}>
            <CalendarDate />
          </InputGroup.Text>
        )
      }
    </InputGroup>
  );
});

export default CustomCalendarInput;
