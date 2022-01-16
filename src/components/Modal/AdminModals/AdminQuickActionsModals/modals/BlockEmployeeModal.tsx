import React, {Dispatch, FC} from 'react';
import ModalTemplate from "../../../ModalTemplate";
import {ModalBasicProps} from "../../../../../interfaces/ModalBasicProps";
import EmployeesRecords from "../../../../RecordsComponents/Employee/EmployeesRecords";
import {useFetchRawData} from "../../../../../hooks/useFetchRawData";
import {EmployeeModel} from "../../../../../interfaces/DatabaseModels/EmployeeModel";
import CenteredSpinnerTemplate from "../../../../CenteredSpinner/CenteredSpinnerTemplate";

interface BlockEmployeeModalProps extends ModalBasicProps {
  setId:Dispatch<React.SetStateAction<number>>;
  id:number;
}

const BlockEmployeeModal:FC<BlockEmployeeModalProps> = ({setShowModal,showModal,setId,handleSubmit,isSubmitting,id}) => {

  const {rawData:Employees,isPending} = useFetchRawData<EmployeeModel[]>(`/dictionary/employees`);

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
        fullscreen:true
      }}
      headerDiamondClassName='text-primary '
      headerClassName='justify-content-center'
      footerClassName={'justify-content-center'}
      bodyClassName='justify-content-center text-center overflow-scroll'
      isSubmitDisabled={id === -1}
      submitButtonClassName={id === -1 ? 'submit-disabled' : ''}
    >
      <div className='container-fluid w-100 '>
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
          <div className='col text-truncate text-end'>
            Data Urodzenia
          </div>
        </div>
      </div>
      <CenteredSpinnerTemplate variant={'primary'} isPending={isPending}/>
      <EmployeesRecords Employees={Employees || []}/>
    </ModalTemplate>
  );
};

export default BlockEmployeeModal;