import React, {FC} from 'react';
import {Roles} from "../../../../enums/Roles";

import {ModalBasicProps} from "../../../../interfaces/ModalBasicProps";
import BlockEmployeeModal from "./modals/BlockEmployeeModal";
import BlockClientModal from "./modals/BlockClientModal";

interface BlockUserModalProps extends ModalBasicProps {
  type: Roles;
}

const BlockUserModal: FC<BlockUserModalProps> = ({type, showModal, setShowModal}) => {
  if(type === Roles.RoleEmployee)
    return <BlockEmployeeModal showModal={showModal} setShowModal={setShowModal} />
  else if(type === Roles.RoleClient)
    return <BlockClientModal setShowModal={setShowModal} showModal={showModal}  />
  return null;
};

export default BlockUserModal;