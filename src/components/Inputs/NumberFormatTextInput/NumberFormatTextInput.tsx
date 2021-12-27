import React, { FC } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { ErrorMessage, useField } from "formik";
import { Form, InputGroup } from "react-bootstrap";

interface NumberFormatTextInputProps extends NumberFormatProps<any> {
  name: string;
  labelClassName?: string;
  containerClass?: string;
}

const NumberFormatTextInput: FC<NumberFormatTextInputProps> = ({ label, readonly, labelClassName, containerClass, ...props }) => {
  const [field, , helpers] = useField(props.name);

  if (!readonly) {
    return (
      <Form.Group className={containerClass}>
        <Form.Label className={labelClassName}>{label}</Form.Label>

        <InputGroup>
          <NumberFormat
            mask='_'
            onValueChange={(values) => helpers.setValue(values.value)}
            customInput={Form.Control}
            {...field}
            {...props}
            onChange={() => undefined}
          />
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
    <>
      <span className='fw-bold'>{label}</span>
      <div className='w-100 p-1' />

      <NumberFormat
        format={props.format}
        value={field.value || '-'}
        displayType='text'
      />
    </>
  );
};

export default NumberFormatTextInput;
