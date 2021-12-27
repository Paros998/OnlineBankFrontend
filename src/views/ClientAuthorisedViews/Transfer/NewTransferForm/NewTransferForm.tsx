import React, { useState } from 'react';
import moment from "moment";
import { Form, useFormikContext } from "formik";
import { Col, Collapse, ColProps, Row } from "react-bootstrap";
import TextInput from "../../../../components/Inputs/TextInput/TextInput";
import SelectInput from "../../../../components/Inputs/SelectInput/SelectInput";
import CheckboxInput from "../../../../components/Inputs/CheckboxInput/CheckboxInput";
import { TransferFormikValues } from "../../../../interfaces/formik/TransferFormikValues";
import DateInput from "../../../../components/Inputs/DateInput/DateInput";
import FormBlob from "../../../../components/FormBlob/FormBlob";
import { useSelectOptions } from "../../../../hooks/useSelectOptions";
import ActionButtons from "./ActionButtons/ActionButtons";
import NumberFormatTextInput from "../../../../components/Inputs/NumberFormatTextInput/NumberFormatTextInput";
import { AccountNumberFormat } from "../../../../constants/AccountNumberFormat";

const colProps: ColProps = {
  xs: 4,
  className: 'z-1000',
};

const NewTransferForm = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<TransferFormikValues>();
  const transferCategories = useSelectOptions<string>('/rest/transfers/categories');
  const [isReadonly, setIsReadonly] = useState(false);

  return (
    <Form className='position-relative mt-4' noValidate>
      <FormBlob style={{ zIndex: 1 }}/>

      <Row>
        <Col {...colProps}>
          <TextInput
            name='receiver_sender'
            label='Do odbiorcy'
            type='text'
            labelClassName='fw-bold'
            placeholder='Wpisz nazwę odbiorcy'
            readOnly={isReadonly}
            maxLength={20}
          />
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col {...colProps}>
          <NumberFormatTextInput
            name='toAccountNumber'
            label='Na rachunek'
            type='text'
            labelClassName='fw-bold'
            placeholder='Wpisz numer rachunku odbiorcy'
            format={AccountNumberFormat}
            readonly={isReadonly}
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
            className='rounded-0 rounded-start float-start'
            labelClassName='fw-bold'
            placeholder='Wpisz numer rachunku odbiorcy'
            hasInputText
            readOnly={isReadonly}
            readonlyAdditionalValueContent='PLN'
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
            readonly={isReadonly}
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
            readOnly={isReadonly}
            maxLength={30}
          />
        </Col>
      </Row>

      {
        !isReadonly && (
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
        )
      }

      <Row className='mt-3'>
        <Collapse in={values.isCyclicalTransfer || isReadonly}>
          <Col {...colProps}>
            <DateInput
              label={values.isCyclicalTransfer ? 'Data przelewu cyklicznego' : 'Data przelewu'}
              labelClassName='fw-bold'
              name='transferDate'
              placeholderText='DD.MM.YYYY'
              readOnly={isReadonly}
              onChange={(date: Date) => {
                const formattedDate = moment(date).format('DD.MM.YYYY');
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

      <Row className='mt-3 mb-4 text-end'>
        <Col {...colProps}>
          <ActionButtons readonly={isReadonly} setReadonly={setIsReadonly} />
        </Col>
      </Row>
    </Form>
  );
};

export default NewTransferForm;
