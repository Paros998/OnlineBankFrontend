import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button } from "react-bootstrap";
import { useFormikContext } from "formik";
import { TransferFormikValues } from "../../../../../interfaces/formik/TransferFormikValues";
import { getTodayDate } from "../../../../../utils/getTodayDate";
import SubmitButton from "../../../../../components/SubmitButton/SubmitButton";

interface ActionButtonsProps {
  readonly: boolean;
  setReadonly: Dispatch<SetStateAction<boolean>>;
}

const ActionButtons: FC<ActionButtonsProps> = ({ readonly, setReadonly }) => {
  const { validateForm, values, setTouched, setFieldValue } = useFormikContext<TransferFormikValues>();

  if (!readonly) {
    return (
      <Button
        className='rounded-pill fw-bold w-25'
        type='button'
        onClick={async () => {
          const response = await validateForm(values);
          setTouched({
            category: true,
            title: true,
            amount: true,
            receiver_sender: true,
            toAccountNumber: true,
            transferDate: true
          }, true);

          if (!Object.entries(response).length) {
            if (!values.isCyclicalTransfer) {
              setFieldValue('transferDate', getTodayDate());
            }
            setReadonly(!readonly);
          }
        }}
      >
        Dalej
      </Button>
    )
  }

  return (
    <>
      <Button
        className='rounded-pill fw-bold w-25'
        variant='secondary-light'
        type='button'
        onClick={() => setReadonly(!readonly)}
      >
        Wróć
      </Button>

      <SubmitButton
        className='ms-4 rounded-pill fw-bold w-25 text-white'
        variant='success'
      >
        Zatwierdź
      </SubmitButton>
    </>
  );
};

export default ActionButtons;
