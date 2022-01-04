import React, {FC, ReactNode} from 'react';
import { Form, FormSelectProps, InputGroup } from "react-bootstrap";
import {ErrorMessage, useField} from "formik";
import ReadonlyInput from "../ReadonlyInput/ReadonlyInput";

type option = { value: any, key: any }

interface SelectInputProps extends FormSelectProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  options: option[];
  placeholder?: string;
  iconComponent?: ReactNode;
  readonly?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({ label, containerClass, readonly, labelClassName, iconComponent, ...props }) => {
  const [field] = useField(props.name);

  if (!readonly) {
    return (
      <Form.Group className={containerClass}>
        <Form.Label className={labelClassName}>
          {label}
        </Form.Label>

        <InputGroup className='is-invalid'>
          <Form.Select {...field} {...props} bsPrefix='form-select select btn'>
            <option key={0} value=''>{props.placeholder}</option>
            {props.options.map((item) => (
              <option key={item.key} value={item.value}>{item.key}</option>
            ))}
          </Form.Select>

          {
            iconComponent && (
              <InputGroup.Text className='bg-white border-0'>
                {iconComponent}
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
  }

  return (
    <ReadonlyInput
      value={field.value}
      label={label}
    />
  );
};

export default SelectInput;
