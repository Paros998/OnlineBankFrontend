import React, {forwardRef} from 'react';
import {FormControl, FormControlProps, InputGroup} from "react-bootstrap";
import {CalendarDate} from "react-bootstrap-icons";

interface CustomCalendarInputProps extends FormControlProps {
  name: string;
}

const CustomCalendarInput = forwardRef((props: CustomCalendarInputProps, ref) => {
  return (
    <InputGroup>
      <FormControl
        {...props}
        ref={ref}
        className='border-0'
      />

      <InputGroup.Text className='bg-white fs-4 border-0'>
        <CalendarDate />
      </InputGroup.Text>
    </InputGroup>
  );
});

export default CustomCalendarInput;
