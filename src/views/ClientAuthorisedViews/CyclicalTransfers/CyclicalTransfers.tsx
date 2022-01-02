import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientCardLayout from '../../../components/ClientCardLayout/ClientCardLayout';
import { LocationHeaders } from '../../../enums/LocationHeaders';
import Advertisements from '../../../components/Advertisements/Advertisements';
import CyclicalTransferTable from './CyclicalTransferTable/CyclicalTransferTable';
import CyclicalEstimatedPayments from './CyclicalEstimatedPayments/CyclicalEstimatedPayments';
import { useTableProps } from '../../../hooks/useTableProps';
import { useCyclicalTransfers } from './hooks/useCyclicalTransfers';
import { CyclicalTransferSearchFormikValues } from '../../../interfaces/formik/CyclicalTransferSearchFormikValues';
import { CyclicalTransferModel } from '../../../interfaces/DatabaseModels/CyclicalTransferModel';
import CyclicalTransferSearchForm from './CyclicalTransferSearchForm/CyclicalTransferSearchForm';

const CyclicalTransfers = () => {
  const [cyclicalTransferParams, setCyclicalTransferParams] = useState<CyclicalTransferSearchFormikValues>(
    {} as CyclicalTransferSearchFormikValues
  );

  const { formattedCyclicalTransfers: cyclicalTransfers, isPending } = useCyclicalTransfers(cyclicalTransferParams);
  const tableProps = useTableProps<CyclicalTransferModel>(
    { data: cyclicalTransfers || [], isPending: isPending },
    'transferId',
    { initialSortBy: 'reTransferDate' },
  );

  return (
    <Row>
      <Col xs={8}>
        <ClientCardLayout location={LocationHeaders.CyclicalTransfers} style={{ height: '54rem' }}>
          <CyclicalTransferSearchForm setCyclicalTransferParams={setCyclicalTransferParams} />

          <CyclicalTransferTable tableProps={tableProps}/>
        </ClientCardLayout>
      </Col>

      <Col xs={4} className='mt-5'>
        <Advertisements wrapperClassName='mt-2' />

        <CyclicalEstimatedPayments />
      </Col>
    </Row>
  );
};

export default CyclicalTransfers;
