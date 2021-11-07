import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, useFormikContext} from "formik";
import TextWithDiamond from "../TextWithDiamond/TextWithDiamond";
import SelectInput from "../Inputs/SelectInput/SelectInput";
import DateInput from "../Inputs/DateInput/DateInput";
import {NewVisitFormikValues} from "../../interfaces/NewVisitFormikValues";
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
  const {setFieldValue} = useFormikContext<NewVisitFormikValues>();
  return (
    <div {...props}>
      <Card style={{width: '22rem'}} className='rounded-card-10'>
        <Card.Body>
          <Form>
            <Card.Title>
              <TextWithDiamond
              headerFontSize='fs-5'
              >
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
                  iconClass='select-establishment'
                />

                <DateInput
                  name='visitDate'
                  label='Data'
                  labelClassName='text-white'
                  onChange={(date: Date) => {
                    setFieldValue("visitDate",date);
                  }}
                />

                <SelectInput
                  name='visitTime'
                  label='Godzina'
                  labelClassName='text-white'
                  options={visitTimeOptions}
                  placeholder='Wybierz Godzinę'
                  className='custom-select btn'
                  iconClass='select-hour'
                />

              </section>

              <hr className='text-primary-dark w-100 '/>

              <div className='vstack mx-auto col-md-5'>
                <Button
                  className=''
                  type='submit'
                >
                  Wyślij
                </Button>
              </div>

            </Card.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewVisitForm;