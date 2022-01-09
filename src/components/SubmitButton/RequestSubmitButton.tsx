import React, {FC} from 'react';
import {Button, ButtonProps, Spinner} from "react-bootstrap";

interface ModalSubmitButtonProps{
  props: ButtonProps;
  isSubmitting: boolean;
}

const RequestSubmitButton: FC<ModalSubmitButtonProps> = ({ props ,isSubmitting,children}) => {
  const {...buttonProps} = props;
  return (
    <Button
      {...buttonProps}
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

export default RequestSubmitButton;
