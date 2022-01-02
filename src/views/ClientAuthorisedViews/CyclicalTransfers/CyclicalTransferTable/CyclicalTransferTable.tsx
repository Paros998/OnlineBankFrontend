import React, { FC, useCallback, useMemo, useState } from 'react';
import axios from 'axios';
import BootstrapTable, { BootstrapTableProps } from 'react-bootstrap-table-next';
import { Button } from 'react-bootstrap';
import { CyclicalTransferModel } from '../../../../interfaces/DatabaseModels/CyclicalTransferModel';
import { useModalState } from '../../../../hooks/useModalState';
import EditCyclicalTransferModal from './EditCyclicalTransferModal/EditCyclicalTransferModal';
import ConfirmationModal from '../../../../components/Modal/ConfirmationModal/ConfirmationModal';
import { CyclicalTransferDisplayModel } from '../../../../interfaces/CyclicalTransferDisplayModel';
import { getPreviousCyclicalTransferData } from './utils/getPreviousCyclicalTransferData';
import { toast } from 'react-toastify';
import { getColumns } from './utils/getColumns';

interface CyclicalTransferTableProps {
  tableProps: BootstrapTableProps<CyclicalTransferDisplayModel>;
  fetchCyclicalTransfer: () => Promise<void>;
}

const CyclicalTransferTable: FC<CyclicalTransferTableProps> = ({ tableProps, fetchCyclicalTransfer }) => {
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

  const [isRequestPending, setIsRequestPending] = useState(false);

  const handleDeleteCyclicalTransfer = useCallback(async() => {
    if (!selectedCyclicalTransferToDelete) return;

    setIsRequestPending(true);

    const currentCyclicalTransferId = selectedCyclicalTransferToDelete.transferId;

    try {
      await axios.delete(`/cyclical-transfers/${currentCyclicalTransferId}`);

      await fetchCyclicalTransfer();
      toast.success('Przelew cykliczny został usunięty pomyślnie.');
    } catch {
      toast.error('Usunięcie przelewu cyklicznego nie powiodło się');
    } finally {
      setIsRequestPending(false);
      toggleDeleteModalVisibility();
    }
  }, [selectedCyclicalTransferToDelete]);

  const columns = useMemo(() => {
    return getColumns(deleteButton, editButton);
  },[deleteButton, editButton]);

  return (
    <>
      <BootstrapTable
        {...tableProps}
        columns={columns}
      />

      <ConfirmationModal
        showModal={showDeleteModal}
        toggleVisibility={toggleDeleteModalVisibility}
        isRequestPending={isRequestPending}
        onConfirm={handleDeleteCyclicalTransfer}
        header={`Usunięcie przelewu cyklicznego: ${selectedCyclicalTransferToDelete?.title}`}
      >
        <h5 className='text-center'>Czy na pewno chcesz usunąć ten przelew cykliczny?</h5>
      </ConfirmationModal>

      <EditCyclicalTransferModal
        showModal={showEditModal}
        toggleVisibility={toggleEditModalVisibility}
        fetchCyclicalTransfers={fetchCyclicalTransfer}
        selectedCyclicalTransfer={selectedCyclicalTransferToEdit || {} as CyclicalTransferModel}
      />
    </>
  );
};

export default CyclicalTransferTable;
