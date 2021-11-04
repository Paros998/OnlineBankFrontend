import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Form} from "formik";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";
import SelectInput from "../Inputs/SelectInput/SelectInput";
import DateInput from "../Inputs/DateInput/DateInput";
import {HouseFill,Clock} from "react-bootstrap-icons";
//TODO add key-values to dictionary on backend server

const establishmentOptions = [
  {value: 'Kielce', key: 1},
  {value: 'Warszawa', key: 2},
  {value: 'Kraków', key: 3},
  {value: 'Poznań', key: 4},
  {value: 'Wrocław', key: 5},
  {value: 'Rzeszów', key: 6},
  {value: 'Olsztyn', key: 7},
  {value: 'Gdańsk', key: 8}
]

const visitTimeOptions = [
  {value: '7.am', key: 1},
  {value: '8.am', key: 2},
  {value: '9.am', key: 3},
  {value: '10.am', key: 4},
  {value: '11.am', key: 5},
  {value: '12.am', key: 6},
  {value: '13.am', key: 7},
  {value: '14.am', key: 8},
  {value: '15.am', key: 9}
]

const NewVisitForm = ({...props}) => {
  return (
    <div {...props}>
      <Card style={{width: '22rem'}} className='border-1 border-primary rounded-card-10'>
        <Card.Body>
          <Form>
            <Card.Title>
              <TextWithDiamond>
                <h5>Umawianie Wizyty</h5>
              </TextWithDiamond>
            </Card.Title>

            <Card.Text className='p-2'>
              <section className='bg-primary rounded p-3'>
                <SelectInput
                  name='establishment'
                  label='Placówka'
                  labelClassName='text-white'
                  options={establishmentOptions}
                  placeholder='Wybierz Placówkę'
                  className='custom-select btn'
                  iconComponent={<HouseFill/>}
                />

                <DateInput
                  name={'visitDate'}
                  label={'Data'}
                  labelClassName='text-white'
                />

                <SelectInput
                  name='visitTime'
                  label='Godzina'
                  labelClassName='text-white'
                  options={visitTimeOptions}
                  placeholder='Wybierz Godzinę'
                  className='custom-select btn'
                  iconComponent={<Clock/>}
                />

              </section>
              <section className='vstack mx-auto col-md-5'>
                <Button
                  className='mt-3 '
                  type='submit'
                >
                  Wyślij
                </Button>
              </section>
                <hr className='text-primary-dark w-100 '/>
              <section className='vstack mx-auto col-md-5'>
                <Button
                  variant='secondary'
                  className='mb-1'
                  type='button'
                  href='/client/home'
                >
                  Wstecz
                </Button>
              </section>
            </Card.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewVisitForm;