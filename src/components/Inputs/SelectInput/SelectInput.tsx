import React, {FC} from 'react';
import {Form, FormSelectProps, InputGroup} from "react-bootstrap";
import {ErrorMessage, useField} from "formik";

type option = { value: any ,key: any}


interface SelectInputProps extends FormSelectProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  options: option[];
  placeholder: string;
  iconClass: string;
}

const SelectInput: FC<SelectInputProps> = ({ label, containerClass, labelClassName,iconClass, ...props }) => {
  const [ field ] = useField(props.name);
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>
      <InputGroup>
        <Form.Select {...field} {...props} bsPrefix='form-select select btn' className={iconClass}>
          <option >{props.placeholder}  </option>
          {
            props.options.map( (item) => {
              return <option key={item.key} value={item.value}>{item.value}</option>
            })
          }
        </Form.Select>
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