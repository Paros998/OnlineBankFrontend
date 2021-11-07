import React, { FC } from 'react';
import { Button, ButtonProps, Spinner } from "react-bootstrap";
import { useFormikContext } from "formik";

const SubmitButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { isSubmitting } = useFormikContext();
  return (
    <Button
      {...props}
      disabled={isSubmitting}
      type='submit'
    >
      {isSubmitting && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          className='me-1'
        />
      )}

      {children}
    </Button>
  );
};

export default SubmitButton;