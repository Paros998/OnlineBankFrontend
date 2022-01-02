import React, { Dispatch, FC, SetStateAction } from 'react';
import { HistorySearchFormikValues } from '../../../../interfaces/formik/HistorySearchFormikValues';
import { Form, Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import DateRangePicker from '../../../../components/DateRangePicker/DateRangePicker';
import SelectInput from '../../../../components/Inputs/SelectInput/SelectInput';
import { searchFormSelectClassName } from '../../../../constants/searchFormSelectClassName';
import { CyclicalTransferSearchFormikValues } from '../../../../interfaces/formik/CyclicalTransferSearchFormikValues';
import { useSelectOptions } from '../../../../hooks/useSelectOptions';

interface CyclicalTransferSearchFormProps {
  setCyclicalTransferParams: Dispatch<SetStateAction<CyclicalTransferSearchFormikValues>>;
}

const initialFormikValues: CyclicalTransferSearchFormikValues = {
  transferCategory: '',
  dateFrom: '',
  dateTo: '',
};

const CyclicalTransferSearchForm: FC<CyclicalTransferSearchFormProps> = ({ setCyclicalTransferParams }) => {
  const transferCategories = useSelectOptions<string>('/rest/transfers/categories');

  return (
    <Formik<CyclicalTransferSearchFormikValues>
      initialValues={initialFormikValues}
      onSubmit={(values: CyclicalTransferSearchFormikValues) => setCyclicalTransferParams(values)}
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
