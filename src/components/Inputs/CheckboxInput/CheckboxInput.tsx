import React, { FC } from 'react';
import { Form, FormCheck, FormCheckProps } from "react-bootstrap";
import { useField } from "formik";

interface CheckboxInputProps extends FormCheckProps {
  name: string;
}

const CheckboxInput: FC<CheckboxInputProps> = (props) => {
  const [field] = useField(props.name);
  return (
    <Form.Group>
      <FormCheck
        {...props}
        type='checkbox'
        checked={field.value}
      />
    </Form.Group>
  );
};

export default CheckboxInput;
