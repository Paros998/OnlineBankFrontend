import React, { FC } from 'react';
import { Form, FormControlProps } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";

interface TextInputProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
}

const TextInput: FC<TextInputProps> = ({ label, containerClass, labelClassName, ...props }) => {
  const [ field ] = useField(props);
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>

      <Form.Control {...field} {...props} />

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

export default TextInput;