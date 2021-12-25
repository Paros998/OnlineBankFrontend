import React from 'react';
import { Form, useFormikContext } from "formik";
import { Button, Col, Collapse, ColProps, Row } from "react-bootstrap";
import TextInput from "../../../../components/Inputs/TextInput/TextInput";
import SelectInput from "../../../../components/Inputs/SelectInput/SelectInput";
import CheckboxInput from "../../../../components/Inputs/CheckboxInput/CheckboxInput";
import { TransferFormikValues } from "../../../../interfaces/formik/TransferFormikValues";
import DateInput from "../../../../components/Inputs/DateInput/DateInput";
import { formatDateWithDayJs } from "../../../../utils/formatDateWithDayJs";
import FormBlob from "../../../../components/FormBlob/FormBlob";
import { useSelectOptions } from "../../../../hooks/useSelectOptions";

const colProps: ColProps = {
  xs: 4,
  className: 'z-1000',
};

const NewTransferForm = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<TransferFormikValues>();
  const transferCategories = useSelectOptions<string>('/rest/transfers/categories');

  return (
    <Form className='position-relative mt-4'>
      <FormBlob style={{ zIndex: 1 }}/>

      <Row>
        <Col {...colProps}>
          <TextInput
            name='receiver_sender'
            label='Do odbiorcy'
            type='text'
            labelClassName='fw-bold'
            placeholder='Wpisz nazwę odbiorcy'
          />
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col {...colProps}>
          <TextInput
            name='toAccountNumber'
            label='Na rachunek'
            type='text'
            labelClassName='fw-bold'
            placeholder='Wpisz numer rachunku odbiorcy'
          />
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col {...colProps}>
          <hr className='bg-secondary-light'/>
        </Col>
      </Row>

      <Row className='mt-2'>
        <Col {...colProps}>
          <TextInput
            name='amount'
            label='Kwota'
            type='number'
            className='border-end-0'
            labelClassName='fw-bold'
            placeholder='Wpisz numer rachunku odbiorcy'
            hasInputText
          />
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col {...colProps}>
          <SelectInput
            name='category'
            label='Kategoria'
            className='custom-select w-100 border-secondary-light rounded'
            placeholder='Wybierz kategorię'
            labelClassName='fw-bold'
            options={transferCategories || []}
          />
        </Col>
      </Row>

      <Row className='mt-2'>
        <Col {...colProps}>
          <hr className='bg-secondary-light'/>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col {...colProps}>
          <TextInput
            name='title'
            label='Tytuł przelewu'
            type='text'
            labelClassName='fw-bold'
            placeholder='Wpisz tytuł przelewu'
          />
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col {...colProps}>
          <CheckboxInput
            name='isCyclicalTransfer'
            label='Przelew cykliczny'
            id='cyclical-transfer-checkbox'
            checked={values.isCyclicalTransfer}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row className='mt-3'>
        <Collapse in={values.isCyclicalTransfer}>
          <Col {...colProps}>
            <DateInput
              label='Data przelewu cyklicznego'
              labelClassName='fw-bold'
              name='transferDate'
              placeholderText='DD.MM.YYYY'
              onChange={(date: Date) => {
                const formattedDate = formatDateWithDayJs(date);
                setFieldValue('transferDate', formattedDate);
              }}
            />
          </Col>
        </Collapse>
      </Row>

      <Row className={`${values.isCyclicalTransfer && 'mt-4'}`}>
        <Col {...colProps}>
          <hr className='bg-secondary-light'/>
        </Col>
      </Row>

      <Row className='mt-3 mb-4'>
        <Col {...colProps}>
          <Button className='rounded-pill fw-bold w-25' type='submit'>
            Dalej
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NewTransferForm;
