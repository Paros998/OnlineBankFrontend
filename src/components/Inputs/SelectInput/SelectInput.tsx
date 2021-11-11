import React, { FC, ReactNode } from 'react';
import { Form, FormSelectProps, InputGroup } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";

type option = { value: any, key: any }

interface SelectInputProps extends FormSelectProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  options: option[];
  placeholder: string;
  iconComponent: ReactNode;
}

const SelectInput: FC<SelectInputProps> = ({ label, containerClass, labelClassName, iconComponent, ...props }) => {
  const [ field ] = useField(props.name);
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>
        {label}
      </Form.Label>

      <InputGroup>
        <Form.Select {...field} {...props} bsPrefix='form-select select btn'>
          <option>{props.placeholder} </option>
          {props.options.map((item) => (
            <option key={item.key} value={item.value}>{item.value}</option>
          ))}
        </Form.Select>

        <InputGroup.Text className='bg-white border-0'>
          {iconComponent}
        </InputGroup.Text>
      </InputGroup>

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

export default SelectInput;
