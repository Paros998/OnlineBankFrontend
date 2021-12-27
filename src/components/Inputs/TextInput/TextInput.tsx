import React, { FC } from 'react';
import { Form, FormControlProps, InputGroup } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";
import ReadonlyInput from "../ReadonlyInput/ReadonlyInput";

interface TextInputProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  hasInputText?: boolean;
  maxLength?: number;
  readonlyAdditionalValueContent?: string;
}

const TextInput: FC<TextInputProps> = ({ label, hasInputText, readOnly, readonlyAdditionalValueContent, containerClass, labelClassName, ...props }) => {
  const [field] = useField(props);

  if (!readOnly) {
    return (
      <Form.Group className={containerClass}>
        <Form.Label className={labelClassName}>{label}</Form.Label>

        <InputGroup className='has-validation'>
          <Form.Control
            {...field}
            {...props}
            autoComplete='off'
          />

          {
            hasInputText && (
              <InputGroup.Text className='bg-white'>
                PLN
              </InputGroup.Text>
            )
          }
        </InputGroup>

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
      value={field.value}
      label={label}
      additionalContent={readonlyAdditionalValueContent}
    />
  );
};

export default TextInput;
