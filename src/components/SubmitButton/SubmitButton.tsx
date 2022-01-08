import React, {FC} from 'react';
import {Button, ButtonProps, Spinner} from "react-bootstrap";
import {useFormikContext} from "formik";

interface SubmitButtonProps extends ButtonProps {
  to?: string;
  isManualDisabled?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  isManualDisabled,
  ...props
}) => {
  const { isSubmitting } = useFormikContext();
  return (
    <Button
      {...props}
      disabled={isSubmitting || isManualDisabled}
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
