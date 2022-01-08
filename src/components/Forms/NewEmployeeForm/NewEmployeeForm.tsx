import React from 'react';
import {Form, useFormikContext} from "formik";
import TextInput from "../../Inputs/TextInput/TextInput";
import ModalSubmitButton from "../../SubmitButton/ModalSubmitButton";
import {NewEmployeeFormikValues} from "../../../interfaces/formik/NewEmployeeFormikValues";
import NumberInput from "../../Inputs/NumberInput/NumberInput";
import {Button} from "react-bootstrap";
import {Person} from "react-bootstrap-icons";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import {Roles} from "../../../enums/Roles";

const NewEmployeeForm = () => {
  const {errors, isSubmitting} = useFormikContext<NewEmployeeFormikValues>();
  const rolesOptions:{value:Roles,key:string}[] = [
    {value: Roles.RoleEmployee, key:"Pracownik"},
    {value: Roles.RoleAdmin, key:"Administrator"}
  ];

  return (
    <Form className='h-100 '>
      <div className='container-fluid h-100 w-100 vstack align-items-center'>
        <div className='hstack w-100'>
          <div className='w-10'>

          </div>
          <div className='vstack w-30'>
            <TextInput
              isInvalid={!!errors.fullName}
              label='Imię i Nazwisko'
              labelClassName='text-light mb-0'
              name='fullName'
              placeholder='Jan Kowalski...'
              type='text'
              className='bg-light text-dark'
            />
            <TextInput
              isInvalid={!!errors.email}
              label='Adres Email'
              labelClassName='text-light mb-0'
              name='email'
              placeholder='name@example.com ...'
              type='email'
              className='bg-light text-dark mb-2'
            />
            <hr/>
            <TextInput
              isInvalid={!!errors.city}
              label="Miasto Zamieszkania"
              labelClassName='text-light mb-0'
              name='city'
              placeholder='Kielce...'
              className='bg-light text-dark'
            />
            <TextInput
              isInvalid={!!errors.homeAddress}
              label="Adres"
              labelClassName='text-light mb-0'
              name='homeAddress'
              placeholder='Bodzetyńska 7, m.11 ...'
              className='bg-light text-dark'
            />
            <TextInput
              isInvalid={!!errors.postalCode}
              label="Kod Pocztowy"
              labelClassName='text-light mb-0'
              name='postalCode'
              placeholder='Kielce 25-001 ...'
              className='bg-light text-dark'
            />
          </div>
          <div className='w-20'>

          </div>
          <div className='vstack w-30'>
            <TextInput
              isInvalid={!!errors.identificationNumber}
              label='Numer Dowodu'
              labelClassName='text-light mb-0'
              name='identificationNumber'
              placeholder='CEW990011...'
              className='bg-light text-dark '
            />
            <NumberInput
              isInvalid={!!errors.personalNumber}
              label='Pesel'
              labelClassName='text-light mb-0'
              name='personalNumber'
              placeholder='99540204972... '
              className='bg-light text-dark primary-number-input'
            />
            <TextInput
              isInvalid={!!errors.dateOfBirth}
              label='Data Urodzenia'
              labelClassName='text-light mb-0'
              name='dateOfBirth'
              placeholder='DD.MM.YYYY'
              type='text'
              className='bg-light text-dark mb-2'
            />
            <hr/>
            <TextInput
              isInvalid={!!errors.username}
              label="Login"
              labelClassName='text-light mb-0'
              name='username'
              placeholder='Grzegor022$# ...'
              className='bg-light text-dark '
            />
            <TextInput
              isInvalid={!!errors.password}
              label="Hasło"
              labelClassName='text-light mb-0'
              type='password'
              name='password'
              placeholder='***************'
              className='bg-light text-dark '
            />
          </div>
          <div className='w-10'>

          </div>
        </div>
        <div className='hstack justify-content-center'>
          <div className='hstack justify-content-center my-auto w-100 mt-4'>
            <SelectInput
              name='appUserRole'
              label='Rola'
              labelClassName='text-white'
              options={rolesOptions}
              placeholder={"Wybierz Rolę"}
              className='custom-select btn border-white'
              containerClass='w-40'
              iconComponent={<Person className='fs-4'/>}
            />
          </div>
        </div>
        <div className='hstack justify-content-center my-auto'>
          <Button
            type='reset'
            className='w-20 rounded-pill my-auto me-3'
            variant='secondary'
          >
            Resetuj
          </Button>
          <ModalSubmitButton
            props={{
              variant: 'info',
              className: 'w-20 rounded-pill my-auto'
            }}
            isSubmitting={isSubmitting}
          >
            Stwórz
          </ModalSubmitButton>
        </div>
      </div>
    </Form>
  );
};

export default NewEmployeeForm;