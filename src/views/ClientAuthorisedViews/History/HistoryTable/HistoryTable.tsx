import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { defaultColumnStyle } from "../../../../constants/defaultColumnStyle";
import { TransferDisplayModel } from '../../../../interfaces/TransferDisplayModel';
import { useModalState } from '../../../../hooks/useModalState';
import { useTableProps } from '../../../../hooks/useTableProps';
import { useHistory } from '../../../../contexts/HistoryContext';
import TransferDetailsModal from '../../../../components/Modal/TransferDetailsModal/TransferDetailsModal';
import { getAmountCellStyle } from '../../../../utils/getAmountCellStyle';
import { getCategoryCellStyle } from '../../../../utils/getCategoryCellStyle';

const columns = [
  {
    ...defaultColumnStyle,
    dataField: 'displayTransferDate',
    text: 'Data',
    sort: true,
  },
  {
    ...defaultColumnStyle,
    dataField: 'category',
    text: 'Kategoria',
    classes: getCategoryCellStyle,
  },
  {
    ...defaultColumnStyle,
    dataField: 'receiver_sender',
    text: 'Odbiorca / Nadawca',
  },
  {
    ...defaultColumnStyle,
    dataField: 'displayAmount',
    text: 'Kwota',
    classes: getAmountCellStyle,
  },
];

const HistoryTable = () => {
  const { transfers } = useHistory();
  const { data, isPending } = transfers;

  const {
    toggleVisibility,
    showModal,
    entity,
  } = useModalState<TransferDisplayModel>();

  const tableProps = useTableProps<TransferDisplayModel>(
    { data, isPending },
    'transferId',
    { initialSortBy: 'displayTransferDate' },
    (e: any, row: TransferDisplayModel) => toggleVisibility(row),
  );

  return (
    <>
      <BootstrapTable
        {...tableProps}
        columns={columns}
      />

      <TransferDetailsModal
        showModal={showModal}
        toggleVisibility={toggleVisibility}
        data={entity || {} as TransferDisplayModel}
      />
    </>
  );
};

export default HistoryTable;
