import React, {FC} from 'react';
import {ErrorMessage, useField} from "formik";
import {FloatingLabel, Form, FormControlProps, InputGroup} from "react-bootstrap";

interface NumberProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  floatingLabel?: string;
  floatingLabelClassName?: string;
  inputGroup?: string;
  isValid?: boolean | undefined;
}

const NumberInput: FC<NumberProps> = ({
                                        containerClass,
                                        label,
                                        labelClassName,
                                        children,
                                        floatingLabel,
                                        floatingLabelClassName,
                                        inputGroup,
                                        isValid,
                                        ...props
                                      }) => {
  const [field] = useField(props);
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>
      <InputGroup>
        {
          inputGroup && <InputGroup.Text>{inputGroup}</InputGroup.Text>
        }
        <Form.Control
          isValid={isValid}
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
      </InputGroup>
    </Form.Group>
  );
};

export default NumberInput;