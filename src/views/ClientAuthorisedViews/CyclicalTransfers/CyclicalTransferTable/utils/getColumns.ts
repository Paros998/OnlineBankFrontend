import { defaultColumnStyle } from '../../../../../constants/defaultColumnStyle';
import { TransferModel } from '../../../../../interfaces/DatabaseModels/TransferModel';
import { getDefaultRowStyle } from '../../../../../utils/getDefaultRowStyle';
import { transferCategoryClassNames } from '../../../../../constants/transferCategoryClassNames';
import { ColumnDescription } from 'react-bootstrap-table-next';
import { CyclicalTransferDisplayModel } from '../../../../../interfaces/CyclicalTransferDisplayModel';

export const getColumns = (
  deleteButton: (cell: string, row: CyclicalTransferDisplayModel) => JSX.Element,
  editButton: (cell: string, row: CyclicalTransferDisplayModel) => JSX.Element
): ColumnDescription<CyclicalTransferDisplayModel>[] => [
  {
    ...defaultColumnStyle,
    dataField: 'displayReTransferDate',
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
    dataField: 'receiver',
    text: 'Odbiorca',
  },
  {
    ...defaultColumnStyle,
    dataField: 'displayAmount',
    text: 'Kwota',
  },
  {
    ...defaultColumnStyle,
    dataField: 'editButton',
    formatter: editButton,
    text: 'Edytuj',
  },
  {
    ...defaultColumnStyle,
    dataField: 'deleteButton',
    formatter: deleteButton,
    text: 'Usuń',
  },
];
