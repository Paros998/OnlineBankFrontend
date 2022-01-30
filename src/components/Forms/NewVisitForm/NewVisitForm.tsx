import React from 'react';
import {Card} from "react-bootstrap";
import {Form, useFormikContext} from "formik";
import TextWithDiamond from "../../TextWithDiamond/TextWithDiamond";
import SelectInput from "../../Inputs/SelectInput/SelectInput";
import DateInput from "../../Inputs/DateInput/DateInput";
import {NewVisitFormikValues} from "../../../interfaces/formik/NewVisitFormikValues";
import {Bank2, Clock} from "react-bootstrap-icons";
import SubmitButton from '../../SubmitButton/SubmitButton';

const establishmentOptions = [
  { value: 'Kielce', key: 'Kielce' },
  { value: 'Warszawa', key: 'Warszawa' },
  { value: 'Kraków', key: 'Kraków' },
  { value: 'Poznań', key: 'Poznań' },
  { value: 'Wrocław', key: 'Wrocław' },
  { value: 'Rzeszów', key: 'Rzeszów' },
  { value: 'Olsztyn', key: 'Olsztyn' },
  { value: 'Gdańsk', key: 'Gdańsk' }
]

const visitTimeOptions = [
  { value: '7.am', key: '7.am' },
  { value: '8.am', key: '8.am' },
  { value: '9.am', key: '9.am' },
  { value: '10.am', key: '10.am' },
  { value: '11.am', key: '11.am' },
  { value: '12.am', key: '12.am' },
  { value: '13.am', key: '13.am' },
  { value: '14.am', key: '14.am' },
  { value: '15.am', key: '15.am' }
]

type NewVisitFormProps = {
  Establishments?: string[],
  Hours?: string[],
  className: string
}

const NewVisitForm = (props:NewVisitFormProps) => {
  const { setFieldValue } = useFormikContext<NewVisitFormikValues>();
  return (
    <div {...props}>
      <Card style={{ width: '22rem' }} className='rounded-card-10'>
        <Card.Body>
          <Card.Title>
            <TextWithDiamond
              headerFontSize='fs-5'
            >
              <h5>Umawianie Wizyty</h5>
            </TextWithDiamond>
          </Card.Title>

          <Form className='p-2'>
            <div className='bg-primary rounded p-3'>
              <div className='mt-0'>
                <SelectInput
                  name='establishment'
                  label='Placówka'
                  labelClassName='text-white'
                  options={establishmentOptions}
                  placeholder='Wybierz Placówkę'
                  className='custom-select btn border-white'
                  iconComponent={<Bank2 className='fs-4'/>}
                />
              </div>

              <div className='mt-3'>
                <DateInput
                  name='visitDate'
                  label='Data'
                  labelClassName='text-white'
                  className='border-0'
                  onChange={(date: Date) => {
                    setFieldValue("visitDate", date);
                  }}
                />
              </div>

              <div className='mt-3 mb-3'>
                <SelectInput
                  name='visitTime'
                  label='Godzina'
                  labelClassName='text-white'
                  options={visitTimeOptions}
                  placeholder='Wybierz Godzinę'
                  className='custom-select btn border-white'
                  iconComponent={<Clock className='fs-4'/>}
                />
              </div>

            </div>

            <hr className='text-primary-dark w-100 '/>

            <div className='vstack mx-auto col-md-5'>
              <SubmitButton className='rounded-pill'>
                Wyślij
              </SubmitButton>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewVisitForm;
