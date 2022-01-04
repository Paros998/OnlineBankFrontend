import React, { FC } from 'react';
import BootstrapTable, { BootstrapTableProps } from "react-bootstrap-table-next";
import { transferCategoryClassNames } from "../../../../constants/transferCategoryClassNames";
import { getDefaultRowStyle } from "../../../../utils/getDefaultRowStyle";
import { defaultColumnStyle } from "../../../../constants/defaultColumnStyle";
import { TransferDisplayModel } from '../../../../interfaces/TransferDisplayModel';

interface HistoryTableProps {
  tableProps: BootstrapTableProps<TransferDisplayModel>;
}

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
    classes: (cell: any, row: TransferDisplayModel, rowIndex: number) => {
      return `${getDefaultRowStyle(rowIndex)} ${transferCategoryClassNames[cell]}`;
    },
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
  },
];

const HistoryTable: FC<HistoryTableProps> = ({ tableProps }) => {
  return (
    <BootstrapTable
      {...tableProps}
      columns={columns}
    />
  );
};

export default HistoryTable;
