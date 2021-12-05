import React, {FC} from 'react';
import {ErrorMessage, useField} from "formik";
import {Form, FormControlProps} from "react-bootstrap";

interface NumberProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
}

const NumberInput:FC<NumberProps> = ({containerClass,label,labelClassName,children,...props}) => {
  const [ field ] = useField(props);
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>

      <Form.Control
        type={'number'}
        {...field}
        {...props}
      >
        {children}
      </Form.Control>
      <ErrorMessage name={field.name}>
        {(errorMessage) => (
          <Form.Control.Feedback type='invalid'>
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </ErrorMessage>
    </Form.Group>
  );
};

export default NumberInput;