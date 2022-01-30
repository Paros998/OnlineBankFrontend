import React, {FC, useState} from 'react';
import {ModalBasicProps} from "../../../../interfaces/ModalBasicProps";
import {useFetchRawData} from "../../../../hooks/useFetchRawData";
import {EmployeeModel} from "../../../../interfaces/DatabaseModels/EmployeeModel";
import CenteredSpinnerTemplate from "../../../CenteredSpinner/CenteredSpinnerTemplate";
import EmployeesRecords from "../../../RecordsComponents/Employee/EmployeesRecords";
import ModalTemplate from "../../ModalTemplate";
import OrdersForEmployee from "../../../RecordsComponents/Employee/ModalComponents/OrdersForEmployee";
import {AppUserModel} from "../../../../interfaces/DatabaseModels/AppUserModel";
import {toast} from "react-toastify";
import axios from "axios";


interface AssignEmployeeToOrderModalProps extends ModalBasicProps{}

const AssignEmployeeToOrderModal:FC<AssignEmployeeToOrderModalProps> = ({setShowModal,showModal}) => {

  const {
    rawData: EmployeesActive,
    isPending: isPendingActive
  } = useFetchRawData<EmployeeModel[]>(`/employees/active`);

  const [id, setId] = useState<number>(-1);
  const [orderID,setOrderID] = useState<number>(-1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {rawData:User,isPending:isPendingRole,fetchData:fetchRole} = useFetchRawData<AppUserModel>(`/users/employee/${id}`);

  const handleClickEmployee = async (employeeId: number | undefined) => {
    if (employeeId)
      if (employeeId === id)
        setId(-1);
      else {
        await fetchRole();
        setId(employeeId);
      }
  }

  const handleSelectOrder = (orderId: number | undefined) => {
    if(orderId)
      if(orderId === orderID)
        setOrderID(-1);
      else setOrderID(orderId);

  }

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try{
      await axios.put(`/orders/${orderID}/assign-employee/${id}`);
      toast.success("Przypisano pracownika do zlecenia poprawnie!");
    }catch (e:any) {
      toast.error(e.message);
    }
    await fetchRole();
    setOrderID(-1);
    setIsSubmitting(false);
  }

  return (
    <ModalTemplate
      setShow={setShowModal}
      show={showModal}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      title={'Przypisywanie Pracownika do Zlecenia'}
      props={{
        size: 'lg',
        centered: true,
        contentClassName: 'border-light bg-dark text-light',
        fullscreen: true
      }}
      headerDiamondClassName='text-light '
      headerClassName='justify-content-center'
      footerClassName={'justify-content-center'}
      bodyClassName='justify-content-center text-center overflow-scroll'
      submitButtonVariant='info'
      submitButtonTitle='Przypisz Zlecenie'
      isSubmitDisabled={(id | orderID) === -1}
      submitButtonClassName={(id | orderID) === -1 ? 'submit-disabled' : ''}
    >
      <div className='container-fluid w-100 hstack'>

        <div className='vstack w-50'>
          <h2 className='text-light'>Aktywni Pracownicy</h2>
          <CenteredSpinnerTemplate variant={'light'} isPending={isPendingActive}/>
          <div className='row align-items-start ms-1 text-light'>
            <div className='col text-truncate text-center '>
              Pesel
            </div>
            <div className='col text-truncate'>
              Imię i Nazwisko
            </div>
            <div className='col text-truncate'>
              ID. Pracownika
            </div>
            <div className='col text-truncate text-end me-4'>
              Data Urodzenia
            </div>
          </div>
            <EmployeesRecords Employees={EmployeesActive || []} id={id} handleClick={handleClickEmployee} className={'rounded-pill mx-3 my-1 bg-secondary-dark'}/>
        </div>

        <div className='vstack w-50'>
          <h2 className='text-info'>Zlecenia dla Wybranego Pracownika</h2>
          <div className='container-fluid w-100 overflow-scroll thumb-info'>
            <div
              className={`row align-items-start ps-3 pe-3 rounded-card-10 text-info w-100 `}>
              <div className='col-1 ms-2 text-truncate'>
                ID Zlecenia
              </div>
              <div className='col ms-2 text-truncate text-center'>
                Typ Zlecenia
              </div>
              <div className='col ms-2 text-truncate text-center'>
                Data
              </div>
              <div className='col ms-2 text-truncate text-center' >
                Czas Oczekiwania(D.H.M.S)
              </div>
            </div>
            {( id !== -1 && !isPendingRole && User ) && <OrdersForEmployee role={User.appUserRole} orderID={orderID} handleClick={handleSelectOrder} />}
          </div>
        </div>

      </div>
    </ModalTemplate>
  );
};

export default AssignEmployeeToOrderModal;