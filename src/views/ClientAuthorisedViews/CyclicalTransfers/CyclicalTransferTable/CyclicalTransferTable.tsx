import React, { FC, useCallback, useMemo } from 'react';
import axios from 'axios';
import BootstrapTable, { BootstrapTableProps } from 'react-bootstrap-table-next';
import { TransferModel } from '../../../../interfaces/DatabaseModels/TransferModel';
import { defaultColumnStyle } from '../../../../constants/defaultColumnStyle';
import { getDefaultRowStyle } from '../../../../utils/getDefaultRowStyle';
import { transferCategoryClassNames } from '../../../../constants/transferCategoryClassNames';
import { Button } from 'react-bootstrap';
import { CyclicalTransferModel } from '../../../../interfaces/DatabaseModels/CyclicalTransferModel';
import { useModalState } from '../../../../hooks/useModalState';
import EditCyclicalTransferModal from './EditCyclicalTransferModal/EditCyclicalTransferModal';
import { useCurrentUser } from '../../../../contexts/CurrentUserContext';
import { ClientModel } from '../../../../interfaces/DatabaseModels/ClientModel';
import { getFormattedAmount } from './utils/getFormattedAmount';
import { getFormattedReTransferDate } from './utils/getFormattedReTransferDate';
import moment from 'moment';
import ConfirmationModal from '../../../../components/Modal/ConfirmationModal/ConfirmationModal';

interface CyclicalTransferTableProps {
  tableProps: BootstrapTableProps<CyclicalTransferModel>;
}

const CyclicalTransferTable: FC<CyclicalTransferTableProps> = ({ tableProps }) => {
  const { currentUser } = useCurrentUser<ClientModel>();

  const {
    toggleVisibility: toggleEditModalVisibility,
    showModal: showEditModal,
    entity: selectedCyclicalTransferToEdit,
  } = useModalState<CyclicalTransferModel>();

  const {
    toggleVisibility: toggleDeleteModalVisibility,
    showModal: showDeleteModal,
    entity: selectedCyclicalTransferToDelete,
  } = useModalState<CyclicalTransferModel>();

  const editButton = useCallback((cell: any, row: CyclicalTransferModel) => (
    <Button
      variant="info"
      className="text-white w-100"
      onClick={() => toggleEditModalVisibility(row)}
    >
      Edytuj
    </Button>
  ), [toggleEditModalVisibility]);

  const deleteButton = useCallback((cell: any, row: CyclicalTransferModel) => (
    <Button
      variant="danger"
      className="text-white w-100"
      onClick={() => toggleDeleteModalVisibility(row)}
    >
      Usuń
    </Button>
  ), [toggleDeleteModalVisibility]);

  const handleDeleteCyclicalTransfer = useCallback(async() => {
    if (!selectedCyclicalTransferToDelete) return;

    const deleteValues = {
      ...selectedCyclicalTransferToDelete,
      amount: getFormattedAmount(selectedCyclicalTransferToDelete.amount),
      reTransferDate: moment(
        getFormattedReTransferDate(selectedCyclicalTransferToDelete.reTransferDate)
      ).toISOString(),
      client: currentUser || {} as ClientModel,
    };

    try {
      console.log(deleteValues);
      // await axios.delete(`/cyclical-transfer/client/${currentUser?.clientId}`);
    } catch (e) {
      console.error(e);
    }
  }, [currentUser, selectedCyclicalTransferToDelete]);

  const columns = useMemo(() => [
    {
      ...defaultColumnStyle,
      dataField: 'reTransferDate',
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
      dataField: 'amount',
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
  ], [editButton, deleteButton]);

  return (
    <>
      <BootstrapTable
        {...tableProps}
        columns={columns}
      />

      <ConfirmationModal
        showModal={showDeleteModal}
        toggleVisibility={toggleDeleteModalVisibility}
        onConfirm={handleDeleteCyclicalTransfer}
        header={`Usunięcie przelewu cyklicznego: ${selectedCyclicalTransferToDelete?.title}`}
      >
        <h5 className='text-center'>Czy na pewno chcesz usunąć ten przelew cykliczny?</h5>
      </ConfirmationModal>

      <EditCyclicalTransferModal
        showModal={showEditModal}
        toggleVisibility={toggleEditModalVisibility}
        selectedCyclicalTransfer={selectedCyclicalTransferToEdit || {} as CyclicalTransferModel}
      />
    </>
  );
};

export default CyclicalTransferTable;
