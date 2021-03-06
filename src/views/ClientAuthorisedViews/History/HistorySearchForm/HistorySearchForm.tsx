import React from 'react';
import { Form, Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import SelectInput from "../../../../components/Inputs/SelectInput/SelectInput";
import { useSelectOptions } from "../../../../hooks/useSelectOptions";
import DateRangePicker from "../../../../components/DateRangePicker/DateRangePicker";
import { HistorySearchFormikValues } from "../../../../interfaces/formik/HistorySearchFormikValues";
import { searchFormSelectClassName } from '../../../../constants/searchFormSelectClassName';
import { useHistory } from '../../../../contexts/HistoryContext';

const initialFormikValues: HistorySearchFormikValues = {
  transferCategory: '',
  dateFrom: '',
  dateTo: '',
  transferType: '',
};

const HistorySearchForm = () => {
  const transferCategories = useSelectOptions<string>('/rest/transfers/categories');

  const { transfers: { fetchData } } = useHistory();

  const handleSubmit = async (values: HistorySearchFormikValues) => await fetchData(values);

  return (
    <Formik<HistorySearchFormikValues>
      initialValues={initialFormikValues}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, handleSubmit, values: { dateTo, dateFrom } }) => (
        <Form noValidate className='mb-5'>
          <h5 className='text-center fw-bold'>Filtrowanie</h5>

          <Row>
            <Col xs={4} className='mt-4'>
              <DateRangePicker
                dateFromName='dateFrom'
                dateToName='dateTo'
                values={{ dateTo, dateFrom }}
              />
            </Col>

            <Col xs={4}>
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

            <Col xs={4}>
              <SelectInput
                name='transferType'
                options={[{ key: 'Wydatki', value: 'OUTGOING' }, { key: 'Przychody', value: 'INCOMING' }]}
                placeholder='Wybierz typ przelewu'
                className={searchFormSelectClassName}
                onChange={(e) => {
                  setFieldValue('transferType', e.target.value);
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

export default HistorySearchForm;
