import React, {Dispatch, FC} from 'react';
import {AdminActionsModalTypes} from "../../../enums/AdminActionsModalTypes";
import NewEmployeeModal from "./AdminQuickActionsModals/NewEmployeeModal";
import BlockUserModal from "./AdminQuickActionsModals/BlockUserModal";
import {Roles} from "../../../enums/Roles";
import DeleteUserModal from "./AdminQuickActionsModals/DeleteUserModal";
import AssignEmployeeToOrderModal from "./AdminQuickActionsModals/AssignEmployeeToOrderModal";

interface AdminActionsModalsProps{
  setShowModal:Dispatch<React.SetStateAction<boolean>>;
  showModal:boolean;
  modalType:AdminActionsModalTypes;
}

const AdminActionsModals:FC<AdminActionsModalsProps> = ({setShowModal,showModal,modalType}) => {
  if(showModal){
    if(modalType === AdminActionsModalTypes.NEW_EMPLOYEE)
      return <NewEmployeeModal setShowModal={setShowModal} showModal={showModal}/>
    if(modalType === AdminActionsModalTypes.BLOCK_EMPLOYEE)
      return <BlockUserModal type={Roles.RoleEmployee} showModal={showModal} setShowModal={setShowModal}/>
    if(modalType === AdminActionsModalTypes.BLOCK_CLIENT)
      return <BlockUserModal type={Roles.RoleClient} showModal={showModal} setShowModal={setShowModal}/>
    if(modalType === AdminActionsModalTypes.DELETE_EMPLOYEE)
      return <DeleteUserModal type={Roles.RoleEmployee} showModal={showModal} setShowModal={setShowModal}/>
    if(modalType === AdminActionsModalTypes.DELETE_CLIENT)
      return <DeleteUserModal type={Roles.RoleClient} showModal={showModal} setShowModal={setShowModal}/>
    if(modalType === AdminActionsModalTypes.ASSIGN_EMPLOYEE)
      return <AssignEmployeeToOrderModal setShowModal={setShowModal} showModal={showModal} />
    else return null;
  }
  else return null;
};

export default AdminActionsModals;