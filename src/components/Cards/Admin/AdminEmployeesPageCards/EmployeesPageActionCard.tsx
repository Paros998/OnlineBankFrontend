import React, {Dispatch, FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {Button} from "react-bootstrap";
import {PencilSquare, PersonDash, PersonPlus, PersonX} from "react-bootstrap-icons";
import {AdminActionsModalTypes} from "../../../../enums/AdminActionsModalTypes";

interface EmployeesPageActionCardProps {
  className?: string;
  setShowModal:Dispatch<React.SetStateAction<boolean>>;
  setModalType:Dispatch<React.SetStateAction<AdminActionsModalTypes>>;
}

const EmployeesPageActionCard: FC<EmployeesPageActionCardProps> = ({className,setModalType,setShowModal}) => {
  return (
    <CardTemplate header={'Szybkie akcje'}
                  className={`text-light fst-normal bg-secondary-dark border-light bg-opacity-75 ${className}`}
                  headerClassName='text-light'
                  bodyClassName='thumb-light'
                  headerDiamondClassName='text-light'
    >
      <div className='container-fluid w-100 '>
        <div className='vstack align-items-center'>
          <Button
            variant={'info'}
            className='w-100 mb-2 rounded-pill fw-bold row align-items-start text-light'
            onClick={()=>{
              setShowModal(true);
              setModalType(AdminActionsModalTypes.NEW_EMPLOYEE);
            }}
          >
            <span className='col'>
              <PencilSquare className='my-auto' size={24}/>
            </span>
            <span className='col text-end'>
              Stwórz nowego pracownika
            </span>
          </Button>

          <Button
            variant={'primary'}
            className='w-100 mb-2 rounded-pill fw-bold row align-items-start'
            onClick={()=>{
              setShowModal(true);
              setModalType(AdminActionsModalTypes.BLOCK_EMPLOYEE);
            }}
          >
            <span className='col '>
              <PersonDash size={30} className='my-auto me-2'/>
            </span>
            <span className='col text-end'>
              Zablokuj/Odblokuj konto pracownika
            </span>
          </Button>

          <Button
            variant={'primary'}
            className='w-100 mb-2 rounded-pill fw-bold row align-items-start'
            onClick={()=>{
              setShowModal(true);
              setModalType(AdminActionsModalTypes.BLOCK_CLIENT);
            }}
          >
            <span className='col'>
              <PersonDash size={30} className='my-auto me-2'/>
            </span>
            <span className='col text-end'>
              Zablokuj/Odblokuj konto klienta
            </span>
          </Button>

          <Button
            variant={'dark'}
            className='w-100 mb-2 rounded-pill fw-bold row align-items-start'
            onClick={()=>{
              setShowModal(true);
              setModalType(AdminActionsModalTypes.ASSIGN_EMPLOYEE);
            }}
          >
            <span className='col'>
              <PersonPlus size={30} className='col'/>
            </span>
            <span className='col text-end'>
              Przypisz zlecenie pracownikowi
            </span>
          </Button>

          <Button
            variant={'danger'}
            className='w-100 mb-2 rounded-pill fw-bold row align-items-start text-light'
            onClick={()=>{
              setShowModal(true);
              setModalType(AdminActionsModalTypes.DELETE_EMPLOYEE);
            }}
          >
            <span className='col'>
              <PersonX size={30} className='my-auto me-2'/>
            </span>
            <span className='col text-end'>
              Usuń konto pracownika
            </span>
          </Button>

          <Button
            variant={'danger'}
            className='w-100 mb-2 rounded-pill fw-bold row align-items-start text-light'
            onClick={()=>{
              setShowModal(true);
              setModalType(AdminActionsModalTypes.DELETE_CLIENT);
            }}
          >
            <span className='col'>
              <PersonX size={30} className='my-auto me-2'/>
            </span>
            <span className='col text-end'>
              Usuń konto klienta
            </span>
          </Button>

        </div>
      </div>
    </CardTemplate>
  );
};

export default EmployeesPageActionCard;