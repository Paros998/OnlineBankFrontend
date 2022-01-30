import React, {FC, useState} from 'react';
import {ModalBasicProps} from "../../../../../interfaces/ModalBasicProps";
import {useFetchRawData} from "../../../../../hooks/useFetchRawData";
import axios from "axios";
import {toast} from "react-toastify";
import ModalTemplate from "../../../ModalTemplate";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";
import {EmployeeModel} from "../../../../../interfaces/DatabaseModels/EmployeeModel";
import EmployeesRecords from "../../../../RecordsComponents/Employee/EmployeesRecords";

interface DeleteEmployeeModalProps extends ModalBasicProps{

}

const DeleteEmployeeModal:FC<DeleteEmployeeModalProps> = ({setShowModal,showModal}) => {
  const {rawData: Employees, isPending, fetchData} = useFetchRawData<EmployeeModel[]>(`/dictionary/employees`);

  const [id, setId] = useState<number>(-1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showDangerModal, setShowDangerModal] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (id === -1)
      return;

    setIsSubmitting(true);
    try {
      await axios.delete(`/employees/${id}`);
      toast.success(`Usunięto konto pracownika pomyślnie!`);
      await fetchData();
    } catch (e: any) {
      toast.error(e.message);
    }
    setShowDangerModal(false);
    setIsSubmitting(false);
  }

  const handleClick = (employeeId: number | undefined) => {
    if (employeeId)
      if (employeeId === id)
        setId(-1);
      else
        setId(employeeId);
  }

  return (
    <>
      <ModalTemplate
        setShow={setShowDangerModal}
        show={showDangerModal}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        title={'Usuwanie Pracownika'}
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-dark bg-primary-dark text-secondary-light rounded-card-10',
        }}
        headerDiamondClassName='text-secondary-light '
        headerClassName='justify-content-center'
        footerClassName={'justify-content-center'}
        bodyClassName='justify-content-center text-center'
        submitButtonVariant='dark'
        closeButtonTitle='Anuluj'
      >
        <p className='fs-2'>
          Uwaga ta akcja jest nieodwracalna!!!
        </p>
        <p className='fs-3'>
          Czy na pewno chcesz usunąć tego pracownika?
        </p>
      </ModalTemplate>

      <ModalTemplate
        setShow={setShowModal}
        show={showModal}
        handleSubmit={() => {
          if(id !== -1)
            setShowDangerModal(true);
        }}
        title={'Usuwanie Pracownika'}
        props={{
          size: 'lg',
          centered: true,
          contentClassName: 'border-light bg-danger text-light ',
          fullscreen: true
        }}
        headerDiamondClassName='text-light '
        headerClassName='justify-content-center'
        footerClassName={'justify-content-center'}
        bodyClassName='justify-content-center text-center overflow-scroll '
        isSubmitDisabled={id === -1}
        submitButtonClassName={id === -1 ? 'submit-disabled' : ''}
        submitButtonTitle='Usuń'
      >
        <div className='container-fluid w-100 hstack'>

          <div className='vstack w-70'>
            <CenteredSpinnerTemplate variant={'light'} isPending={isPending}/>

            <div className='row align-items-start ms-1 text-dark'>
              <div className='col text-truncate'>
                Pesel
              </div>
              <div className='col text-truncate'>
                Imię i Nazwisko
              </div>
              <div className='col text-truncate'>
                Numer Konta
              </div>
              <div className='col text-truncate'>
                Data Urodzenia
              </div>
            </div>
            <EmployeesRecords Employees={Employees || []} handleClick={handleClick} id={id}
                            className={'rounded-pill mx-3 my-1 text-light bg-dark'}/>
          </div>
        </div>
      </ModalTemplate>
    </>
  );
};

export default DeleteEmployeeModal;