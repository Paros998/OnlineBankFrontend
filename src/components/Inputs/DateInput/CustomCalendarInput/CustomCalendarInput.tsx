import React, { forwardRef, useState } from 'react';
import {FormControl, FormControlProps, InputGroup} from "react-bootstrap";
import {CalendarDate} from "react-bootstrap-icons";

interface CustomCalendarInputProps extends FormControlProps {
  name: string;
  inputTextClassName?: string;
}

const CustomCalendarInput = forwardRef(({inputTextClassName, ...props}: CustomCalendarInputProps, ref) => {
  const [textInputBorderClass, setTextInputBorderClass] = useState('border-secondary-light');
  return (
    <InputGroup className='is-invalid'>
      <FormControl
        {...props}
        className='border-end-0'
        onFocus={() => setTextInputBorderClass('border-danger')}
        onBlur={() => setTextInputBorderClass('border-secondary-light')}
        ref={ref}
      />

      <InputGroup.Text
        className={`bg-white fs-4 border-start-0 border-end ${textInputBorderClass} ${inputTextClassName}`}
      >
        <CalendarDate />
      </InputGroup.Text>
    </InputGroup>
  );
});

export default CustomCalendarInput;
