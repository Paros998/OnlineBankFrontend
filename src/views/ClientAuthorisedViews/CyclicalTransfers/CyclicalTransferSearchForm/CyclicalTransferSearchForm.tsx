import React from 'react';
import { Form, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import DateRangePicker from '../../../../components/DateRangePicker/DateRangePicker';
import SelectInput from '../../../../components/Inputs/SelectInput/SelectInput';
import { searchFormSelectClassName } from '../../../../constants/searchFormSelectClassName';
import { CyclicalTransferSearchFormikValues } from '../../../../interfaces/formik/CyclicalTransferSearchFormikValues';
import { useSelectOptions } from '../../../../hooks/useSelectOptions';
import { useCyclicalTransfers } from '../../../../contexts/CyclicalTransferContext';

const initialFormikValues: CyclicalTransferSearchFormikValues = {
  transferCategory: '',
  dateFrom: '',
  dateTo: '',
};

const CyclicalTransferSearchForm = () => {
  const transferCategories = useSelectOptions<string>('/rest/transfers/categories');

  const { cyclicalTransfers } = useCyclicalTransfers();

  const handleSubmit = async (values: CyclicalTransferSearchFormikValues) => {
    await cyclicalTransfers.fetchData(values);
  };

  return (
    <Formik<CyclicalTransferSearchFormikValues>
      initialValues={initialFormikValues}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, handleSubmit, values: { dateTo, dateFrom } }) => (
        <Form noValidate className='mb-5'>
          <h5 className='text-center fw-bold'>Filtorwanie</h5>

          <Row>
            <Col xs={6} className='mt-4'>
              <DateRangePicker
                dateFromName='dateFrom'
                dateToName='dateTo'
                values={{ dateTo, dateFrom }}
              />
            </Col>

            <Col xs={6}>
              <SelectInput
                name='transferCategory'
                options={transferCategories || []}
                placeholder='Wybierz kategorię przelewu'
                className={searchFormSelectClassName}
                onChange={(e) => {
                  setFieldValue('transferCategory', e.target.value);
                  handleSubmit();
                }}
              />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default CyclicalTransferSearchForm;
