import React, { FC, useState } from 'react';
import { Form, FormControlProps, InputGroup } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";

interface TextInputProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  hasInputText?: boolean;
}

const TextInput: FC<TextInputProps> = ({ label, hasInputText, containerClass, labelClassName, ...props }) => {
  const [field] = useField(props);
  const [textInputClass, setTextInputClass] = useState('border-secondary-light');

  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>

      <InputGroup>
        <Form.Control
          {...field}
          {...props}
          onFocus={() => hasInputText && setTextInputClass('border-danger')}
          onBlur={() => hasInputText && setTextInputClass('border-secondary-light')}
        />

        {
          hasInputText && (
            <InputGroup.Text className={`bg-white border-start-0 z-1000 ${textInputClass}`}>
              PLN
            </InputGroup.Text>
          )
        }
      </InputGroup>

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

export default TextInput;
