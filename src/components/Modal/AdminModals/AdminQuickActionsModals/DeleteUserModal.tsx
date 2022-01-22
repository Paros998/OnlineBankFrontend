import React, {FC} from 'react';
import {ModalBasicProps} from "../../../../interfaces/ModalBasicProps";
import {Roles} from "../../../../enums/Roles";
import DeleteClientModal from "./modals/DeleteClientModal";
import DeleteEmployeeModal from "./modals/DeleteEmployeeModal";

interface DeleteUserModalProps extends ModalBasicProps {
  type: Roles;
}

const DeleteUserModal:FC<DeleteUserModalProps> = ({setShowModal,showModal,type}) => {
  if(type === Roles.RoleClient)
    return <DeleteClientModal setShowModal={setShowModal} showModal={showModal}/>;
  else if(type === Roles.RoleEmployee)
    return <DeleteEmployeeModal setShowModal={setShowModal} showModal={showModal}/>;

  return null;
};

export default DeleteUserModal;