import React, {Dispatch, FC} from 'react';
import {AdminActionsModalTypes} from "../../../enums/AdminActionsModalTypes";
import NewEmployeeModal from "./AdminQuickActionsModals/NewEmployeeModal";

interface AdminActionsModalsProps{
  setShowModal:Dispatch<React.SetStateAction<boolean>>;
  showModal:boolean;
  modalType:AdminActionsModalTypes;
}

const AdminActionsModals:FC<AdminActionsModalsProps> = ({setShowModal,showModal,modalType}) => {
  if(showModal)
    if(modalType === AdminActionsModalTypes.NEW_EMPLOYEE)
      return <NewEmployeeModal setShowModal={setShowModal} showModal={showModal}/>
    else return null;
  else return null;
};

export default AdminActionsModals;