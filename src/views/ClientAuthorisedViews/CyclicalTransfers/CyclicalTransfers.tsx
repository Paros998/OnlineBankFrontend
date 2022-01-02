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
import CyclicalTransferSearchForm from './CyclicalTransferSearchForm/CyclicalTransferSearchForm';
import { CyclicalTransferDisplayModel } from '../../../interfaces/formik/CyclicalTransferDisplayModel';

const CyclicalTransfers = () => {
  const [
    cyclicalTransferParams,
    setCyclicalTransferParams
  ] = useState<CyclicalTransferSearchFormikValues>(
    {} as CyclicalTransferSearchFormikValues
  );

  const {
    formattedCyclicalTransfers: cyclicalTransfers,
    isPending,
    fetchCyclicalTransfers
  } = useCyclicalTransfers(cyclicalTransferParams);

  const tableProps = useTableProps<CyclicalTransferDisplayModel>(
    { data: cyclicalTransfers || [], isPending: isPending },
    'transferId',
    { initialSortBy: 'displayReTransferDate' },
  );

  return (
    <Row>
      <Col xs={8}>
        <ClientCardLayout location={LocationHeaders.CyclicalTransfers} style={{ height: '54rem' }}>
          <CyclicalTransferSearchForm setCyclicalTransferParams={setCyclicalTransferParams} />

          <CyclicalTransferTable fetchCyclicalTransfer={fetchCyclicalTransfers} tableProps={tableProps}/>
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
