import React, {FC, useState} from 'react';
import ModalTemplate from "../../../ModalTemplate";
import {ModalBasicProps} from "../../../../../interfaces/ModalBasicProps";
import EmployeesRecords from "../../../../RecordsComponents/Employee/EmployeesRecords";
import {useFetchRawData} from "../../../../../hooks/useFetchRawData";
import {EmployeeModel} from "../../../../../interfaces/DatabaseModels/EmployeeModel";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";
import axios from "axios";
import {toast} from "react-toastify";

interface BlockEmployeeModalProps extends ModalBasicProps {
}

const BlockEmployeeModal: FC<BlockEmployeeModalProps> = ({setShowModal, showModal}) => {

  const {
    rawData: EmployeesActive,
    isPending: isPendingActive,
    fetchData: fetchActive
  } = useFetchRawData<EmployeeModel[]>(`/employees/active`);
  const {
    rawData: EmployeesInactive,
    isPending: isPendingInactive,
    fetchData: fetchInactive
  } = useFetchRawData<EmployeeModel[]>(`/employees/inactive`);

  const [id, setId] = useState<number>(-1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (id === -1)
      return;

    setIsSubmitting(true);
    try {
      await axios.put(`/employees/${id}`);
      toast.success(`Zmieniono stan konta pracownika pomyślnie!`);
      await fetchInactive();
      await fetchActive();
    } catch (e: any) {
      toast.error(e.message);
    }
    setIsSubmitting(false);
  }

  const handleClick = (employeeId: number | undefined) => {
    if (employeeId)
      if (employeeId === id)
        setId(-1);
      else setId(employeeId);
  }

  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      title={'Blokowanie/Odblokowywanie Pracownika'}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-primary bg-secondary text-primary',
        fullscreen: true
      }}
      headerDiamondClassName='text-primary '
      headerClassName='justify-content-center'
      footerClassName={'justify-content-center'}
      bodyClassName='justify-content-center text-center overflow-scroll'
      isSubmitDisabled={id === -1}
      submitButtonClassName={id === -1 ? 'submit-disabled' : ''}
    >
      <div className='container-fluid w-100 hstack'>

        <div className='vstack w-50'>
          <h2 className='text-dark'>Aktywni Pracownicy</h2>
          <CenteredSpinnerTemplate variant={'dark'} isPending={isPendingActive}/>
          <div className='row align-items-start ms-1 text-dark'>
            <div className='col text-truncate text-center '>
              Pesel
            </div>
            <div className='col text-truncate'>
              Imię i Nazwisko
            </div>
            <div className='col text-truncate'>
              ID. Pracownika
            </div>
            <div className='col text-truncate '>
              Data Urodzenia
            </div>
          </div>
          <EmployeesRecords Employees={EmployeesActive || []} id={id} handleClick={handleClick} className={'rounded-pill mx-3 my-1 bg-secondary-dark'}/>
        </div>

        <div className='vstack w-50'>
          <h2 className='text-primary'>Nieaktywni Pracownicy</h2>
          <CenteredSpinnerTemplate variant={'primary'} isPending={isPendingInactive}/>
          <div className='row align-items-start ms-1'>
            <div className='col text-truncate text-center'>
              Pesel
            </div>
            <div className='col text-truncate'>
              Imię i Nazwisko
            </div>
            <div className='col text-truncate'>
              ID. Pracownika
            </div>
            <div className='col text-truncate '>
              Data Urodzenia
            </div>
          </div>
          <EmployeesRecords
            Employees={EmployeesInactive || []}
            id={id}
            handleClick={handleClick}
            className={'rounded-pill mx-3 my-1 text-light bg-danger'}/>
        </div>

      </div>

    </ModalTemplate>
  );
};

export default BlockEmployeeModal;