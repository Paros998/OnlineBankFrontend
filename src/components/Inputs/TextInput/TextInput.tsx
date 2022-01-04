import React, {FC} from 'react';
import {Form, FormControl, FormControlProps, InputGroup} from "react-bootstrap";
import {ErrorMessage, useField} from "formik";

interface TextInputProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  inputGroup?: string;
  isRequired?: boolean;
  isInvalid?: boolean | undefined;
}

const TextInput: FC<TextInputProps> = ({
                                         label,
                                         containerClass,
                                         labelClassName,
                                         inputGroup,
                                         isRequired,
                                         isInvalid,
                                         ...props
                                       }) => {
  const [field] = useField(props);
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={labelClassName}>{label}</Form.Label>

      <InputGroup hasValidation={true}>
        {
          inputGroup && <InputGroup.Text>{inputGroup}</InputGroup.Text>
        }
        <Form.Control aria-required={isRequired} isInvalid={isInvalid} {...field} {...props} >
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

export default TextInput;