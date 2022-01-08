import React from 'react';
import { Form } from 'formik';
import { Col, ColProps, Row } from 'react-bootstrap';
import FormBlob from '../../../../../components/FormBlob/FormBlob';
import TextInput from '../../../../../components/Inputs/TextInput/TextInput';
import SubmitButton from '../../../../../components/SubmitButton/SubmitButton';
import { useLoan } from '../../../../../contexts/LoanContext';

const colProps: ColProps = {
  xs: 6,
  className: 'z-1000',
};

const NewLoanForm = () => {
  const { currentLoan } = useLoan();
  return (
    <Form className='position-relative mt-4 h-100' noValidate>
      <FormBlob style={{ zIndex: 1, height: '96%' }}/>

      <Row>
        <Col {...colProps}>
          <TextInput
            name='initialRatesNumber'
            label='Liczba rat'
            type='number'
            className='rounded-0 rounded-start float-start'
            labelClassName='fw-bold'
            placeholder='Wpisz liczbę rat'
            disabled={currentLoan.isActive}
          />
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col {...colProps}>
          <TextInput
            name='basicLoanAmount'
            label='Podstawowa kwota pożyczki'
            type='number'
            className='rounded-0 rounded-start float-start'
            labelClassName='fw-bold'
            placeholder='Wpisz podstawową kwotę pożyczki'
            hasInputText
            disabled={currentLoan.isActive}
          />
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col {...colProps}>
          <hr className='bg-secondary-light'/>
        </Col>
      </Row>

      <Row className='mt-3 text-end'>
        <Col {...colProps}>
          <SubmitButton
            className='ms-4 rounded-pill fw-bold w-25 text-white'
            isManualDisabled={currentLoan.isActive}
          >
            Dalej
          </SubmitButton>
        </Col>
      </Row>
    </Form>
  );
};

export default NewLoanForm;
