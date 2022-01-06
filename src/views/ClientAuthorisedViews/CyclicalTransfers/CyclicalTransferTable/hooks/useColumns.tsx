import React, { useCallback, useMemo } from 'react';
import { CyclicalTransferDisplayModel } from '../../../../../interfaces/CyclicalTransferDisplayModel';
import { Button } from 'react-bootstrap';
import { getPreviousCyclicalTransferData } from '../utils/getPreviousCyclicalTransferData';
import { defaultColumnStyle } from '../../../../../constants/defaultColumnStyle';
import { TransferModel } from '../../../../../interfaces/DatabaseModels/TransferModel';
import { getDefaultRowStyle } from '../../../../../utils/getDefaultRowStyle';
import { transferCategoryClassNames } from '../../../../../constants/transferCategoryClassNames';
import { CyclicalTransferModel } from '../../../../../interfaces/DatabaseModels/CyclicalTransferModel';

interface ModalTogglers {
  toggleEditModalVisibility: (cyclicalTransfer: CyclicalTransferModel) => void;
  toggleDeleteModalVisibility: (cyclicalTransfer: CyclicalTransferModel) => void;
}

export const useColumns = ({ toggleDeleteModalVisibility, toggleEditModalVisibility }: ModalTogglers) => {
  const editButton = useCallback((cell: any, row: CyclicalTransferDisplayModel) => (
    <Button
      variant="info"
      className="text-white w-100"
      onClick={() => {
        const editCyclicalTransferData = getPreviousCyclicalTransferData(row);
        toggleEditModalVisibility(editCyclicalTransferData);
      }}
    >
      Edytuj
    </Button>
  ), [toggleEditModalVisibility]);

  const deleteButton = useCallback((cell: any, row: CyclicalTransferDisplayModel) => (
    <Button
      variant="danger"
      className="text-white w-100"
      onClick={() => {
        const deleteCyclicalTransferData = getPreviousCyclicalTransferData(row);
        toggleDeleteModalVisibility(deleteCyclicalTransferData);
      }}
    >
      Usuń
    </Button>
  ), [toggleDeleteModalVisibility]);

  return useMemo(() => [
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
  ], [deleteButton, editButton]);
};
