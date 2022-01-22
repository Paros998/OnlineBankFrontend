import React, {Dispatch, FC} from 'react';
import CardTemplate from "../../CardTemplate";
import {Button} from "react-bootstrap";
import {PencilSquare, PersonDash, PersonPlus, PersonX} from "react-bootstrap-icons";
import {AdminActionsModalTypes} from "../../../../enums/AdminActionsModalTypes";

interface EmployeesPageActionCardProps {
  className?: string;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  setModalType: Dispatch<React.SetStateAction<AdminActionsModalTypes>>;
}

const EmployeesPageActionCard: FC<EmployeesPageActionCardProps> = ({className, setModalType, setShowModal}) => {
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
            className='w-60 mb-2 rounded-pill fw-bold row justify-content-between text-light d-flex'
            onClick={() => {
              setShowModal(true);
              setModalType(AdminActionsModalTypes.NEW_EMPLOYEE);
            }}
          >
            <PencilSquare className='col-1 my-auto ' size={24}/>
            <span className='col text-center'>
              Stwórz nowego pracownika
            </span>
            <span className='col-1'> </span>
          </Button>

          <Button
            variant={'primary'}
            className='w-60 mb-2 rounded-pill fw-bold row justify-content-between text-light d-flex'
            onClick={() => {
              setShowModal(true);
              setModalType(AdminActionsModalTypes.BLOCK_EMPLOYEE);
            }}
          >
            <PersonDash size={30} className='col-1 my-auto me-2'/>
            <span className='col text-center'>
              Zablokuj/Odblokuj konto pracownika
            </span>
            <span className='col-1'> </span>
          </Button>

          <Button
            variant={'primary'}
            className='w-60 mb-2 rounded-pill fw-bold row justify-content-between text-light d-flex'
            onClick={() => {
              setShowModal(true);
              setModalType(AdminActionsModalTypes.BLOCK_CLIENT);
            }}
          >

            <PersonDash size={30} className='col-1 my-auto me-2'/>

            <span className='col text-center'>
              Zablokuj/Odblokuj konto klienta
            </span>
            <span className='col-1'> </span>
          </Button>

          <Button
            variant={'dark'}
            className='w-60 mb-2 rounded-pill fw-bold row justify-content-between text-light d-flex'
            onClick={() => {
              setShowModal(true);
              setModalType(AdminActionsModalTypes.ASSIGN_EMPLOYEE);
            }}
          >

            <PersonPlus size={30} className='col-1 my-auto me-2'/>

            <span className='col text-center'>
              Przypisz zlecenie pracownikowi
            </span>
            <span className='col-1'> </span>
          </Button>

          <Button
            variant={'danger'}
            className='w-60 mb-2 rounded-pill fw-bold row justify-content-between text-light d-flex'
            onClick={() => {
              setShowModal(true);
              setModalType(AdminActionsModalTypes.DELETE_EMPLOYEE);
            }}
          >

            <PersonX size={30} className='col-1 my-auto me-2'/>
            <span className='col text-center'>
              Usuń konto pracownika
            </span>
            <span className='col-1'> </span>
          </Button>

          <Button
            variant={'danger'}
            className='w-60 mb-2 rounded-pill fw-bold row justify-content-between text-light d-flex'
            onClick={() => {
              setShowModal(true);
              setModalType(AdminActionsModalTypes.DELETE_CLIENT);
            }}
          >

            <PersonX size={30} className='col-1 my-auto me-2'/>

            <span className='col text-center'>
              Usuń konto klienta
            </span>
            <span className='col-1'> </span>
          </Button>

        </div>
      </div>
    </CardTemplate>
  );
};

export default EmployeesPageActionCard;