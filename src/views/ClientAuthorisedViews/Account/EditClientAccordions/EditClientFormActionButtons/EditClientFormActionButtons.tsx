import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button } from 'react-bootstrap';
import SubmitButton from '../../../../../components/SubmitButton/SubmitButton';
import { useFormikContext } from 'formik';

interface EditClientFormActionButtonsProps {
  readonly: boolean;
  setReadonly: Dispatch<SetStateAction<boolean>>;
}

const EditClientFormActionButtons: FC<EditClientFormActionButtonsProps> = ({ readonly, setReadonly }) => {
  const { resetForm } = useFormikContext();

  if (readonly) {
    return (
      <Button
        className='rounded-pill fw-bold w-30 text-white float-end'
        variant='warning'
        type='button'
        onClick={() => setReadonly(!readonly)}
      >
        Edytuj
      </Button>
    )
  }

  return (
    <div className='mt-3 text-end'>
      <Button
        className='rounded-pill fw-bold w-30'
        variant='secondary-light'
        type='button'
        onClick={() => {
          setReadonly(!readonly);
          resetForm();
        }}
      >
        Wróć
      </Button>

      <SubmitButton
        className='ms-4 rounded-pill fw-bold w-30 text-white'
        variant='success'
      >
        Zatwierdź
      </SubmitButton>
    </div>
  );
};

export default EditClientFormActionButtons;
