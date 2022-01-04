import React, {useState} from 'react';
import {Form, useFormikContext} from "formik";
import SubmitButton from "../../SubmitButton/SubmitButton";
import {Button} from "react-bootstrap";
import TextInput from "../../Inputs/TextInput/TextInput";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import {NewClientFormikValues} from "../../../interfaces/formik/NewClientFormikValues";


const NewClientForm = () => {
  const {errors} = useFormikContext<NewClientFormikValues>();
  const [secondaryAddress, setSecondaryAddress] = useState<boolean>(false);
  const [initialBalance, setInitialBalance] = useState<boolean>(false);
  return (
    <Form className='h-100 '>
      <div className='container-fluid h-100 w-100 bg-dark blob overflow-scroll'>
        <div className='row pt-3'>
          <div className='col '>
            <TextInput
              isInvalid={!!errors.fullName}
              label='Imię i Nazwisko'
              labelClassName='text-light mb-0'
              name='fullName'
              placeholder='Jan Kowalski...'
              type='text'
              className='bg-secondary-dark text-light'
            />
          </div>
          <div className='col'>
            <TextInput
              isInvalid={!!errors.identificationNumber}
              label='Numer Dowodu'
              labelClassName='text-light mb-0'
              name='identificationNumber'
              placeholder='CEW990011...'
              className='bg-secondary-dark text-light'
            />
          </div>
          <div className='col'>
            <NumberInput
              isInvalid={!!errors.personalNumber}
              label='Pesel'
              labelClassName='text-light mb-0'
              name='personalNumber'
              placeholder='99540204972... '
              className='bg-secondary-dark text-light primary-number-input'
            />
          </div>
        </div>

        <div className='row d-flex justify-content-center mt-3 '>

          <div className='col-sm-4 '>
            <TextInput
              isInvalid={!!errors.dateOfBirth}
              label='Data Urodzenia'
              labelClassName='text-light mb-0'
              name='dateOfBirth'
              placeholder='DD.MM.YYYY'
              type='text'
              className='bg-secondary-dark text-light'
            />
          </div>
          <div className='col-sm-4 '>
            <TextInput
              isInvalid={!!errors.email}
              label='Adres Email'
              labelClassName='text-light mb-0'
              name='email'
              placeholder='name@example.com ...'
              type='email'
              className='bg-secondary-dark text-light  '
            />
          </div>
        </div>
        <div className='row d-flex justify-content-center mt-3 '>
          <div className='col-sm-2 form-check align-items-end justify-content-center '>
            <div className='mt-4 pt-2 '>
              <input
                type='checkbox'
                className='form-check-input bg-primary text-light btn-pointer'
                onClick={() => {
                  setInitialBalance(!initialBalance)
                }}
              />
              <label className='form-check-label text-light text-truncate'>
                Ustaw Stan Konta?
              </label>
            </div>
          </div>

          <div className='col-sm-3 '>
            <NumberInput
              isInvalid={!!errors.balance}
              name='balance'
              label="Stan Konta"
              labelClassName='text-light mb-0'
              disabled={!initialBalance}
              className='bg-secondary-dark text-light primary-number-input disabled-input'
            />
          </div>

          <div className='col-sm-3 '>
            <NumberInput
              isInvalid={!!errors.accountNumber}
              label="Numer Rachunku"
              labelClassName='text-light mb-0'
              name='accountNumber'
              placeholder='0000111188889999'
              className='bg-secondary-dark text-light primary-number-input'
              inputGroup='12 0600 1209'
            />
          </div>
          <div className='col-sm-3 '>

          </div>
        </div>

        <div className='row justify-content-start mt-3'>
          <div className='col-sm-4'>
            <TextInput
              isInvalid={!!errors.city}
              label="Miasto Zamieszkania"
              labelClassName='text-light mb-0'
              name='city'
              placeholder='Kielce...'
              className='bg-secondary-dark text-light '
            />
          </div>
          <div className='col-sm-4'>
            <TextInput
              isInvalid={!!errors.homeAddress}
              label="Adres"
              labelClassName='text-light mb-0'
              name='homeAddress'
              placeholder='Bodzetyńska 7, m.11 ...'
              className='bg-secondary-dark text-light '
            />
          </div>
          <div className='col-sm-4'>
            <TextInput
              isInvalid={!!errors.postalCode}
              label="Kod Pocztowy"
              labelClassName='text-light mb-0'
              name='postalCode'
              placeholder='Kielce 25-001 ...'
              className='bg-secondary-dark text-light '
            />
          </div>
        </div>

        <div className='row justify-content-center mt-3'>
          <div className='col-sm-2 form-check align-items-end justify-content-center'>
            <div className='mt-4 pt-2'>
              <input
                type='checkbox'
                className='form-check-input bg-primary text-light btn-pointer'
                onClick={() => {
                  setSecondaryAddress(!secondaryAddress)
                }}
              />
              <label className='form-check-label text-light text-truncate'>
                Adres korespondencyjny?
              </label>
            </div>
          </div>
          <div className='col-sm-3'>
            <TextInput
              isInvalid={!!errors.secCity}
              label="Miasto "
              labelClassName='text-light mb-0'
              name='secCity'
              placeholder='Kielce...'
              className='bg-secondary-dark text-light disabled-input'
              disabled={!secondaryAddress}
            />
          </div>
          <div className='col-sm-3'>
            <TextInput
              isInvalid={!!errors.secHomeAddress}
              label="Adres"
              labelClassName='text-light mb-0'
              name='secHomeAddress'
              placeholder='Bodzetyńska 7, m.11 ...'
              className='bg-secondary-dark text-light disabled-input'
              disabled={!secondaryAddress}
            />
          </div>
          <div className='col-sm-3'>
            <TextInput
              isInvalid={!!errors.secPostalCode}
              label="Kod Pocztowy"
              labelClassName='text-light mb-0'
              name='secPostalCode'
              placeholder='Kielce 25-001 ...'
              className='bg-secondary-dark text-light disabled-input'
              disabled={!secondaryAddress}
            />
          </div>
        </div>

        <div className='row justify-content-center mt-3'>

          <div className='col-sm-4'>
            <TextInput
              isInvalid={!!errors.username}
              label="Login"
              labelClassName='text-light mb-0'
              name='username'
              placeholder='Grzegor022$# ...'
              className='bg-secondary-dark text-light '
            />
          </div>
          <div className='col-sm-4'>
            <TextInput
              isInvalid={!!errors.password}
              label="Hasło"
              labelClassName='text-light mb-0'
              type='password'
              name='password'
              placeholder='***************'
              className='bg-secondary-dark text-light '
            />
          </div>
        </div>

        <div className='row mt-4 mb-4'>
          <div className='col text-end'>
            <Button
              type='reset'
              className='w-30 text-light'
              variant='secondary'
            >
              Resetuj
            </Button>
          </div>
          <div className='col text-start'>
            <SubmitButton
              className='w-30'
            >
              Stwórz
            </SubmitButton>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default NewClientForm;