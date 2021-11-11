import React from 'react';
import { Button, Card } from "react-bootstrap";
import { Form, useFormikContext } from "formik";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";
import SelectInput from "../Inputs/SelectInput/SelectInput";
import DateInput from "../Inputs/DateInput/DateInput";
import { NewVisitFormikValues } from "../../interfaces/NewVisitFormikValues";
import { Bank2, Clock } from "react-bootstrap-icons";
//TODO add key-values to dictionary on backend server

const establishmentOptions = [
  { value: 'Kielce', key: 1 },
  { value: 'Warszawa', key: 2 },
  { value: 'Kraków', key: 3 },
  { value: 'Poznań', key: 4 },
  { value: 'Wrocław', key: 5 },
  { value: 'Rzeszów', key: 6 },
  { value: 'Olsztyn', key: 7 },
  { value: 'Gdańsk', key: 8 }
]

const visitTimeOptions = [
  { value: '7.am', key: 1 },
  { value: '8.am', key: 2 },
  { value: '9.am', key: 3 },
  { value: '10.am', key: 4 },
  { value: '11.am', key: 5 },
  { value: '12.am', key: 6 },
  { value: '13.am', key: 7 },
  { value: '14.am', key: 8 },
  { value: '15.am', key: 9 }
]

const NewVisitForm = ({ ...props }) => {
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
              <Button
                className='rounded-pill'
                type='submit'
              >
                Wyślij
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewVisitForm;
