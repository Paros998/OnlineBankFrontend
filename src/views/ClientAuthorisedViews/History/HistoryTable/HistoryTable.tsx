import React, { FC } from 'react';
import BootstrapTable, { BootstrapTableProps } from "react-bootstrap-table-next";
import { TransferModel } from "../../../../interfaces/DatabaseModels/TransferModel";
import { transferCategoryClassNames } from "../../../../constants/transferCategoryClassNames";
import { getDefaultRowStyle } from "../../../../utils/getDefaultRowStyle";
import { defaultColumnStyle } from "../../../../constants/defaultColumnStyle";

interface HistoryTableProps {
  tableProps: BootstrapTableProps<TransferModel>;
}

const columns = [
  {
    ...defaultColumnStyle,
    dataField: 'transferDate',
    text: 'Data',
    sort: true,
  },
  {
    ...defaultColumnStyle,
    dataField: 'category',
    text: 'Kategoria',
    classes: (cell: any, row: TransferModel, rowIndex: number) => {
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
    dataField: 'amount',
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
