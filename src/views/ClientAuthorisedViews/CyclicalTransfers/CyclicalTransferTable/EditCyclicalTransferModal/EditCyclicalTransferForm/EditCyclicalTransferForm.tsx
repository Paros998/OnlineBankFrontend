import React from 'react';
import moment from 'moment';
import { useFormikContext } from 'formik';
import { useSelectOptions } from '../../../../../../hooks/useSelectOptions';
import { Col, Row } from 'react-bootstrap';
import TextInput from '../../../../../../components/Inputs/TextInput/TextInput';
import NumberFormatTextInput from '../../../../../../components/Inputs/NumberFormatTextInput/NumberFormatTextInput';
import { accountNumberFormat } from '../../../../../../constants/accountNumberFormat';
import SelectInput from '../../../../../../components/Inputs/SelectInput/SelectInput';
import DateInput from '../../../../../../components/Inputs/DateInput/DateInput';
import { EditCyclicalTransferFormikValues } from '../../../../../../interfaces/formik/EditCyclicalTransferFormikValues';

const EditCyclicalTransferForm = () => {
  const { setFieldValue } = useFormikContext<EditCyclicalTransferFormikValues>();
  const transferCategories = useSelectOptions<string>('/rest/transfers/categories');

  return (
    <>
      <Row>
        <Col xs={12}>
          <TextInput
            name="receiver"
            label="Do odbiorcy"
            type="text"
            labelClassName="fw-bold"
            placeholder="Wpisz nazwę odbiorcy"
            maxLength={20}
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12}>
          <NumberFormatTextInput
            name="accountNumber"
            label="Na rachunek"
            type="text"
            labelClassName="fw-bold"
            placeholder="Wpisz numer rachunku odbiorcy"
            format={accountNumberFormat}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <hr className="bg-secondary-light"/>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs={12}>
          <TextInput
            name="amount"
            label="Kwota"
            type="number"
            className="rounded-0 rounded-start float-start"
            labelClassName="fw-bold"
            placeholder="Wpisz numer rachunku odbiorcy"
            hasInputText
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12}>
          <SelectInput
            name="category"
            label="Kategoria"
            className="custom-select w-100 border-secondary-light rounded"
            placeholder="Wybierz kategorię"
            labelClassName="fw-bold"
            options={transferCategories || []}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <hr className="bg-secondary-light"/>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <TextInput
            name="title"
            label="Tytuł przelewu"
            type="text"
            labelClassName="fw-bold"
            placeholder="Wpisz tytuł przelewu"
            maxLength={30}
          />
        </Col>
      </Row>

      <Row className="mt-5 mb-3">
        <Col xs={12}>
          <DateInput
            label='Data przelewu cyklicznego'
            labelClassName="fw-bold"
            name="reTransferDate"
            placeholderText="DD.MM"
            hasIcon
            dateFormat='dd.MM'
            onChange={(date: Date) => {
              const formattedDate = moment(date).toISOString();
              setFieldValue('reTransferDate', formattedDate);
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default EditCyclicalTransferForm;
