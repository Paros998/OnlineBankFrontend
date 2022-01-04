import React, {FC} from 'react';
import {ErrorMessage, useField} from "formik";
import ReadonlyInput from "../ReadonlyInput/ReadonlyInput";
import {Form, FormControlProps, InputGroup} from "react-bootstrap";

interface TextInputProps extends FormControlProps {
  label?: string;
  labelClassName?: string;
  name: string;
  containerClass?: string;
  hasInputText?: boolean;
  maxLength?: number;
  readonlyAdditionalValueContent?: string;
  inputGroup?: string;
  isRequired?: boolean;
  isInvalid?: boolean | undefined;
  readOnly?: boolean
}

const TextInput: FC<TextInputProps> = ({
                                         label,
                                         hasInputText,
                                         readOnly,
                                         readonlyAdditionalValueContent,
                                         containerClass,
                                         labelClassName,
                                         inputGroup,
                                         isRequired,
                                         isInvalid,
                                         maxLength,
                                         name,
                                         ...props
                                       }) => {
  const [field] = useField(name);
  if (!readOnly) {
    return (
      <Form.Group className={containerClass}>
        <Form.Label className={labelClassName}>{label}</Form.Label>

        <InputGroup hasValidation={true}>
          {
            inputGroup && <InputGroup.Text>{inputGroup}</InputGroup.Text>
          }
          <Form.Control
            {...field}
            {...props}
            aria-required={isRequired}
            isInvalid={isInvalid}
            autoComplete='off'>
          </Form.Control>
          {
            hasInputText && (
              <InputGroup.Text className='bg-white'>
                PLN
              </InputGroup.Text>
            )
          }
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
  }
  return (
    <ReadonlyInput
      value={field.value}
      label={label}
      additionalContent={readonlyAdditionalValueContent}
      wrapperClassName={containerClass}
    />
  );
}
export default TextInput;
